<template>
	<view>
		<view>
			<video :src="arr.trailer" controls :poster="arr.poster" class="wids"></video>
		</view>
		<view class="xiangx">
			<image :src="arr.poster" mode="" class="img"></image>
			<view class="dad">
				<text class="names">{{arr.name}}</text>
				<text class="fsize">{{arr.basicInfo}}</text>
				<text class="fsize">{{arr.originalName}}</text>
				<text class="fsize">{{arr.releaseDate}}</text>
				<view class="fen">
					<view class="xia">
						<text>综合评分</text>
						<view class="red">{{arr.score}}</view>
					</view>
					<view class="xiasq">
						<uni-rate :size="12" :value="5" color="#ccc" active-color="#ccc" />
						<text class="hui">{{arr.score}}人点赞</text>
					</view>
				</view>
			</view>
		</view>
		<view class="xian"></view>
		<view class="box">
			<view class="box2">剧情介绍:</view>
			<view class="box1">{{arr.plotDesc}}。</view>
		</view>
		<!-- 演职人员 -->
		<view class="juqing">
			<view class="huise">演职人员:</view>
			<scroll-view scroll-x="true">
				<view class="map">
					<!-- 导演 -->
					<view v-for="(item,index) in ass" :key="item.name">
						<image :src="item.photo" mode="" class="images"></image>
						<view class="chang">{{item.name}}</view>
						<view class="chang-a">{{item.actName}}</view>
					</view>
					<!-- 演员 -->
					<view v-for="(item,index) in add" :key="item.name">
						<image :src="item.photo" mode="" class="images"></image>
						<view class="chang">{{item.name}}</view>
						<view class="chang-a">{{item.actName}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 剧组照片 -->
		<view class="xiansa">
			<text class="zhao">剧照:</text>
			<view class="item">
			<view v-for="(item,index) in app" :key="item.name">
				<image :src="item" mode="" class="images"></image>
			</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from '../../components/une-ui/uni-rate/uni-rate.vue'
	export default {
		name: "",
		components: {
			uniRate
		},
		props: {},
		data() {
			return {
				arr: [],
				app: [],
				ass: [],
				add: []
			}
		},
		methods: {

		},
		mounted() {

		},
		onLoad(options) {
			this.arr = JSON.parse(options.item)
			// console.log(this.arr);
			// 取出item里面的剧组照片
			this.app = JSON.parse(this.arr.plotPics)
			// console.log(this.app);
			// 取出item里面的Id
			let id = this.arr.id
			// 导演的请求
			uni.request({
				url: `${this.$api}/search/staff/${id}/1?qq=434714873`,
				method: 'POST',
				data: {},
				success: res => {
					console.log(res);
					this.ass = res.data.data
				},
				fail: (err) => {
					console.log(err);
				},
				complete: () => {}
			});
			// 演员的请求
			uni.request({
				url: `${this.$api}/search/staff/${id}/2?qq=434714873`,
				method: 'POST',
				data: {},
				success: res => {
					console.log(res);
					this.add = res.data.data
				},
				fail: (err) => {
					console.log(err);
				},
				complete: () => {}
			});
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
	.wids {
		width: 100%;
	}

	.xiangx {
		width: 100%;
		margin-top: 60rpx;
		height: 400rpx;
		display: flex;
	}

	.xian {
		width: 90%;
		margin-left: 40rpx;
		border-bottom: 1rpx solid #EEEEEE;
	}

	.img {
		width: 30%;
		height: 300rpx;
	}

	.dad {
		display: flex;
		flex-direction: column;
		width: 70%;
		height: 300rpx;
		margin-left: 37rpx;
	}

	.names {
		width: 250rpx;
		font-size: 36rpx;
		font-weight: 774;
		white-space: nowrap;
		word-break: keep-all;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.fsize {
		color: #999;
		font-size: 24rpx;
		margin-top: 10rpx;
	}

	.fen {
		width: 366rpx;
		height: 124rpx;
		background: #eee;
		margin-top: 20rpx;
		display: flex;
		justify-items: center;
		align-items: center;
	}

	.xia {
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
		font-size: 32rpx;
		margin-left: 10rpx;
	}

	.red {
		color: rgb(254, 188, 80);
	}

	.xiasq {
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
		margin-left: 80rpx;
		margin-top: 40rpx;
	}

	.hui {
		color: #ccc;
		font-size: 30rpx;
	}

	.box {
		margin-top: 20rpx;
		width: 90%;
		margin-left: 40rpx;
		border-bottom: 1rpx solid #EEEEEE;
	}

	.box1 {
		margin-top: 10rpx;
		font-size: 26rpx;
		color: #000;
	}

	.box2 {
		width: 220rpx;
		display: flex;
		margin-left: 13rpx;
		font-size: 26rpx;
		color: #999999;
	}

	.map {
		display: flex;
	}

	.images {
		width: 170rpx;
		height: 210rpx;
		padding: 0rpx 20rpx;
		margin-top: 20rpx;
	}

	.chang {
		width: 180rpx;
		white-space: nowrap;
		word-break: keep-all;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 34rpx;
		margin-left: 20rpx;
	}

	.chang-a {
		color: #999;
		font-size: 30rpx;
		margin-left: 20rpx;
	}

	.juqing {
		width: 90%;
		margin-left: 40rpx;
		margin-top: 10rpx;
	}

	.huise {
		margin-top: 20rpx;
		color: #999;
		font-size: 30rpx;
	}

	.xiansa {
		width: 90%;
		border-top: 1rpx solid #ccc;
		margin-left: 40rpx;
		margin-top: 20rpx;
	}
		.zhao {
			margin-top: 20rpx;
			color: #999;
			font-size: 30rpx;
		}
	
		.item {
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
		}
</style>
