<template>
<nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="sidebar-sticky pt-3">
        <ul class="nav flex-column">
            <li class="nav-item">
                <router-link class="nav-link" :class="{'active': currentPage === 'Products'}" to="products-list">
                    <span></span>
                    商品列表
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :class="{'active': currentPage === 'Orders'}" to="orders-list">
                    <span></span>
                    訂單列表
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :class="{'active': currentPage === 'Coupons'}" to="coupons-list">
                    <span></span>
                    優惠券
                </router-link>
            </li>
            <li class="nav-item d-md-none">
                <a class="nav-link" href="#" @click.prevent="logout">
                    <span>登出</span>
                </a>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
    computed: {
        currentPage() {
            let page = this.$route.name;
            return page
        }
    }
}
</script>
