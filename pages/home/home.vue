<template>
	<view class="">
		<uni-search-bar placeholder="请输入电影信息" @input="search" @cancel="cancel"></uni-search-bar>
		<!-- 热门推荐判断 -->
		<view class="hang" v-if="flag===0">
			<view v-for="(item,index) in arr" :key="index" @click="clickname(item)">
				<view class="huan">
					<image :src="item.cover" mode="" class="img"></image>
					<text class="zhi">{{item.name}}</text>
				</view>
			</view>
		</view>
		<!-- 搜索详情 -->
		<view class="hang">
			<view v-if="flag===1" v-for="(item,index) in ass" :key="index" @click="clickname(item)">
				<image :src="item.cover" mode="" class="img"></image>
				<view class="zhi">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from "../../components/une-ui/uni-search-bar/uni-search-bar.vue"
	export default {
		name: "",
		components: {
			uniSearchBar
		},
		props: {},
		data() {
			return {
				value: "",
				page: 1,
				pageSize: 30,
				arr: [],
				ass: [],
				flag: 0,
			}
		},
		methods: {
			//绑定inbut款事件
			search(e) {
				this.value = e.value
				this.flag = 1
				uni.request({
					url: `${this.$api}/search/list?qq=434714873&keywords=${e.value}&page=${this.page}&pageSize=${this.pageSize}`,
					method: 'POST',
					data: {},
					success: res => {
						// console.log(res);
						this.ass = res.data.data.rows
					},
					fail: (err) => {
						console.log(err);
					},
					complete: () => {}
				});
			},
			//点击取消
			cancel() {
				this.flag = 0
			},
		//点击传item跳转详情页 
		 clickname(item){
			console.log(item);
			uni.navigateTo({
				url:`../details/details?item=${JSON.stringify(item)}`
			})
		 },
		},
		mounted() {

		},
		onLoad() {
			//热门影片
			uni.request({
				url: `${this.$api}/search/list?qq=434714873&keywords=${this.value}&page=${this.page}&pageSize=${this.pageSize}`,
				method: 'POST',
				data: {},
				success: res => {
					// console.log(res);
					this.arr = res.data.data.rows
				},
				fail: (err) => {
					console.log(err);
				},
				complete: () =>{}
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
	.hang {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.huan {
		display: flex;
		flex-direction: column;
	}

	.img {
		width: 225rpx;
		height: 270rpx;
		padding: 20rpx 0rpx 20rpx 20rpx;
	}

	.zhi {
		width: 225rpx;
		font-size: 30rpx;
		color: red;
		margin-left: 20rpx;
	}
</style>
