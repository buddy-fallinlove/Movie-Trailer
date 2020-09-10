<template>
	<view class="">
		<view v-for="(item,index) in app" :key="index">
			<view class="df">
				<image :src="item.cover" mode="" class="images"></image>

				<view class="dad">
					<text class="names">{{item.name}}</text>
					<uni-rate :size="13" :value="5" class="mtea" />
					<view class="fsize">{{item.basicInfo}}</view>
					<view class="fsize">{{item.releaseDate}}</view>
				</view>
				<view class="gaog">
					<image src="../../static/images/tabbar/点赞.png" mode="" class="huang"></image>
					<view class="se">赞一下</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from '../une-ui/uni-rate/uni-rate.vue'
	export default {
		name: "",
		components: {
			uniRate
		},
		props: {
			app: {
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
	.df {
		display: flex;
	}

	.images {
		width: 190rpx;
		height: 250rpx;
		padding: 20rpx 30rpx;
	}

	.dad {
		display: flex;
		flex-direction: column;
		width: 300rpx;
		height: 250rpx;
		margin-top: 20rpx;
	}

	.names {
		width: 250rpx;
		font-size: 36rpx;
		white-space: nowrap;
		word-break: keep-all;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.mtea {
		margin-top: 10rpx;
	}

	.fsize {
		color: #999;
		font-size: 24rpx;
		margin-top: 10rpx;
	}
	.gaog {
			width: 230rpx;
			height: 250rpx;
			border-left: 1rpx dashed #999;
			margin-top: 20rpx;
			margin-left: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.huang {
				width: 50rpx;
				height: 50rpx;
				color: rgb(255,190,51);
			}
			.se {
				font-size: 30rpx;
				color: rgb(255,190,51);
			}
</style>
