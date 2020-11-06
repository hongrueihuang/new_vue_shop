<template>
<div id="app">
    <loading :active.sync="isLoading"></loading>
    <router-view />
</div>
</template>

<script>
export default {
    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        }
    }
}
</script>

<style lang="scss">
@import './assets/all.scss';

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif, 'Microsoft JhengHei';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
