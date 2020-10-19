<template>
<div>
    <Carousel />
    <section id="list" class="my-5">
        <div class="container-fluid">
            <div class="row justify-content-center py-5">
                <div class="col-lg-3">
                    <router-link to style="text-decoration: none">
                        <div class="category" style="height: 300px;">
                            <div class="bg-cover h-100 category-image" style="background-image: url(https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"></div>
                            <div class="category-cover"></div>
                            <span class="category-title">餐椅</span>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-6">
                    <router-link to style="text-decoration: none">
                        <div class="category" style="height: 300px;">
                            <div class="bg-cover h-100 category-image" style="background-image: url(https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"></div>
                            <div class="category-cover"></div>
                            <span class="category-title">沙發</span>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-3">
                    <router-link to style="text-decoration: none">
                        <div class="category" style="height: 300px;">
                            <div class="bg-cover h-100 category-image" style="background-image: url(data:image/jpeg;base64,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)"></div>
                            <div class="category-cover"></div>
                            <span class="category-title">辦公椅</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <section class="coupon-news my-5">
        <div class="coupon-news-cover d-flex justify-content-center align-items-center">
            <button class="btn btn-outline-light btn-lg">領取優惠券</button>
        </div>
    </section>
    <section class="recommend py-5" style="position: relative">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-5 bg-cover" style="position: absolute;top:0;bottom:0; background-image: url(https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"></div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-end text-left">
                <div class="col-md-7">
                    <h3>知名作家 Moguso Ali 真心推薦</h3>
                    <p>「到雪莉酒吧喝一杯是我的例行公事，舒適的椅子能撫慰一天的疲勞與不快。」</p>
                    <p class="text-secondary text-right">－－格林姆迦爾歷險記</p>
                </div>
            </div>
        </div>
    </section>
    <section id="hot" class="my-5">
        <div class="container">
            <h3 class="hot-title my-5">熱門商品</h3>
            <div class="hot-card py-5">
                <swiper :options="swiperOptions_1">
                    <swiper-slide>
                        <div class="card">
                            <div class="card-image-wrap">
                                <div class="card-image h-100 bg-cover" style="background-image: url(https://images.unsplash.com/photo-1598300056393-4aac492f4344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"></div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="card">
                            <div class="card-image-wrap">
                                <div class="card-image h-100 bg-cover" style="background-image: url(https://images.unsplash.com/photo-1598300056393-4aac492f4344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"></div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="card">
                            <div class="card-image-wrap">
                                <div class="card-image h-100 bg-cover" style="background-image: url(https://images.unsplash.com/photo-1598300056393-4aac492f4344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"></div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="card">
                            <div class="card-image-wrap">
                                <div class="card-image h-100 bg-cover" style="background-image: url(https://images.unsplash.com/photo-1598300056393-4aac492f4344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"></div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="swiper-pagination_1" slot="pagination"></div>
            </div>

        </div>
    </section>
</div>
</template>

<script>
import Carousel from '../front/carousel';
export default {
    name: 'Main',
    components: {
        Carousel
    },
    data() {
        return {
            swiperOptions_1: {
                pagination: {
                    el: '.swiper-pagination_1',
                    clickable: true,
                    dynamicBullets: true,
                },
                direction: 'horizontal',
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                speed: 1000,
                effect: 'slide',
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    }
}
</script>

<style lang="scss">
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
        transition: all 0.5s;
        z-index: -2;
    }

    .category-title {
        writing-mode: vertical-lr;
        font-size: 1.5rem;
        letter-spacing: 1.5rem;
        font-weight: 600;
        color: silver;
        transition: display 2s;
    }

    &:hover,
    &:active {
        .category-image {
            filter: blur(5px);
        }

        .category-title {
            color: #fff;
        }

        .category-cover {
            background-color: rgba(32, 34, 33, 0.7);
        }
    }

    .category-cover {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
        background-color: rgba(87, 90, 86, 0.5);
    }
}

.hot-title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 5px;
    margin: 1rem 0;

    &::before,
    &::after {
        content: "";
        flex: 1;
        margin: 0 3rem;
        border: 0.5px solid #212728;
    }
}

.hot-card {
    box-shadow: 0 3px 3px #ccc;
    padding: 20px;

    .card-image-wrap {
        height: 260px;

    }
}

.recommend {
    background-color: #acc2d7;
    height: 400px;
}

.coupon-news {
    background-image: url(https://images.unsplash.com/photo-1462212210333-335063b676bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);
    background-position: center bottom;
    background-size: cover;
    overflow: hidden;
    background-attachment: fixed;
    height: 350px;
    position: relative;

    .coupon-news-cover {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba($color: #000000, $alpha: 0.3);
    }

}
</style>
