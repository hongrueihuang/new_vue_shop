<template>
<div class="home">
    <Alert />
    <Navbar />
    <router-view></router-view>
    <Footer />
</div>
</template>

<script>
import Navbar from "../../components/front/navbar";
import Footer from "../../components/front/footer";
import Alert from "../../components/front/alert";
export default {
    name: "Home",
    components: {
        Navbar,
        Footer,
        Alert,
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
</style>
