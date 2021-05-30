import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  RESULTS_ROUTE_NAME,
  FAVOURITES_ROUTE_NAME,
  SEARCH_ROUTE_NAME,
} from './constants'

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
    path: '/',
    name: SEARCH_ROUTE_NAME,
    component: () => import(`@/views/Search`)
  },
]

const router = new VueRouter({
  routes
})

export default router
