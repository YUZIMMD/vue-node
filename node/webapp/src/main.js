// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import $ from 'jquery'
import echarts from 'echarts'
import 'animate.css/animate.min.css'
// import 'wowjs/dist/wow.min.js'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})