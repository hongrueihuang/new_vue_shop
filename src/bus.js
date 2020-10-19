import Vue from 'vue';

Vue.prototype.$bus = new Vue();

// 自定義名稱 'messsage:push'
        // message: 傳入參數
        // status: 樣式，預設值為 warning
        // vm.$bus.$on('message:push', (message, status = 'warning') => {
        //     vm.updateMessage(message, status);
        // });
// 自定義名稱 'updateCart'  更新購物車
        // this.$bus.$on('updateCart', () => {
        //     this.updateCart();
        // })