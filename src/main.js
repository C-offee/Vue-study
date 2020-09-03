import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import 'nprogress/nprogress.css'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
