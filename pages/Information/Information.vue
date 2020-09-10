<template>
	<view class="">
		<!-- 头像 -->
		<view class="gao" @click="clickhead">
			<!-- 头像弹出层 -->
			<uni-popup ref="popup" type="bottom">
				<view class="btn1">查看我的头像</view>
				<view class="btn2">从手机相册中选择</view>
				<view class="btn3" @click="closeds">取消</view>
			</uni-popup>
			<view class="ml">头像</view>
			<view class="df">
				<image :src="item.faceImage" mode="" class="img"></image>
				<view class="fs">></view>
			</view>
		</view>
		<!-- 昵称 -->
		<view class="gao" @click="clicknickname">
			<!-- 修改昵称 -->
			<uni-popup ref="popups" type="bottom">
				<view class="yipai">
					<view class="quxiao" @click="closes">取消</view>
					<view class="que" @click="query">确认</view>
					<input type="text" :value="item.nickname" class="inpt" @input="nick" />
				</view>
			</uni-popup>
			<view class="ml">昵称</view>
			<view class="df">
				<view class="mt">{{item.nickname}}</view>
				<view class="fs">></view>
			</view>
		</view>
		<!-- 生日 -->
		<view class="gao" @click="clickbirthday">
			<!-- 弹出层 -->
			<min-pop size="height" :show="show" @close='names'>
				<min-picker :endTime="endTime" :startTime="startTimes" @cancel="cancel" @sure="sure">
				</min-picker>
			</min-pop>
			<view class="ml">生日</view>
			<view class="df">
				<view class="mt">{{item.birthday}}</view>
				<view class="fs">></view>
			</view>
		</view>
		<!-- 性别 -->
		<picker @change="bindPickerChange" :value="index" :range="array">
			<view class="gao">
				<view class="ml">性别</view>
				<view class="df">
					<view class="mt">{{sex}}</view>
					<view class="fs">></view>
				</view>
			</view>
		</picker>
		<!-- 修改按钮 -->
		<view class="gai">
			<view class="liji" @click="clickmodify">立即修改</view>
		</view>
	</view>
</template>

<script>
	import uniPopup from '../../components/une-ui/uni-popup/uni-popup.vue'
	import uniPopupMessage from '../../components/une-ui/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '../../components/une-ui/uni-popup/uni-popup-dialog.vue'
	export default {
		name: "",
		components: {
			uniPopup,
			uniPopupMessage,
			uniPopupDialog,
		},
		props: {},
		data() {
			return {
				item: '',
				sex: '',
				sexs: '',
				show: false,
				startTimes: [1999, 1, 1],
				endTime: 2046,
				values: '',
				date: '',
				index: 0,
				array: ['男', '女', '保密'],
			}
		},
		methods: {
			// 点击头像弹出弹出层
			clickhead() {
				this.$refs.popup.open()
			},
			// 点击取消,关闭弹出层
			closeds() {
				this.$refs.popup.close()
			},
			// 修改昵称
			nick(e) {
				// console.log(e)
				this.values = e.detail.value
			},
			// 修改完成点击确认
			query() {
				this.$refs.popups.close()
				this.item.nickname = this.values
			},
			// 点击昵称弹出弹出层
			clicknickname() {
				this.$refs.popups.open()
			},
			// 取消事件
			cancel() {
				this.names()
			},
			// 点击取消,关闭弹出层
			closes() {
				this.$refs.popups.close()
			},
			// 确认事件
			sure(e) {
				// console.log(e)
				// 输出 { year: 2020,month: 3,day: 23}
				let year = e.a
				let month = e.b
				let day = e.c
				// 年月日拼接
				this.date = `${year}-${month}-${day}`
				// console.log(this.date)
				this.item.birthday = this.date
			},
			// picker显示
			clickbirthday() {
				this.show = true
			},
			// 关闭picker
			names() {
				this.show = false
			},
			bindPickerChange(e) {
				// console.log(e)
				this.sexa = e.detail.value
				this.sexs = this.sexa
				if (this.sexs === 0) {
					this.sexs = '男'
				} else if (this.sexs === 2) {
					this.sexs = '保密'
				} else {
					this.sexs = '女'
				}
				this.sex = this.sexs
			},
			// 点击修改我的资料
			clickmodify() {
				uni.request({
					url: `${this.$api}/user/modifyUserinfo?qq=434714873`,
					method: 'POST',
					data: {
						birthday: this.item.birthday,
						nickname: this.item.nickname,
						sex: this.sexa,
						userId: this.item.id
					},
					header: {
						"headerUserId": this.item.id,
						"headerUserToken": this.item.userUniqueToken
					},
					success: res => {
						uni.setStorageSync('obj', res.data.data)
						// console.log(res)
						// 跳转到我的页面
						uni.switchTab({
							url: `/pages/my/my`
						})
					},
					fail: () => {},
					complete: () => {}
				});
			},
		},
		mounted() {

		},
		onLoad(option) {
			this.item = JSON.parse(option.item)
			console.log(this.item);
			if (this.item.sex === 0) {
				this.sex = '男'
			} else if (this.item.sex === 2) {
				this.sex = "保密"
			} else {
				this.sex = '女'
			}
		},
		filters: {

		},
		computed: {

		},
		watch: {

		},
		directives: {

		}
	}
</script>

<style scoped lang="scss">
	.gao {
		width: 100%;
		height: 100rpx;
		border-bottom: 2rpx solid #ccc;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 10rpx;
		color: #999;
	}

	.ml {
		margin-left: 40rpx;
	}

	.btt {
		position: absolute;
		bottom: 100rpx;
		left: 0;
		right: 0;
	}

	.btn {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.df {
		display: flex;
		margin-right: 30rpx;
	}

	.img {
		width: 80rpx;
		height: 80rpx;
	}

	.fs {
		font-size: 50rpx;
		color: #999;
		margin-left: 10rpx;
	}

	.mt {
		margin-top: 10rpx;
	}

	.btn1 {
		height: 100rpx;
		line-height: 80rpx;
		text-align: center;
		background: white;
	}

	.btn2 {
		height: 100rpx;
		line-height: 80rpx;
		text-align: center;
		background: white;
		border-bottom: 1rpx solid #eee;
	}

	.btn3 {
		height: 100rpx;
		line-height: 80rpx;
		text-align: center;
		background: white;
	}

	.yipai {
		width: 750rpx;
		height: 300rpx;
		background: white;
	}

	.quxiao {
		position: absolute;
		left: 20rpx;
	}

	.que {
		position: absolute;
		right: 20rpx;
		color: blue;
	}

	.inpt {
		width: 750rpx;
		height: 80rpx;
		text-align: center;
		position: absolute;
		top: 120rpx;
	}

	.gai {
		width: 100%;
		height: 100rpx;
		margin-top: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.liji {
		width: 500rpx;
		height: 80rpx;
		background: #999;
		border-radius: 12rpx;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
