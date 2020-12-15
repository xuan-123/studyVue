// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import './assets/css/default.css'
import 'lib-flexible'
//引用过滤器
import *as filter from '../src/filter/filter'
Object.keys(filter).forEach((key)=>{
  Vue.filter(key,filter[key])
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
