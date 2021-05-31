import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  RESULTS_ROUTE_NAME,
  FAVOURITES_ROUTE_NAME,
  LOGIN_ROUTE_NAME,
  SEARCH_ROUTE_NAME,
} from './constants'

import { AUTH_LAYOUT_NAME } from '@/layouts/constants'

import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/results',
    name: RESULTS_ROUTE_NAME,
    component: () => import(`@/views/Results`),
    beforeEnter: (to, from, next) => {
      if (!store.getters.isAuthenticated && from.name != LOGIN_ROUTE_NAME) 
        next({ name: LOGIN_ROUTE_NAME })
      else if (!store.getters.isAuthenticated && from.name === LOGIN_ROUTE_NAME)
        next(false)
      else next()
    }
  },
  {
    path: '/favourites',
    name: FAVOURITES_ROUTE_NAME,
    component: () => import(`@/views/Favourites`),
    beforeEnter: (to, from, next) => {
      if (!store.getters.isAuthenticated && from.name != LOGIN_ROUTE_NAME) 
        next({ name: LOGIN_ROUTE_NAME })
      else if (!store.getters.isAuthenticated && from.name === LOGIN_ROUTE_NAME)
        next(false)
      else next()
    }
  },
  {
    path: '/login',
    name: LOGIN_ROUTE_NAME,
    component: () => import(`@/views/Login`),
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) next({ name: SEARCH_ROUTE_NAME })
      else next()
    },
    beforeLeave: (to, from, next) => {
      if (!store.getters.isAuthenticated && to.name != LOGIN_ROUTE_NAME) 
        next(false)
      else next()
    },
    meta: {
      layout: AUTH_LAYOUT_NAME 
    }
  },
  {
    path: '/',
    name: SEARCH_ROUTE_NAME,
    component: () => import(`@/views/Search`),
    beforeEnter: (to, from, next) => {
      if (!store.getters.isAuthenticated && from.name != LOGIN_ROUTE_NAME) 
        next({ name: LOGIN_ROUTE_NAME })
      else if (!store.getters.isAuthenticated && from.name === LOGIN_ROUTE_NAME)
        next(false)
      else next()
    }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.getters.isAuthenticated && to.name != LOGIN_ROUTE_NAME) 
    next({ name: LOGIN_ROUTE_NAME })
  else next()
})

export default router
