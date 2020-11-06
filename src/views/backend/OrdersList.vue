<template>
<div>
    <div class="d-flex justify-content-between my-2">
        <h1 class="h3">訂單列表</h1>
    </div>
    <div class="card">
        <div class="card-header text-left h5">訂單總覽</div>
        <div class="card-body">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>訂單編號</th>
                        <th>訂購日期</th>
                        <th>訂購人姓名</th>
                        <th>訂購人信箱</th>
                        <th>是否付款</th>
                        <th>編輯</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in orders" :key="item.id">
                        <td class="align-middle">{{ item.id }}</td>
                        <td class="align-middle">{{ formatTime(item.create_at) }}</td>
                        <td class="align-middle">{{ item.user.name }}</td>
                        <td class="align-middle">{{ item.user.email }}</td>
                        <td class="align-middle">
                            <span v-if="item.is_paid" class="text-success">付款</span>
                            <span v-else class="text-danger">未付款</span>
                        </td>
                        <td class="align-middle">
                            <div class="btn-group">
                                <button class="btn btn-outline-warning btn-sm" @click="openModal(item)">編輯</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- editModal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-dark">
                    <h5 class="modal-title text-white" id="exampleModalLabel">修改產品</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="form-row" v-if="tempOrder.user">
                        <div class="col-6">
                            <div class="form-group text-left">
                                <label for="order-name">訂購人姓名</label>
                                <input type="text" class="form-control" id="order-name" v-model="tempOrder.user.name">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group text-left">
                                <label for="order-email">訂購人信箱</label>
                                <input type="email" class="form-control" id="order-email" v-model="tempOrder.user.email">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group text-left">
                                <label for="order-address">訂購人地址</label>
                                <input type="text" class="form-control" id="order-address" v-model="tempOrder.user.address">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group text-left">
                                <label for="order-tel">訂購人電話</label>
                                <input type="tel" class="form-control" id="order-tel" v-model="tempOrder.user.tel">
                            </div>
                        </div>
                        
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import $ from "jquery";
export default {
    data() {
        return {
            orders: [],
            pagination: {},
            tempOrder: {},
        }
    },
    methods: {
        getOrders(page = 1) {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
            vm.$http.get(api).then((response) => {
                console.log(response.data)
                vm.orders = response.data.orders;
                vm.pagination = response.data.pagination;
            })
        },
        formatTime(time) {
            let date = new Date(time*1000);
            let y = date.getFullYear();
            let m = date.getMonth() + 1;
            if(m<10) {
                m = `0${m}`
            }
            let d = date.getDate();
            if(d<10) {
                d = `0${d}`
            }
            return `${y}/${m}/${d}`
        },
        openModal(item) {
            $('#editModal').modal('show');
            this.tempOrder = item;
        }
    },

    created() {
        this.getOrders()
    }
}
</script>
