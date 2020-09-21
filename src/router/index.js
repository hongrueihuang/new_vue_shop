import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/frontend/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/backend/Login.vue')
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/backend/Dashboard.vue'),
    meta: {requiresAuth: true},
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/backend/Products.vue'),
        meta: {requiresAuth: true},
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/backend/Orders.vue'),
        meta: {requiresAuth: true},
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/backend/Coupons.vue'),
        meta: {requiresAuth: true},
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
