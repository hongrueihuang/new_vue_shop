<template>
<div>
    <loading :active.sync="isLoading"></loading>
    <div class="d-flex justify-content-between my-2">
        <h1 class="h3">產品列表</h1>
        <button class="btn btn-primary" @click="openModal(true)">建立新產品</button>
    </div>
    <div class="card">
        <div class="card-header text-left h5">產品總覽</div>
        <div class="card-body">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>分類</th>
                        <th>名稱</th>
                        <th>原價</th>
                        <th>售價</th>
                        <th>是否啟用</th>
                        <th>編輯</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in products" :key="item.id">
                        <td class="align-middle">{{ item.category }}</td>
                        <td class="align-middle">{{ item.title }}</td>
                        <td class="align-middle">{{ item.origin_price | currency }}</td>
                        <td class="align-middle">{{ item.price | currency }}</td>
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

    <!-- productModal -->
    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <div class="form-row">
                                <div class="col-12">
                                    <div class="form-group text-left">
                                        <label for="link-address">請輸入連結網址</label>
                                        <input type="text" class="form-control" id="link-address" v-model="tempProduct.imageUrl">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group text-left">
                                        <label for="files">或上傳檔案</label>
                                        <i class="fas fa-cog fa-spin" v-if="status.fileUploading"></i>
                                        <input type="file" class="form-control" id="files" ref="files" @change="uploadFile">

                                    </div>
                                </div>
                                <div class="col-12 d-flex" v-if="tempProduct.imageUrl">
                                    <img :src="tempProduct.imageUrl" alt="" width="100px" height="80px">
                                </div>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="form-row">
                                <div class="col-12">
                                    <div class="form-group text-left">
                                        <label for="title">標題</label>
                                        <input type="text" class="form-control" id="title" v-model="tempProduct.title" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group text-left">
                                        <label for="type">種類</label>
                                        <input type="text" class="form-control" id="type" v-model="tempProduct.type" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group text-left">
                                        <label for="category">分類</label>
                                        <input type="text" class="form-control" id="category" v-model="tempProduct.category" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group text-left">
                                        <label for="origin-price">原價</label>
                                        <input type="number" class="form-control" id="origin-price" v-model="tempProduct.origin_price" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group text-left">
                                        <label for="price">售價</label>
                                        <input type="number" class="form-control" id="price" v-model="tempProduct.price" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group text-left">
                                        <label for="unit">單位</label>
                                        <input type="text" class="form-control" id="unit" v-model="tempProduct.unit" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group text-left">
                                        <label for="content">內容</label>
                                        <textarea type="text" class="form-control" id="content" v-model="tempProduct.content" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group text-left">
                                        <label for="description">說明</label>
                                        <textarea type="text" class="form-control" id="description" v-model="tempProduct.description" />
                                    </div>
                                </div>
                                <div class="form-check form-check-inline pl-1">
                                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="is_enabled" true-value="1" false-value="0" v-model="tempProduct.is_enabled">
                                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="updateProduct"><span v-if="isNew">新增</span><span v-else>修改</span></button>
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
                <div class="modal-body">確定要刪除<span class="text-danger font-weight-bold h5">{{ tempProduct.title }}</span>？</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click="removeProduct">確定</button>
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
            isLoading: false,
            products: {},
            tempProduct: {},
            isNew: true,
            status: {
                fileUploading: false
            }
        };
    },
    methods: {
        getProducts(page = 1) {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/products/all`;
            vm.isLoading = true;
            vm.$http.get(api).then((response) => {
                // console.log(response.data);
                vm.products = response.data.products;
                vm.isLoading = false;
            });
        },
        openModal(newOrOld, item) {
            if (newOrOld) {
                this.isNew = newOrOld;
                this.tempProduct = {};
            } else {
                this.isNew = newOrOld;
                this.tempProduct = item;
            }
            $("#productModal").modal("show");
        },
        openDelModal(item) {
            this.tempProduct = item;
            $('#delModal').modal('show');
        },
        updateProduct() {
            const vm = this;
            let api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
            let httpMethod = 'post';
            if (!vm.isNew) {
                api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
                httpMethod = 'put';
            }
            vm.$http[httpMethod](api, {
                data: vm.tempProduct
            }).then((response) => {
                // console.log(response.data)
                if (response.data.success) {
                    vm.getProducts();
                    vm.tempProduct = {};
                    $('#productModal').modal('hide');
                } else {
                    console.log(response.data.success)
                    $('#productModal').modal('hide')
                }
            })
        },
        removeProduct() {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
            vm.$http.delete(api).then((response) => {
                console.log(response.data);
                if (response.data.success) {
                    vm.getProducts();
                    $('#delModal').modal('hide');
                } else {
                    console.log(response.data.message);
                    $('#delModal').modal('hide');
                }
            })
        },
        uploadFile() {
            const uploadedFile = this.$refs.files.files[0];
            const vm = this;
            const formData = new FormData();
            vm.status.fileUploading = true;
            formData.append("file-to-upload", uploadedFile);
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
            vm.$http.post(api, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((response) => {
                console.log(response)
                if (response.data.success) {
                    vm.$set(vm.tempProduct, "imageUrl", response.data.imageUrl);
                    vm.status.fileUploading = false;
                } else {
                    vm.status.fileUploading = false;
                    console.log(response.data.message)
                }
            })
        }
    },
    created() {
        this.getProducts();
    },
};
</script>
