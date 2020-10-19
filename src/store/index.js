import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    products:[],
    carts: []
  },
  mutations: {
    LOADING(state, status) {
        state.isLoading = status;
    },
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    CARTS(state, payload) {
      state.carts = payload;
    }
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status)
    },
    getProducts(context) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/products/all`;
      context.commit('LOADING', true)
      axios.get(api).then((response) => {
        context.commit('PRODUCTS',response.data.products);
        context.commit('LOADING', false)
      })
    },
    updateCart(context) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('LOADING', true)
      axios.get(api).then((response) => {
        context.commit('CARTS',response.data.data.carts);
        context.commit('LOADING', false)
      })
    },
    removeCart(context, id) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      context.commit('LOADING', true);
            axios.delete(api).then((response) => {
                    context.commit('LOADING', false);
                    context.dispatch('updateCart');
            })
    },
    addCart(context, { id, qty }) {
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            context.commit('LOADING', true);
            const item = {
                product_id: id,
                qty
            };
            axios.post(api, {
                data: item
            }).then((response) => {
              context.commit('LOADING', false);
              context.dispatch('updateCart');
              console.log('加入購物車:', response);
              // vm.$bus.$emit('message:push', response.data.message, 'success')
            })
    }
  },
  modules: {
  }
})
