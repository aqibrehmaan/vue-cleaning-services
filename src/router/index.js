import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Quote from '../pages/Quote.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
    path: '/quote',
    name: 'quote',
    component: Quote
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if(from.name == 'quote' && to.name == 'home') {
        return { 
          el: '#house-plans',
          behavior: 'smooth'
        }
      }
    }
  }
})

export default router
