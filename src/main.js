// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as d3 from 'd3'

Vue.config.productionTip = false
Vue.prototype.$d3 = d3

module.exports = {
  chainWebpack: config => config.resolve.symlinks(false)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
