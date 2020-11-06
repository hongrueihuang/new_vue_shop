import axios from 'axios';
export default {
    state: {
        products: [],
        pagination: {},
    },
    mutations: {
        PRODUCTS(state, payload) {
            state.products = payload;
        },
        PAGINATION(state, payload) {
            state.pagination = payload;
        }
    },
    actions: {
        getProducts(context, data) {
            let api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${data.page}`;
            context.commit('LOADING', true)
            if (data.category === "") {
                axios.get(api).then((response) => {
                    context.commit('PRODUCTS',response.data.products);
                    context.commit('PAGINATION',response.data.pagination);
                    console.log('data',response.data)
                    context.commit('LOADING', false)
                })
            } else if (data.category !== "") {
                api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
                axios.get(api).then((response) => {
                    context.commit('PRODUCTS',response.data.products);
                    context.commit('PAGINATION',{});
                    console.log('data',response.data)
                    context.commit('LOADING', false)
                })
            }
            
            
        },
    },
    getters: {
        products(state) {
            return state.products;
        },
        pagination(state) {
            return state.pagination
        }
    }
}