// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import Vuesax from 'vuesax'
import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel)

import 'vuesax/dist/vuesax.css' //vuesax styles
Vue.use(Vuesax)

Vue.config.productionTip = false
Vue.use(Buefy)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})