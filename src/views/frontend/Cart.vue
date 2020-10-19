<template>
<div>
    <div class="container my-5">
        <div class="row no-gutters">
            <div class="col-lg-8">
                <div class="card rounded-0 border-0">
                    <div class="card-header d-flex justify-content-between bg-white">
                        <h2 class="card-title mb-0">購物車清單</h2>
                        <a href="#" class="btn collapse-btn" data-toggle="collapse" data-target="#collapse-cart">收合清單</a>
                    </div>
                    <div class="card-body collapse show" id="collapse-cart">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th width="30"></th>
                                        <th width="90"></th>
                                        <th width="150">商品</th>
                                        <th width="100">價格</th>
                                        <th>數量</th>
                                        <th>小計</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in carts.carts" :key="item.id">
                                        <td class="align-middle">
                                            <button class="btn del-cart">&times;</button>
                                        </td>
                                        <td class="align-middle">
                                            <img :src="item.product.imageUrl" width="80" height="64">
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
                                    <tr>
                                        <td colspan="5" class="text-right">總計</td>
                                        <td class="text-right text-success">{{ carts.final_total | currency }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-lg-4">2234</div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            carts: [],
            origin_carts: []
        }
    },
    methods: {
        updateCart() {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            vm.$http.get(api).then((response) => {
                console.log(response.data)
                if (response.data.success) {
                    vm.carts = response.data.data;
                } else {
                    console.log('取得購物車失敗')
                }
            })
        },
    },
    created() {
        this.updateCart();
    }
}
</script>

<style lang="scss">
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
</style>
