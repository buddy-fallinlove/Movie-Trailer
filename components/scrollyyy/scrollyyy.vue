<template>
	<view>
<!-- 头部 -->
<view class="ani">
			<view>
				<image src="../../static/images/tabbar/icontag.png" mode="" class="xcs"></image>
			</view>
			<text>热门预告</text>
		</view>
		<!-- 视频 -->
<view class="box">
		<view v-for="(item,index) in trailer" :key="index">
			<view class="">
			<video :src="item.trailer" controls :poster="item.poster" class="box1"></video>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {
			trailer: {
				type: Array
			}

		},
		data() {
			return {}
		},
		methods: {

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
.xcs {
		width: 30rpx;
		height: 30rpx;
	}

	.ani {
		margin-left: 38rpx;
		width: 150rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 25rpx;
	}
	.box{
		width: 99%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-top: 20rpx;
	}
	.box1{
		width: 320rpx;
		height: 320rpx;
		margin-top: 20rpx;
	}
</style>
