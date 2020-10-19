import Vue from 'vue'
import Vuex from 'vuex'
import 'jquery'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import currency from './filters/currency'
import App from './App.vue'
import router from './router'
import store from './store'
import './bus'



Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.use(Vueaxios, axios)
Vue.use(Vuex)
Vue.component('loading', Loading)
Vue.use(VueAwesomeSwiper)
Vue.filter('currency', currency)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const vm = this;
    const api = `${process.env.VUE_APP_APIPATH}api/user/check`;
    axios.post(api).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login'
        })
      }
    })
  }
  next()
})