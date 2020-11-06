<template>
    <div class="completed my-4 container">
        <h1 class="py-3 hot-title mb-3">購物完成</h1>
        <router-link to="/products" class="btn btn-dark btn-lg btn-block mb-5">繼續購物</router-link>
        <div class="recommand">
            <h2 class="mb-3 py-3">你可能會喜歡...</h2>
        </div>
        <div class="row flex-lg-nowrap overflow-hidden">
            <div class="col-12 col-lg-4 mb-3" v-for="item in filterProducts" :key="item.id">
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
                                <router-link :to="`/details/${item.id}`" class="btn btn-outline-secondary rounded-0 mt-0 btn-lg d-lg-none btn-block"><i class="fas fa-search mr-2"></i>More</router-link>
                            </div>
                        </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    methods: {
        ...mapActions(['getProducts'])
    },
    computed: {
        ...mapGetters(['products', 'pagination']),
        filterProducts() {
            return this.products.filter((item) => {
                return item.category === '熱門商品'
            })
        }
    },
    created() {
        this.getProducts({page: 1,category: '熱門商品'})
    }
}
</script>

<style lang="scss">

.completed {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hot-title {
    font-size: 80px;
}

.recommand {
    text-align: left;
}

</style>

