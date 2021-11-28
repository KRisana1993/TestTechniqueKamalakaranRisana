import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ArticlesList from '../components/ArticlesList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    },
    {
      path: '/articles',
      name: 'articlesList',
      component: ArticlesList
    }
  ]
})
