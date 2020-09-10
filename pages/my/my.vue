<template>
	<div>
		<view class="" v-if="ids === ''">
			<view class="box">
				<view class="img">
					<image src="../../static/images/tabbar/QQ图片20200806145400.jpg" mode="" class="picture1"></image>
				</view>
				<view class="word1" @click="login">注册/登录</view>
			</view>
		</view>
		<view class="" v-else>
			<view class="box">
				<view class="img">
					<image :src="item.faceImage" mode="" class="picture1"></image>
				</view>
				<view class="box1">
					<view class="word1">{{item.nickname}}</view>
					<view class="word1">ID:{{id}}</view>
				</view>
				<image src="../../static/images/tabbar/set.png" mode="" class="icon1" @click="Information"></image>
			</view>
			<button type="primary" class="login" @click="outlogin">退出登录</button>
		</view>
	</div>
</template>

<script>
	export default {
		components: {

		},
		props: {},
		data() {
			return {
				id: '',
				ids: '',
				user: '',
				item: '',
			}
		},
		methods: {
			Information() {
				uni.navigateTo({
					url: `../Information/Information?item=${JSON.stringify(this.item)}`
				})
			},
			login() {
				uni.navigateTo({
					url: '../loing/loing'
				})
			},
			outlogin() {
				uni.clearStorage()
				this.ids === ''
				uni.request({
					url: `${this.$api}/user/logout?userId=${this.ids}&qq=40699904`,
					method: 'POST',
					success: res => {
						console.log(res)
					},
					fail: () => {},
					complete: () => {}
				});
				uni.navigateTo({
					url: "../supries/supries"
				})

			}
		},
		mounted() {
			uni.getStorage({
				key: "id",
				success: (res) => {
					this.ids = res.data
					console.log(this.ids)
				}
			})
		},
		onLoad(option) {
			if (option.item === undefined) {} else {
				this.item = JSON.parse(option.item)
				// console.log(this.item)
				this.id = this.item.id
				this.user = this.item.username
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
	.picture1 {
		width: 150rpx;
		height: 150rpx;
		border-right: 50%;
	}

	.img {
		width: 280rpx;
		height: 400rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.box {
		display: flex;
		align-items: center;
		width: 100%;
		height: 400rpx;
		background: url(../../static/images/tabbar/back.jpg);
	}

	.word1 {
		font-size: 34rpx;
		color: white;
		display: flex;
		align-items: center;
	}

	.icon {
		width: 50rpx;
		height: 50rpx;
		margin: 20rpx;
		position: relative;
		left: 200rpx;
	}

	.icon1 {
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		top: 20rpx;
		right: 20rpx;

	}

	.login {
		margin-top: 200rpx;
	}
</style>
