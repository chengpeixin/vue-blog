import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import store from './store'
// 组件
import Head from './components/head.vue'
import './assets/styles/monokai-sublime.css'
// reset css
// import './assets/style/minireset.css'
import './assets/style/markdown.css'
// 公用css
import './assets/style/common.styl'

import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'

Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.config.productionTip = false
Vue.component('Head', Head)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
