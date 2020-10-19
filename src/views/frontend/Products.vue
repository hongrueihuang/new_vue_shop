<template>
<div class="products my-5">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <ul class="product-sidebar accordion">
                    <li class="product-sidebar-title text-white h4 mb-0">商品種類</li>
                    <li class="product-sidebar-item" :class="{'active': searchText === ''}">
                        <a href="#" class="text-dark h5 mb-0" @click.prevent="searchText = ''">所有商品</a>
                    </li>
                    <li class="product-sidebar-item" :class="{'active': searchText === '熱門商品'}">
                        <a href="#" class="text-dark h5 mb-0" @click.prevent="searchText = '熱門商品'">熱門商品</a>
                    </li>
                    <li class="product-sidebar-item" :class="{'active': searchText === '激殺優惠'}">
                        <a href="#" class="text-dark h5 mb-0" @click.prevent="searchText = '激殺優惠'">激殺優惠</a>
                    </li>
                    <li class="product-sidebar-item" :class="{'active': searchText === '設計師款'}">
                        <a href="#" class="text-dark h5 mb-0" @click.prevent="searchText = '設計師款'">設計師款</a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-9">
                <div class="row">
                    <div class="col-lg-6 mb-3" v-for="item in filterData" :key="item.id">
                        <div class="card">
                            <div class="chair-image" :style="`background-image: url(${item.imageUrl})`">
                                <div class="chair-category">{{ item.category }}</div>
                                <div class="chair-cover">
                                    <router-link :to="`/details/${item.id}`" class="btn btn-outline-light">看詳細</router-link>
                                </div>
                            </div>
                            <div class="card-body p-2">
                                <h4 class="chair-title">{{ item.title }}</h4>
                                <div class="card-price text-right px-2">
                                    <span class="text-danger h4">{{ item.price | currency }}</span>
                                    <br>
                                    <del class="text-secondary">{{ item.origin_price | currency }}</del>
                                </div>
                            </div>
                            <div class="d-flex d-lg-block">
                                <button class="btn btn-outline-secondary rounded-0 btn-lg btn-block" @click="addCart(item.id)"><i class="fas fa-plus-circle mr-2"></i>Add Cart</button>
                                <button class="btn btn-outline-secondary rounded-0 mt-0 btn-lg d-lg-none btn-block">更多資訊</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            searchText: '',
            currentType: 'all',
            carts: [],
        }
    },
    methods: {
        getProducts() {
            this.$store.dispatch('getProducts')
        },
        addCart(id, qty = 1) {
            this.$store.dispatch('addCart', {
                id,
                qty
            })
            // const vm = this;
            // const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            // const data = {
            //     'product_id': item.id,
            //     'qty': qty
            // };
            // vm.$http.post(api, {
            //     data
            // }).then((response) => {
            //     console.log(response.data);
            //     vm.$bus.$emit('updateCart');
            //     vm.$bus.$emit('message:push', response.data.message, 'success')
            // })
        },
    },
    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },
        products() {
            return this.$store.state.products;
        },
        filterData() {
            const vm = this;
            if (vm.searchText) {
                return vm.products.filter((item) => {
                    const data = item.category; //.toLowerCase().includes(vm.searchText.toLowerCase());
                    return data;
                });
            }
            return this.products;
        },
    },
    created() {
        this.getProducts();
    }
}
</script>

<style lang="scss">
@import '../../assets/helpers/card';

.product-sidebar {
    list-style: none;
    padding: 0;

    .product-sidebar-title {
        padding: 10px;
        background: #000;
    }

    .product-sidebar-item {

        &>a {
            padding: 10px 0;
            text-decoration: none;
            display: inline-block;
            width: 100%;
            height: 100%;
        }

        &.active,
        &:hover {
            background-color: #6c757d;

            &>a {
                color: white !important;
            }
        }

        .list-group a {
            text-decoration: none;

            &.active,
            &:hover {
                color: #000 !important;
            }
        }
    }
}

.btn {
    border: 2px solid !important;
}
</style>
