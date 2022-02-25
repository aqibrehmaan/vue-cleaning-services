import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Quote from '../pages/Quote.vue'
import Success from '../pages/Success.vue'
import NotFound from '../pages/NotFound.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'quote',
    component: Quote
  },
//   {
//     path: '/services',
//     name: 'Services',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../pages/Services.vue')
//   }
{
    path: '/pricing',
    name: 'home',
    component: Home
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  },
  { path: '/:notFound(.*)', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if(to.hash) {
        return { 
          selector: to.hash,
          behavior: 'smooth'
        }
      }
    }
  }
})

export default router
