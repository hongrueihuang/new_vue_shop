<template>
<div>
    <!-- <Carousel /> -->
    <div id="carouselExampleControls" class="carousel slide container mt-5" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="carousel-item-title d-none d-md-block">
                    <p>舒適。生活</p>
                </div>
                <img src="../../assets/images/banner1.png" class="d-block w-100" style="height:400px" alt="">
            </div>
            <div class="carousel-item">
                <div class="carousel-item-title d-none d-md-block">
                    <p>堅持。品質</p>
                </div>
                <img src="../../assets/images/banner2.png" class="d-block w-100" style="height:400px" alt="">
            </div>
            <div class="carousel-item">
                <div class="carousel-item-title d-none d-md-block">
                    <p>品味。時尚</p>
                </div>
                <img src="../../assets/images/banner3.png" class="d-block w-100" style="height:400px" alt="">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <section id="list" class="my-5">
        <div class="container">
            <h2 class="hot-title">商品種類</h2>
            <div class="row justify-content-center">
                <div class="col-12 col-md-6 col-lg-3 my-2">
                    <router-link to style="text-decoration: none">
                        <div class="category" style="height: 300px;">
                            <div class="bg-cover h-100 category-image" style="background-image: url(https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"></div>
                            <div class="category-cover"></div>
                            <span class="category-title">餐椅</span>
                        </div>
                    </router-link>
                </div>
                <div class="col-12 col-md-6 my-2">
                    <router-link to style="text-decoration: none">
                        <div class="category" style="height: 300px;">
                            <div class="bg-cover h-100 category-image" style="background-image: url(https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"></div>
                            <div class="category-cover"></div>
                            <span class="category-title">沙發</span>
                        </div>
                    </router-link>
                </div>
                <div class="col-12 col-md-6 col-lg-3 my-2">
                    <router-link to style="text-decoration: none">
                        <div class="category" style="height: 300px;">
                            <div class="bg-cover h-100 category-image" style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBtgnSv7W36b1xXnVd7wdeKwiGoS0adHjWuA&usqp=CAU)"></div>
                            <div class="category-cover"></div>
                            <span class="category-title">辦公椅</span>
                        </div>
                    </router-link>
                </div>
                <div class="col-12 col-md-6 my-2">
                    <router-link to style="text-decoration: none">
                        <div class="category" style="height: 300px;">
                            <div class="bg-cover h-100 category-image" style="background-image: url(https://images.pexels.com/photos/3740797/pexels-photo-3740797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"></div>
                            <div class="category-cover"></div>
                            <span class="category-title">書桌</span>
                        </div>
                    </router-link>
                </div>
                <div class="col-12 col-md-6 my-2">
                    <router-link to style="text-decoration: none">
                        <div class="category" style="height: 300px;">
                            <div class="bg-cover h-100 category-image" style="background-image: url(https://images.pexels.com/photos/4195613/pexels-photo-4195613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"></div>
                            <div class="category-cover"></div>
                            <span class="category-title">茶几</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <div class="container">
        <h3 class="hot-title">優惠活動</h3>
        <section class="coupon-news my-5">
            <div class="coupon-news-cover d-flex justify-content-center align-items-center flex-column">
                <div class="coupon-title text-white">1st Anniversary</div>
                <button class="btn btn-outline-light btn-lg font-weight-bold" @click="copyCoupon">Get Coupon</button>
            </div>
        </section>
    </div>
    <section id="hot" class="my-5">
        <div class="container">
            <h3 class="hot-title">熱門商品</h3>
            <div class="hot-card py-5">
                <swiper :options="swiperOptions_1">
                    <swiper-slide v-for="item in hotProducts" :key="item.id">
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
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
    
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex';
export default {
    name: 'Main',
    data() {
        return {
            swiperOptions_1: {
                direction: 'horizontal',
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                speed: 1000,
                effect: 'slide',
                slidesPerView: 3,
                spaceBetween: 50,
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 30
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetweenSlides: 40
                    }
                }
            },
        }

    },
    methods: {
        // getProducts() {
        //     this.$store.dispatch('getProducts');
        // },
        addCart(id) {
            this.$store.dispatch('addCart',{id, qty: 1});
            // this.$bus.$emit('updateCart');
        },
        copyCoupon() {
            
        },
        ...mapActions(['getProducts'])
    },
    computed: {
        // products() {
        //     return this.$store.state.products;
        // },
        ...mapGetters(['products']),
        hotProducts() {
            const vm = this;
            return vm.products.filter(function (item) {
                return item.category === '熱門商品'
            })
        },

    },
    created() {
        this.getProducts({
            page: 1,
            category: '熱門商品'
        });
    }
}
</script>

<style lang="scss">
.carousel-item-title {
    position:absolute;
    color: #fff;
    font-size: 60px;
    font-weight: 700;
    line-height: 80px;
    left: 0;
    right: 0;
    text-align: center;
    margin-bottom: 0;
    top: 170px;
}

.category {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .category-image {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        transition: all 1s;
        z-index: -2;
    }

    .category-title {
        writing-mode: vertical-lr;
        font-size: 1.5rem;
        letter-spacing: 1.5rem;
        font-weight: 600;
        display: none;
        transition: all 2s;
        padding: 20px;
    }

    &:hover,
    &:active {
        .category-image {
            filter: blur(5px);
        }

        .category-title {
            color: #fff;
            display: inline;
        }

        .category-cover {
            background-color: rgba(32, 34, 33, 0.7);
        }
    }

    .category-cover {
        position: absolute;
        top: 5px;
        bottom: 5px;
        right: 5px;
        left: 5px;
        z-index: -1;
        background-color: rgba(0, 0, 0, .2);
        border: 1px solid #c8c8c8;
        transition: all 1s;
    }
}

@media (max-width: 962px) {

    .category .category-title {
        display: inline;
        color: #fff;
    }
}

.hot-card {
    box-shadow: 0 3px 3px #ccc;
    padding: 20px;

    .card-image-wrap {
        height: 260px;

    }
}

.coupon-news {
    background-image: url(https://images.unsplash.com/photo-1462212210333-335063b676bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);
    background-position: center bottom;
    background-size: cover;
    overflow: hidden;
    background-attachment: fixed;
    height: 400px;
    position: relative;

    .coupon-news-cover {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba($color: #000000, $alpha: 0.3);
        font-family: 'Architects Daughter', cursive;
        font-family: 'Indie Flower', cursive;
    }

    .coupon-title {
        font-size: 5rem;
    }

}

@media (max-width: 962px) {
    .coupon-news .coupon-title {
        font-size: 3rem
    }
}

</style>
