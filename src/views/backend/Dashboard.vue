<template>
<div>
    <DashboardNav />

    <div class="container-fluid">
        <div class="row">
            <DashboardSidebar />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <router-view></router-view>
            </main>
        </div>
    </div>
</div>
</template>

<script>
import DashboardNav from "../../components/back/dashboardNav";
import DashboardSidebar from "../../components//back/dashboardSidebar";
export default {
    data() {
        return {
            current: "",
        };
    },
    components: {
        DashboardNav,
        DashboardSidebar,
    },
};
</script>

<style lang="scss">
@import "../../assets/helpers/dashboard";
</style>
