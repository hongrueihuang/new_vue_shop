<template>
<swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
        <div class="bg-sand my-5">
            <div class="container">
                <div class="row no-gutters">
                    <div class="col-lg-6 info-image-wrap">
                        <!--<img src="https://www.486word.com/downloads/blog/20181002145045.jpg" width="100%" alt="">-->
                        <div class="info-image bg-cover h-100" style="background-image: url(https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="info-content h-100">
                            <div class="info-content-text">
                                <p>
                                    <i class="fas fa-check mr-2 text-warning"></i>簡約的外觀，放在哪裡都百搭
                                </p>
                                <p>
                                    <i class="fas fa-check mr-2 text-warning"></i>符合人體工學的設計
                                </p>
                                <p>
                                    <i class="fas fa-check mr-2 text-warning"></i>品質用心把關
                                </p>
                            </div>
                            <div class="info-content-title">簡。舒適</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="bg-sand my-5">
            <div class="container">
                <div class="row no-gutters">
                    <div class="col-lg-6 info-image-wrap">
                        <div class="info-image bg-cover h-100" style="background-image: url(https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="info-content h-100">
                            <div class="info-content-text">
                                <p>
                                    <i class="fas fa-check mr-2 text-warning"></i>簡約的外觀，放在哪裡都百搭
                                </p>
                                <p>
                                    <i class="fas fa-check mr-2 text-warning"></i>符合人體工學的設計
                                </p>
                                <p>
                                    <i class="fas fa-check mr-2 text-warning"></i>品質用心把關
                                </p>
                            </div>
                            <div class="info-content-title">約。舒適</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="bg-sand my-5">
            <div class="container">
                <div class="row no-gutters">
                    <div class="col-lg-6 info-image-wrap">
                        <div class="info-image bg-cover h-100" style="background-image: url(https://images.unsplash.com/photo-1462212210333-335063b676bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="info-content h-100">
                            <div class="info-content-text">
                                <p>
                                    <i class="fas fa-check mr-2 text-warning"></i>簡約的外觀，放在哪裡都百搭
                                </p>
                                <p>
                                    <i class="fas fa-check mr-2 text-warning"></i>符合人體工學的設計
                                </p>
                                <p>
                                    <i class="fas fa-check mr-2 text-warning"></i>品質用心把關
                                </p>
                            </div>
                            <div class="info-content-title">簡約。舒適</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>

<script>
export default {
    name: 'carrousel',
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                speed: 1000,
                effect: 'slide'
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    }
}
</script>

<style lang="scss" scoped>
.info-image-wrap {
    height: 450px;
    margin-top: -15px;
    margin-bottom: -15px;
}

.info-content {
    display: flex;
    align-items: center;
    justify-content: center;

    .info-content-title {
        margin-left: auto;
        color: #3c3c3c;
        writing-mode: vertical-lr;
        font-size: 72px;
    }

    .info-content-text {
        margin-left: auto;
        padding: 20px;
        color: #3c3c3c;
        text-align: left;
    }
}

.bg-sand {
    background-image: url("https://images.unsplash.com/photo-1599600540907-62e9b06e6597?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
    background-size: cover;
}
</style>
