import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/results',
    name: 'Results',
    component: () => import(/* webpackChunkName: "Results" */ '@/views/Results')
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: () => import(/* webpackChunkName: "Favourites" */ '@/views/Favourites')
  },
  {
    path: '/',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Search" */ '@/views/Search')
  },
]

const router = new VueRouter({
  routes
})

export default router
