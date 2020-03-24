// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'
import axios from 'axios'
/* import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin) */

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.prototype.ajax = axios
Vue.prototype.basePath = '/api'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
