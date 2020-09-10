import Vue from 'vue'
import App from './App'
import message from '@/components/quick-message/quick-message.vue'
Vue.component('quick-message',message);
import MinPicker from 'components/min-picker/min-picker.vue'
import MinPop from 'components/min-picker/min-popup.vue'
Vue.component('min-pop',MinPop)
Vue.component('min-picker',MinPicker)
Vue.prototype.$api = 'https://www.imovietrailer.com/superhero'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
