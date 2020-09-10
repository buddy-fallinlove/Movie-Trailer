<template>
	<view>
		<view class="ani">
			<view>
				<image src="../../static/images/tabbar/热门.png" mode="" class="xcs"></image>
			</view>
			<text>热门超英</text>
		</view>
		<scroll-view scroll-x>
			<view class="title">
				<view v-for="(item,index) in superhero" :key="index">
					<view class="titleF">
						<image :src="item.cover" mode="" class="image"></image>
					</view>
					<view class="zhi">
						<view>{{item.name}}</view>
					</view>
					<view style="display: flex; font-size: 25rpx;">
						<uni-rate :size="13" :value="5"/>
						<view>
							{{item.score}}分
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
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
			superhero: {
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
	.image {
		width: 220rpx;
		height: 220rpx;
	}

	.title {
		display: flex;
		align-items: center;
	}

	.titleF {
		display: flex;
		align-items: center;
		height: 250rpx;
		padding-left: 10rpx;
	}

	.zhi {
		width: 200rpx;
		font-size: 26rpx;
		color: #6e6e6e;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		margin-left: 10rpx;
	}

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
</style>
