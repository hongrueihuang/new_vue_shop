<template>
<div>
    <footer class="bg-dark py-5">
        <div class="container">
            <div class="subscription mb-5">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-6 my-3">
                        <h3 class="mb-0 text-light text-center text-lg-left"><i class="fas fa-chair mr-2"></i>舒適生活從訂閱開始</h3>
                    </div>
                    <div class="col-lg-6 my-3">
                        <div class="subscription-input-wrap input-group">
                            <label for="subscription-input"><i class="far fa-envelope fa-2x "></i></label>
                            <input type="email" id="subscription-input" class="form-control bg-light">
                            <div class="input-group-append btn-subscription">
                                <button class="btn btn-secondary w-100 rounded-0"><i class="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                </div>
                </div>
            </div>
            <div class="row justify-content-between no-gutters border-bottom mb-3">
                <div class="col-lg-4">
                    <ul class="justify-content-between pl-0 d-none d-lg-flex">
                        <li><router-link to="/" class="text-decoration-none text-white">首頁</router-link></li>
                        <li><router-link to="/products" class="text-decoration-none text-white">商品</router-link></li>
                        <li><router-link to="/login" class="text-decoration-none text-white">登入</router-link></li>
                        <li><router-link to="/about" class="text-decoration-none text-white">關於</router-link></li>
                    </ul>
                    <ul class="text-left d-flex flex-column pl-0">
                        <li class="row align-items-center mb-3">
                            <i class="far fa-envelope text-white fa-2x col-1 col-lg-2 text-center"></i>
                            <a href="mailto:chaifurniture@business.com" class="text-decoration-none text-white h5 col-9 mb-0">chaifurniture@business.com</a>
                        </li>
                        <li class="row align-items-center">
                            <i class="fas fa-mobile-alt text-white fa-2x col-1 col-lg-2 text-center"></i>
                            <a href="tel:+0988776655" class="text-decoration-none text-white h5 col-9 mb-0">0988776655</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <ul class="d-flex justify-content-end justify-content-lg-between pl-0 list-unstyled">
                        <li class="mr-2"><a href="#"><i class="fab fa-facebook-square fa-2x text-white"></i></a></li>
                        <li class="mr-2"><a href="#"><i class="fab fa-instagram-square fa-2x text-white"></i></a></li>
                        <li class="mr-2"><a href="#"><i class="fab fa-line fa-2x text-white"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 text-center text-lg-left">
                    <router-link to="/"><img src="../../assets/images/footer_logo.png" class="img-fluid" alt=""></router-link>
                </div>
                <div class="col-lg-9 text-white d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center align-items-lg-end">
                    <p class="mb-0">Copyright © 2020 宅宅傢俱.All rights reserved.</p>
                    <ul class="list-unstyled d-flex mb-0">
                        <li><a href="#" class="text-decoration-none text-white mr-3">隱私權政策</a></li>
                        <li><a href="#" class="text-decoration-none text-white">服務條款</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</div>
</template>

<style lang="scss">

footer {
    position: sticky;
    bottom:0;
}


.subscription-input-wrap {
    position: relative;
    border-radius: none !important;

    label {
        position: absolute;
        left: 24px;
        top: 10px;
        z-index: 999;
    }

    #subscription-input {
        padding: 20px 0 20px 80px !important;
        height: 56px;
        border: none;
    }

    .btn-subscription {
        width: 64px;
    }
}
</style>
