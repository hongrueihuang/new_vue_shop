import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: '',
    component:  () => import('../views/frontend/Home'),
    children: [
      {
        path:'/',
        name:'Home',
        component: () => import('../components/front/main')
      },
      {
        path:'products',
        name:'Products',
        component: () => import('../views/frontend/Products')
      },
      {
        path:'/product',
        name:'',
        component: () => import('../views/frontend/Details'),
        children: [
          {
            path: '/details/:id',
            name: 'Details',
            component: () => import('../views/frontend/Product')
          }
        ]
      },
      {
        path:'cart',
        name: 'Cart',
        component: () => import('../views/frontend/Cart')
      }
    ]
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
        path: 'products-list',
        name: 'Products-List',
        component: () => import('../views/backend/ProductsList.vue'),
        meta: {requiresAuth: true},
      },
      {
        path: 'orders-list',
        name: 'Orders-List',
        component: () => import('../views/backend/OrdersList.vue'),
        meta: {requiresAuth: true},
      },
      {
        path: 'coupons-list',
        name: 'Coupons-List',
        component: () => import('../views/backend/CouponsList.vue'),
        meta: {requiresAuth: true},
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
