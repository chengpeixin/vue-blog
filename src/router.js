import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

// 内容页面
const Content = () => import('./views/Content.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/content/:id',
      name: 'Content',
      component: Content
    }
  ]
})
