<template>
<div>
    <div class="d-flex justify-content-between my-2">
        <h1 class="h3">優惠券列表</h1>
        <button class="btn btn-primary" @click="openModal(true)">建立新優惠券</button>
    </div>
    <div class="card">
        <div class="card-header text-left h5">優惠券總覽</div>
        <div class="card-body">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>名稱</th>
                        <th>折扣碼</th>
                        <th>折扣</th>
                        <th>到期日</th>
                        <th>是否啟用</th>
                        <th>編輯</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in coupons" :key="item.id">
                        <td class="align-middle">{{ item.title }}</td>
                        <td class="align-middle">{{ item.code }}</td>
                        <td class="align-middle">{{ item.percent }}</td>
                        <td class="align-middle">{{ item.fullDate }}</td>
                        <td class="align-middle">
                            <span v-if="item.is_enabled" class="text-success">啟用</span>
                            <span v-else class="text-danger">未啟用</span>
                        </td>
                        <td class="align-middle">
                            <div class="btn-group">
                                <button class="btn btn-outline-warning btn-sm" @click="openModal(false, item)">編輯</button>
                                <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- couponModal -->
    <div class="modal fade" id="couponModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-dark">
                    <h5 class="modal-title text-white" id="exampleModalLabel"><span v-if="isNew">新增</span><span v-else>修改</span>產品</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="form-row">
                        <div class="col-4">
                            <div class="form-group text-left">
                                <label for="coupon-title">請輸入優惠券名稱</label>
                                <input type="text" class="form-control" id="coupon-title" v-model="tempCoupon.title">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group text-left">
                                <label for="coupon-code">請輸入折扣碼</label>
                                <input type="text" class="form-control" id="coupon-code" v-model="tempCoupon.code">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group text-left">
                                <label for="coupon-percent">請輸入折扣</label>
                                <input type="text" class="form-control" id="coupon-percent" v-model="tempCoupon.percent">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group text-left">
                                <label for="coupon-date">請輸入到期日</label>
                                <input type="date" class="form-control" @change="formatDate(tempCoupon.fullDate)" id="coupon-date" v-model="tempCoupon.fullDate">
                            </div>

                        </div>
                        <div class="col-4 d-flex justify-content-end align-items-center">
                            <div class="form-check pl-1">
                                <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="coupon-is_enabled" true-value="1" false-value="0" v-model="tempCoupon.is_enabled">
                                <label class="form-check-label" for="coupon-is_enabled">是否啟用</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="updateCoupon">
                        <span v-if="isNew">新增</span><span v-else>修改</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- delModal -->
    <div class="modal fade" id="delModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-danger">
                    <h5 class="modal-title text-white">刪除產品</h5>
                </div>
                <div class="modal-body">確定要刪除<span class="text-danger font-weight-bold h5">{{ tempCoupon.title }}</span>？</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click="removeCoupon">確定</button>
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
            coupons: [],
            tempCoupon: {},
            isNew: true,
        };
    },
    methods: {
        getCoupons(page = 1) {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page:${page}`;
            // vm.isLoading = true;
            console.log(api)
            vm.$http.get(api).then((response) => {
                console.log(response.data);
                vm.coupons = response.data.coupons;
                // vm.isLoading = false;
            });
        },
        openModal(newOrOld, item) {
            if (newOrOld) {
                this.isNew = newOrOld;
                this.tempCoupon = {};
            } else {
                this.isNew = newOrOld;
                this.tempCoupon = item;
            }
            $("#couponModal").modal("show");
        },
        openDelModal(item) {
            this.tempCoupon = item;
            $('#delModal').modal('show');
        },
        formatDate(date) {
            const fDate = new Date(date);
            this.tempCoupon.date = fDate.getTime() / 1000
            console.log(this.tempCoupon.date);
        },
        updateCoupon() {
            const vm = this;
            let api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
            let httpMethod = 'post';
            if (!vm.isNew) {
                api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
                httpMethod = 'put';
            }
            vm.$http[httpMethod](api, {
                data: vm.tempCoupon
            }).then((response) => {
                // console.log(response.data)
                if (response.data.success) {
                    vm.getCoupons();
                    vm.tempCoupon = {};
                    $('#couponModal').modal('hide');
                } else {
                    console.log(response.data.success)
                    $('#couponModal').modal('hide')
                }
            })
        },
        removeCoupon() {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
            vm.$http.delete(api).then((response) => {
                console.log(response.data);
                if (response.data.success) {
                    vm.getCoupons();
                    $('#delModal').modal('hide');
                } else {
                    console.log(response.data.message);
                    $('#delModal').modal('hide');
                }
            })
        },
    },
    created() {
        this.getCoupons();
    },
};
</script>
