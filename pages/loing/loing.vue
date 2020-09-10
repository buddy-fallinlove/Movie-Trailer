<template>
	<view>
		<!-- 背景 -->
		<image src="../../static/images/tabbar/u=1847412057,3264767759&fm=26&gp=0.jpg" mode="" class="img"></image>
		<view class="back">
			<image src="../../static/images/tabbar/QQ图片20200806145400.jpg" mode="" class="imgs"></image>
		</view>
		<!-- 账号 -->
		<view class="box">
			<view class="ml">账号</view>
			<input type="text" v-model="username" placeholder="请输入用户名" class="input" />
		</view>
		<!-- 密码 -->
		<view class="box1">
			<view class="ml">密码</view>
			<input type="password" v-model="password" placeholder="请输入密码" class="inputs" />
		</view>
		<!-- 登陆/注册 -->
		<view class="an">
			<view class="puy" @click="goomy">注册/登陆</view>
		</view>
		<!-- 其他登陆 -->
		<view class="san">
			<text>其他登录方式</text>
		</view>
		<view class="lu">
			<view class="lus">
				<image src="../../static/images/tabbar/weixin.png" mode="" class="qqs"></image>
				<image src="../../static/images/tabbar/qq.png" mode="" class="qqs"></image>
				<image src="../../static/images/tabbar/weibo.png" mode="" class="qqs"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {},
		data() {
			return {
				username: '',
				password: '',
				Uid: '',
				nickname: '',
				face: '',
			}
		},
		methods: {
			//用户名
			name(e) {
				// console.log(e);
				this.username = e.detail.value
			},
			//密码
			passwords(e) {
				// console.log(e);
				this.password = e.detail.value
			},
			goomy() {
				if (this.username === "" && this.password === "") {
					this.$refs.message.show({
						type: 'default',
						msg: '用户名和密码不能为空',
					})
				} else {
					uni.request({
						url: `${this.$api}/user/registOrLogin?userBO=${this.userBO}&qq=434714873`,
						method: 'POST',
						data: {
							'password': this.password,
							'username': this.username,
						},
						success: res => {
							console.log(res);
							this.face = res.data.data.faceImage
							this.nickname = res.data.data.nickname
							this.Uid = res.data.data.id
							if (res.data.status === 200) {
								uni.showToast({
									title: "登录成功"
								})
								uni.setStorage({
									key: "id",
									data: this.username
								})
								uni.reLaunch({
									url: `../my/my?item=${JSON.stringify(res.data.data)}`
								})
							} else {
								uni.showToast({
									title: "密码错误"
								})
								this.password = ''
							}
						},
						fail: (err) => {
							console.log(err);
						},
						complete: () => {}
					});
				}
			}

		},
		mounted() {

		},
		onLoad() {

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
	.img {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
		opacity: 0.5;
	}

	.back {
		width: 100%;
		height: 500rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.imgs {
		width: 200rpx;
		height: 200rpx;
		position: absolute;
		border-radius: 50%;
		opacity: 0.8;
	}

	.box {
		width: 90%;
		height: 80rpx;
		display: flex;
		border-bottom: 3rpx solid #999;
		margin-left: 35rpx;
	}

	.input {
		width: 500rpx;
		height: 52rpx;
		margin-left: 40rpx;
	}

	.ml {
		width: 100rpx;
		margin-left: 30rpx;
		font-weight: 700;
	}

	.box1 {
		width: 90%;
		height: 80rpx;
		display: flex;
		border-bottom: 3rpx solid #999;
		margin-left: 35rpx;
		margin-top: 80rpx;
	}

	.inputs {
		width: 500rpx;
		height: 52rpx;
		margin-left: 40rpx;
	}

	.an {
		width: 100%;
		height: 150rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 50rpx;
	}

	.puy {
		width: 600rpx;
		height: 100rpx;
		background: rgb(0, 122, 255);
		border-radius: 12rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
	}

	.san {
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.lu {
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.lus {
		width: 500rpx;
		height: 100rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.qqs {
		width: 60rpx;
		height: 60rpx;
	}
</style>
