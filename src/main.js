import Vue from 'vue'
import Vuex from 'vuex'
import 'jquery'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import 'bootstrap';
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vueaxios, axios);
Vue.use(Vuex);
Vue.component('loading', Loading);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
