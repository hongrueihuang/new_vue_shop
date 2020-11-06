<template>
<div class="order my-5">
    <div class="container">
        <h3 class="hot-title py-3">
            訂購人資訊
        </h3>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form class="form-row text-left form-info" @submit.prevent="handleSubmit(submitOrder)">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="order-name">姓名</label>
                        <ValidationProvider name="姓名" rules="required" v-slot="{ classes,errors }">
                            <input type="text" id="order-name" class="form-control" :class="classes" v-model="order.user.name" placeholder="請輸入姓名">
                            <p class="text-danger">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="order-emial">信箱</label>
                        <ValidationProvider name="信箱" rules="required|email" v-slot="{ classes,errors }">
                            <input type="email" id="order-email" class="form-control" :class="classes" v-model="order.user.email" placeholder="信箱">
                            <p class="text-danger">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="order-tel">電話</label>
                        <ValidationProvider name="電話" rules="required" v-slot="{ classes,errors }">
                            <input type="tel" id="order-tel" class="form-control" :class="classes" v-model="order.user.tel" placeholder="電話">
                            <p class="text-danger">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="order-address">地址</label>
                        <ValidationProvider name="地址" rules="required" v-slot="{ classes,errors }">
                            <input type="text" id="order-address" class="form-control" :class="classes" v-model="order.user.address" placeholder="地址">
                            <p class="text-danger">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="col-lg-12 d-flex flex-column justify-content-between">
                    <div class="form-group">
                        <label for="order-message">說明</label>
                        <ValidationProvider name="說明" rules="required" v-slot="{ classes,errors }">
                            <textarea type="text" id="order-message" class="form-control" :class="classes" v-model="order.message" placeholder="說明欄位"></textarea>
                            <p class="text-danger">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <button type="submit" class="btn btn-dark btn-lg btn-block">送出訂單</button>
                <span class="text-success p-3" v-if="orderId">已送出訂單</span>
                <button class="btn btn-dark btn-lg btn-block" v-if="orderId" @click="payMoney">確認付款</button>
            </form>
                
        </ValidationObserver>
    </div>
</div>
</template>

<script>
import {
    ValidationProvider,
    ValidationObserver
} from 'vee-validate';
export default {
    data() {
        return {
            order: {
                user: {

                },
                message: ''
            },
            orderId: '',
            is_paid: false
        }
    },
    components: {
        ValidationProvider
    },
    methods: {
        submitOrder() {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/order`;
            const data = vm.order;
            vm.$store.dispatch('updateLoading', true);
            vm.$http.post(api, {
                data
            }).then((response) => {
                console.log(response.data)
                vm.orderId = response.data.orderId;
                vm.$bus.$emit('updateCart');
                vm.$bus.$emit('message:push',(response.data.message, 'success'));
                vm.$store.dispatch('updateLoading',false);
            })
        },
        payMoney() {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
            vm.$http.post(api).then((response) => {
                if(response.data.success){
                    vm.is_paid = response.data.success;
                    vm.$router.push('completed');
                } else {
                    vm.is_paid = response.data.success;
                }
                
            })
        }
    },
}
</script>

<style lang="scss">
.process {
    position: relative;

    .process-item {
        background-color: #C4E1FF;
        border-radius: 10rem;

        &.disabled {
            background-color: #f8f9fa;
            color: #6c757d;
        }

        &.active {
            background-color: #28a745;
        }
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
        margin: 0 2rem;
        border: 0.5px solid #212728;
    }
}

.form-info {
    input {
        padding: 1.5rem;
    }

    textarea {
        height: 100px;
    }
}
</style>
