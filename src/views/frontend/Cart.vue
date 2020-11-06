<template>
<div>
    <div class="container my-5" v-if="carts.total > 0">
        <div class="card rounded-0 border-0 mb-3">
            <div class="card-header d-flex justify-content-between bg-dark ">
                <h2 class="card-title mb-0 text-white">購物車清單</h2>
                <!--  <a href="#" class="btn collapse-btn" data-toggle="collapse" data-target="#collapse-cart">收合清單</a> -->
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th width="30"></th>
                                <th width="90"></th>
                                <th>商品</th>
                                <th width="120">價格</th>
                                <th width="120">數量</th>
                                <th>小計</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in carts.carts" :key="item.id">
                                <td class="align-middle">
                                    <button class="btn del-cart" @click="delCart(item.id)">&times;</button>
                                </td>
                                <td class="align-middle">
                                    <img :src="item.product.imageUrl" class="" width="80" height="64">
                                </td>
                                <td class="align-middle text-nowrap text-truncate">
                                    {{ item.product.title }}
                                </td>
                                <td class="align-middle text-right">
                                    {{ item.product.price | currency }}
                                </td>
                                <td class="align-middle">
                                    {{ item.qty }} / {{ item.product.unit }}
                                </td>
                                <td class="align-middle text-right">
                                    {{ item.total | currency }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row justify-content-between mb-3">
            <div class="form-group col-lg-4 text-left">
                <label for="coupon-code">優惠折扣碼</label>
                <div class="input-group">
                    <input type="text" id="coupon-code" class="form-control" v-model="coupon_code" placeholder="請輸入折扣碼 e.g., ABC1111">
                    <div class="input-group-append">
                        <button class="btn btn-dark" @click="useCoupon(coupon_code)">送出</button>
                    </div>
                </div>
                <span v-if="is_used !== ''" :class="{'text-success': is_used, 'text-danger': !is_used}">{{ message }}</span>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-header bg-dark">
                        <h2 class="bg-dark card-title text-white mb-0">金額</h2>
                    </div>
                    <table class="table table-hover">
                        <tr>
                            <th class="text-left">小計</th>
                            <td class="text-right align-middle">{{ carts.total | currency }}</td>
                        </tr>
                        <tr>
                            <th class="text-left">折扣</th>
                            <td class="text-right text-danger align-middle">{{ carts.total - carts.final_total | currency }}</td>
                        </tr>
                        <tr>
                            <th class="text-left">總計</th>
                            <td class="text-right text-success h5 align-middle">{{ carts.final_total | currency }}</td>
                        </tr>
                    </table>
                    <div class="text-right">
                        <router-link to="order" class="btn btn-outline-dark btn-lg btn-block rounded-0 btn-cash">Next</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container my-5" v-else>
        <h2>還沒買東西喔！先去逛逛吧！</h2>
        <router-link to="products" class="btn btn-outline-dark btn-block btn-lg">去購物</router-link>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            coupon_code: '',
            message: '',
            is_used: '',
        }
    },
    methods: {
        updateCart() {
            this.$store.dispatch('updateCart')
        },
        delCart(id) {
            this.$store.dispatch('removeCart', id);
            this.$bus.$emit('message:push', '已從購物車刪除商品', 'success')
        },
        useCoupon(code) {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
            this.$store.dispatch('updateLoading', true);
            console.log(api)
            let data = {
                code: vm.coupon_code
            };
            vm.$http.post(api, {
                data
            }).then((response) => {
                console.log(response.data);
                vm.is_used = response.data.success;
                vm.message = response.data.message;
                vm.updateCart();
                this.$store.dispatch('updateLoading', false);
            })
        }
    },
    computed: {
        carts() {
            return this.$store.state.carts;
        }
    },
    created() {
        this.updateCart();
    }
}
</script>

<style lang="scss" scoped>
.del-cart {
    background-color: transparent;
    border: none;
    color: red;

    &:hover {
        color: pink;
    }
}

.collapse-btn {
    color: blue;

    &:hover {
        color: cyan;
    }
}

.input-group {

    input {
        height: 50px;
        padding-left: 30px;
        border-radius: 0;
    }

}

.btn-cash {
    font-weight: 700;
    border-width: 2px;
}
</style>
