<template>
<div class="container my-5">
    <div class="row text-left">
        <div class="col-lg-8">
            <div class="bg-cover" :style="`background-image: url(${product.imageUrl}); height:500px`"></div>
        </div>
        <div class="col-lg-4">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-white">
                    <li class="breadcrumb-item">
                        <router-link to="/" class="text-decoration-none"><i class="fas fa-home mr-2"></i>首頁</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link to="/products" class="text-decoration-none">商品</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
                </ol>
            </nav>

            <h1>{{ product.title }}</h1>
            <hr>
            <div class="py-2 product-content">
                <p>{{ product.content }}</p>
                <h3>材質說明</h3>
                {{ product.description }}
            </div>
            <hr>
            <div class="add-cart">
                <div class="input-group cart-num">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary w-100" @click="qty-=1" :disabled="qty === 1"><i class="fas fa-minus"></i></button>
                    </div>
                    <input type="number" class="form-control" :value="qty">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary w-100" @click="qty+=1"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
                <button type="button" class="btn btn-outline-success" @click="addCart(product,qty)"><i class="fas fa-shopping-cart mr-2"></i>加入購物車</button>
            </div>
        </div>
    </div>

    <div class="relative mt-5">
        <h2>相關產品</h2>
        <hr>
        <div class="row">
            <div class="col-lg-4" v-for="item in relatedItem" :key="item.id">
                <div class="card">
                    <div class="chair-image" :style="`background-image: url(${item.imageUrl})`">
                        <div class="chair-category">{{ item.category }}</div>
                        <div class="chair-cover">
                            <button class="btn btn-outline-light" @click="getProduct(item.id)">看詳細</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <h4 class="chair-title">{{ item.title }}</h4>
                    </div>
                    <div class="d-flex d-lg-block">
                        <button class="btn btn-outline-secondary rounded-0 btn-lg btn-block" @click="addCart(item)"><i class="fas fa-plus-circle mr-2"></i>Add Cart</button>
                        <button class="btn btn-outline-secondary rounded-0 mt-0 btn-lg btn-block d-lg-none" @click="getProduct(item.id)">更多資訊</button>
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
            product: {},
            allProducts: [],
            qty: 1
        }
    },
    computed: {
        relatedItem() {
            const vm = this;
            let related = vm.allProducts.filter(function (item) {
                return item.type === vm.product.type && item.title !== vm.product.title
            })
            return related
        },
    },
    methods: {
        getProduct(id) {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
            vm.$http.get(api).then((response) => {
                vm.product = response.data.product;
            })
        },
        getAllProducts() {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
            vm.$http.get(api).then((response) => {
                vm.allProducts = response.data.products;
            })
        },
        addCart(item, qty) {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            const data = {
                'product_id': item.id,
                'qty': qty
            };
            vm.$http.post(api, {
                data
            }).then((response) => {
                console.log(response.data);
                vm.$bus.$emit('updateCart');
                vm.$bus.$emit('message:push', response.data.message, 'success')
            })
        },
    },
    created() {
        let product_id = this.id = this.$route.params.id;
        this.getProduct(product_id);
        this.getAllProducts();
    }
}
</script>

<style lang="scss">
@import '../../assets/helpers/card';

.product-content {
    line-height: 2rem;
}

.add-cart {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
}

.cart-num {
    width: 50%;

    .input-group-prepend,
    input,
    .input-group-append {
        width: 33.33% !important;
        height: 60px !important;
    }
}

@media (max-width: 962px) {
    .cart-num {
        width: 33.33%;

        .input-group-prepend,
        input,
        .input-group-append {
            flex: auto;
            width: 10% !important;
        }
    }
}

@media (max-width: 360px) {
    .cart-num {

        .input-group-prepend,
        input,
        .input-group-append {
            width: 15% !important;
        }
    }
}
</style>
