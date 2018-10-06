import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import store from './store'
// 组件
import Head from './components/head.vue'
import './assets/styles/monokai-sublime.css'
// reset css
import './assets/style/minireset.css'
// 公用css
import './assets/style/common.styl'
Vue.config.productionTip = false
Vue.component('Head', Head)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
