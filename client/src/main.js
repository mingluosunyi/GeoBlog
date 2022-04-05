import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFetch,{ $fetch } from '@/plugins/fetch'
import * as filters from '@/utils/filters'

Vue.use(VueFetch,{
  baseUrl: 'http://localhost:3000'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
