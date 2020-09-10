
<template>
   <view class="">
  <view>
	<rotation :images="images"></rotation>  
  </view>
  <view>
	  <scrollxxx :superhero="superhero"></scrollxxx>
  </view>
  <view>
	  <scrollyyy :trailer="trailer"></scrollyyy>
  </view>
  <view>
	  <scollwww :app="app"></scollwww>
	  
  </view>
   </view>
</template>

<script>
import rotation from "../../components/rotation/rotation.vue"
import scrollxxx from "../../components/scrollxxx/scrollxxx.vue"
import scrollyyy from "../../components/scrollyyy/scrollyyy.vue"
import scollwww from "../../components/scrollwww/scrollwww.vue"
export default {
name: "",
components: {
rotation,
scrollxxx,
scrollyyy,
scollwww
},
props: {},
data () {
  return {
	  images:[],
	  superhero:[],
	  trailer:[],
	  app:[]
    }
  },
  methods: {

  },
  mounted () {
	  //轮播图
	  uni.request({
	  	url: `${this.$api}/index/carousel/list?qq=40699904`,
	  	method: 'POST',
	  	data: {},
	  	success: res => {
			this.images =res.data.data 
	  	// console.log(res.data.data);
	  	},
	  	fail: (err) => {
	  		console.log(err);
	  	},
	  	complete: () => {}
	  });
	  // 热门超英
	  uni.request({
	  	url: `${this.$api}/index/movie/hot?qq=40699904&type=superhero`,
		method:'POST',
		data: {},
	  	success: res => {
			this.superhero=res.data.data
			// console.log(res.data.data);
		},
	  	fail: (err) => {
			console.log(err);
		},
	  	complete: () => {}
	  });
	  //热门预告
	  uni.request({
	  	url: `${this.$api}/index/movie/hot/?qq=40699904&type=trailer`,
	  	method: 'POST',
	  	data: {},
	  	success: res => {
			this.trailer =res.data.data
			// console.log(res.data.data);
		},
	  	fail: (err) => {
			console.log(err);
		},
	  	complete: () => {}
	  });
	  //猜你喜欢
	  uni.request({
	  	url: `${this.$api}/index/guessULike?qq=40699904`,
	  	method: 'POST',
	  	data: {},
	  	success: res => {
			this.app =res.data.data
			console.log(res.data.data);
		},
	  	fail: (err) => {
			console.log(err);
		},
	  	complete: () => {}
	  });
  },
  onLoad () {

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

</style>
