import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Login from '@/components/Login'
import StoriesPage from '@/components/StoriesPage'
import StoriesAll from '@/components/StoriesAll'
import StoriesFamous from '@/components/StoriesFamous'
import StoriesEdit from '@/components/StoriesEdit'

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
        path: '/',
        name: 'stories.all',
        component: StoriesAll
      },
      {
        path: 'famous',
        name: 'stories.famous',
        alias: '/famous',
        component: StoriesFamous
      },
      {
        path: ':id/edit',
        props: (route) => ({ id : Number(route.params.id) }),
        name: 'stories.edit',
        component: StoriesEdit
      }
    ]
  }
]

export default new Router({ 
  mode: 'history',
  base: '/',
  linkActiveClass: 'my-active-class',
  routes
})