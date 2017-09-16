import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Login from '@/components/Login'
import StoriesPage from '@/components/StoriesPage'
import StoriesAll from '@/components/StoriesAll'
import StoriesFamous from '@/components/StoriesFamous'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'hello',
    component: Hello
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/stories',
    component: StoriesPage,
    children: [
      {
        path: 'all',
        name: 'stories.all',
        component: StoriesAll
      },
      {
        path: 'famous',
        name: 'stories.famous',
        component: StoriesFamous
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  base: '/',
  routes
})