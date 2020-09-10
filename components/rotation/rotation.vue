<template>
<view class="rotationChart">
<swiper 
class="swiper"
:indicator-dots="true" 
:autoplay="true" 
:interval="2000" 
:duration="500" 
:circular="true">
	<swiper-item v-for="(item,index) in images" :key="index"> 
		<image :src="item.image" mode="widthFix" class="swiper-image"></image>
	</swiper-item>
</swiper>
</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {
			images:{
				type:Array
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
.rotationChart {
  text-align: center;
}
.swiper,
.swiper-item {
    height: 280rpx ! important;
}
.swiper-image {
  width: 95%;
  height: 280rpx ! important;
}
</style>

