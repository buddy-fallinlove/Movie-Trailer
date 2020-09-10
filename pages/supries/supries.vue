<template>
    <div>
        
    </div>
</template>

<script>
export default {
name: "",
components: {

},
props: {},
data () {
  return {
    }
  },
  methods: {
get(){
	uni.reLaunch({
		url:'../my/my'
	})
}
  },
  mounted () {
this.get()
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
