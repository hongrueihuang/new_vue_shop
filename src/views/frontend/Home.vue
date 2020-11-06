<template>
<div class="home">
    <button class="gotop btn-secondary" @click="goTop"><i class="fas fa-arrow-up"></i></button>
    <Alert />
    <Navbar />
    <router-view></router-view>
    <Footer />
</div>
</template>

<script>
import $ from "jquery";
import Navbar from "../../components/front/navbar";
import Footer from "../../components/front/footer";
import Alert from "../../components/front/alert";
export default {
    name: "Home",
    components: {
        Navbar,
        Footer,
        Alert,
    },
    methods: {
        goTop() {
            window.scrollTo(0, 0);
        }
    }
};
</script>

<style lang="scss">
.bg-cover {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.bg-contain {
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
}

.home {
    position: relative;

    button.gotop {
        position: fixed;
        width: 50px;
        height: 50px;
        right: 40px;
        bottom: 120px;
        z-index: 1000;
        border-radius: 50%;
        border: none;

        &:focus {
            outline: none;
        }
    }
}
</style>
