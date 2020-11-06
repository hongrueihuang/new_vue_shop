<template>
<div class="products my-4">
    <div class="container">
        <div class="product-banner">
            <h2 class="mb-0" v-if="!searchText">所有商品</h2>
            <h2 class="mb-0" v-else>{{ `${searchText}` }}</h2>
            <div class="product-banner-cover">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-2">
                <ul class="product-sidebar accordion sticky-top">
                    <li class="product-sidebar-title text-white h4 mb-0">商品種類</li>
                    <li class="product-sidebar-item" :class="{'active': searchText === ''}">
                        <a href="#" class="text-dark h5 mb-0" @click.prevent="searchText = '',getProducts({page:1, category:searchText})">所有商品</a>
                    </li>
                    <li class="product-sidebar-item" :class="{'active': searchText === '熱門商品'}">
                        <a href="#" class="text-dark h5 mb-0" @click.prevent="searchText = '熱門商品',getProducts({page:1, category:searchText})">熱門商品</a>
                    </li>
                    <li class="product-sidebar-item" :class="{'active': searchText === '激殺優惠'}">
                        <a href="#" class="text-dark h5 mb-0" @click.prevent="searchText = '激殺優惠',getProducts({page:1, category:searchText})">激殺優惠</a>
                    </li>
                    <li class="product-sidebar-item" :class="{'active': searchText === '設計師款'}">
                        <a href="#" class="text-dark h5 mb-0" @click.prevent="searchText = '設計師款',getProducts({page:1, category:searchText})">設計師款</a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-10">
                <div class="row">
                    <div class="col-lg-4 mb-3" v-for="item in filterData" :key="item.id">
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
                            <div class="row no-gutters">
                                <div class="col-6 col-lg-12">
                                    <button class="btn btn-outline-secondary rounded-0 btn-lg btn-block" @click="addCart(item.id)"><i class="fas fa-plus-circle mr-2"></i>Add</button>
                                </div>
                                <div class="col-6 col-lg-12">
                                    <router-link :to="`/details/${item.id}`" class="btn btn-outline-secondary rounded-0 mt-0 btn-lg d-lg-none btn-block"><i class="fas fa-search mr-2"></i>More</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav v-if="pagination.total_pages" class="nav-pagination">
                    <ul class="pagination">
                        <li class="page-item" :class="{'disabled': !pagination.has_pre}">
                            <a class="page-link" href="#" aria-label="Previous" @click.prevent="getProducts({page:pagination.current_page - 1, category:searchText})">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item" :class="{'active':page === pagination.current_page}" v-for="page in pagination.total_pages" :key="page">
                            <a class="page-link" href="#" @click.prevent="getProducts({page, category: searchText})">{{ page }}</a>
                        </li>
                        <li class="page-item" :class="{'disabled': !pagination.has_next}">
                            <a class="page-link" href="#" aria-label="Next" @click.prevent="getProducts({page:pagination.current_page + 1, category:searchText})">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
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
    data() {
        return {
            searchText: '',
            currentType: 'all',
            carts: [],
        }
    },
    methods: {
        addCart(id, qty = 1) {
            this.$store.dispatch('addCart', {
                id,
                qty
            });
            // this.$bus.$emit('message:push', response.data.message, 'success')
        },
        ...mapActions(['getProducts'])
    },
    computed: {
        // isLoading() {
        //     return this.$store.state.isLoading;
        // },
        // products() {
        //     return this.$store.state.products;
        // },
        filterData() {
            const vm = this;
            if (vm.searchText) {
                return vm.products.filter((item) => {
                    const data = item.category;
                    return data === vm.searchText;
                });
            }
            return vm.products;
        },
        ...mapGetters(['products', 'pagination'])
    },
    created() {
        this.getProducts({
            page: 1,
            category: this.searchText
        });
    }
}
</script>

<style lang="scss">
@import '../../assets/helpers/card';

.product-banner {
    padding: 80px 0;
    background-color: rgba(0, 0, 0, .3);
    margin-bottom: 30px;
    position: relative;

    h2 {
        font-weight: bold;
        font-size: 72px;
        font-style: italic;
        color: #fff;
    }

    .product-banner-cover {
        background-image: url(https://images.pexels.com/photos/3724314/pexels-photo-3724314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        filter: blur(1px);
        z-index: -1;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;

    }

}

.product-sidebar {
    list-style: none;
    padding: 0;

    .product-sidebar-title {
        padding: 10px;
        background: #000;
    }

    .product-sidebar-item {
        box-shadow: 0px 0px 3px inset #fff;

        &>a {
            padding: 10px 0;
            text-decoration: none;
            display: inline-block;
            font-weight: 600;
            width: 100%;
            height: 100%;
        }

        &.active,
        &:hover {
            background-color: #c8c8c8;

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

nav.nav-pagination {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.page-item.active .page-link {
    background-color: #000;

}

.page-link {
    padding: 20px 25.6px;
    line-height: 20px;
    color: #000;
}
</style>
