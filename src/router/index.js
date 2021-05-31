import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  RESULTS_ROUTE_NAME,
  FAVOURITES_ROUTE_NAME,
  LOGIN_ROUTE_NAME,
  SEARCH_ROUTE_NAME,
} from './constants'

import { AUTH_LAYOUT_NAME } from '@/layouts/constants'

Vue.use(VueRouter)

const routes = [
  {
    path: '/results',
    name: RESULTS_ROUTE_NAME,
    component: () => import(`@/views/Results`)
  },
  {
    path: '/favourites',
    name: FAVOURITES_ROUTE_NAME,
    component: () => import(`@/views/Favourites`)
  },
  {
    path: '/login',
    name: LOGIN_ROUTE_NAME,
    component: () => import(`@/views/Login`),
    meta: {
      layout: AUTH_LAYOUT_NAME 
    }
  },
  {
    path: '/',
    name: SEARCH_ROUTE_NAME,
    component: () => import(`@/views/Search`)
  },
]

const router = new VueRouter({
  routes
})

export default router
