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
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import { localize } from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW.json';
import { configure } from 'vee-validate'
// import VueI18n from 'vue-i18n';
// import validationMessages from 'vee-validate/dist/locale/zh_TW.json'
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
// Register it globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  }
})
extend('required', {
  ...required,
});
// Add the email rule
extend('email', {
  ...email,
});
localize('zhTW', zhTW);




new Vue({
  router,
  store,
  // VueI18n,
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