<template>
<div>
    <div class="cart-btn-wrap d-lg-none">
        <h5><span class="badge badge-danger cart-badge" v-if="cartsNum > 0">{{ carts.length }}</span></h5>
        <router-link to="cart">
            <button class="cart-btn btn-secondary">
                <i class="fas fa-shopping-cart"></i>
            </button>
        </router-link>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container py-3">
            <router-link to="/" class="navbar-brand"><img src="../../assets/images/logo.png" class="img-fluid" alt="logo icon"><h1 class="text-hide">宅宅傢俱 | 首頁</h1></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">首頁</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">登入</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/products">商品</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">關於</a>
                    </li>
                </ul>
            </div>
            <div class="cart-wrap dropdown d-none d-lg-block">
                <button class="btn-cart dropdown-toggle" data-toggle="dropdown">
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <span class="badge badge-danger cart-badge" v-if="cartsNum > 0">{{ carts.length }}</span>
                <div class="dropdown-menu dropdown-menu-right pb-0">
                    <h5 class="text-center bg-dark cart-title text-white">Cart Content</h5>
                    <div class="text-center">
                        <router-link to="/products" class="btn btn-dark mt-3 rounded-0" :class="{'d-none': cartsNum > 0}">還沒購物喔！先去逛逛吧！</router-link>
                    </div>
                    <table class="table table-responsive" style="min-width: 340px;">
                        <tbody>
                            <tr v-for=" cart in carts" :key="cart.id">
                                <td class="align-middle" style="width: 80px;">
                                    <img :src="cart.product.imageUrl" width="50px" height="40px" alt="">
                                </td>
                                <td class="align-middle text-truncate">{{ cart.product.title }}</td>
                                <td class="align-middle text-nowrap">{{ cart.qty }}/{{ cart.product.unit }}</td>
                                <td class="align-middle">{{ cart.final_total | currency }}</td>
                                <td class="align-middle"><button class="btn btn-outline-danger btn-sm" @click="openDelModal(cart)"><i class="far fa-trash-alt"></i></button></td>
                                <td class="align-middle"></td>
                            </tr>
                        </tbody>
                    </table>
                    <router-link to="cart" class="btn btn-block btn-dark btn-lg" :class="{'d-none' : cartsNum === 0}">查看購物車</router-link>
                </div>
            </div>

        </div>
    </nav>
    <!-- delModal -->
    <div class="modal fade" id="delModal" tabindex="-1" aria-labelledby="delModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger">
                    <h5 class="modal-title text-white" id="delModalLabel">刪除商品</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-left">
                    確定要將<span class="h5 text-danger" v-if="tempCart.product">{{ tempCart.product.title }}</span>從購物車移除嗎？
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-danger" @click="delCart(tempCart.id)">確定刪除</button>
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
            tempCart: {}
        }
    },
    methods: {
        updateCart() {
            this.$store.dispatch('updateCart')
        },
        openDelModal(item) {
            this.tempCart = item;
            $('#delModal').modal('show')
        },
        delCart(id) {
            this.$store.dispatch('removeCart', id);
            $('#delModal').modal('hide');
            this.$bus.$emit('message:push', '已從購物車刪除商品', 'success')
        },
    },
    computed: {
        carts() {
            return this.$store.state.carts.carts;
        },
        cartsNum() {
            return this.$store.state.carts.final_total;
        },
    },
    created() {
        this.updateCart();
        this.$bus.$on('updateCart', () => {
            this.updateCart();
        });
    }
};
</script>

<style lang="scss" scoped>
// .navbar-brand {
//     img {
//         display: inline-block;
//         width: 240px;
//         height: 135px;
//     }
// }

// @media (max-width: 768px) {
//     .navbar-brand {

//     }
// }

.cart-btn-wrap {
    position: fixed;
    bottom: 50px;
    right: 40px;
    z-index: 999;

    .cart-badge {
        display: inline-block;
        position: absolute;
        top: -3px;
        right: -5px;
        border-radius: 50%;
    }

    .cart-btn {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
    }
}

.cart-wrap {
    position: relative;

    .btn-cart.dropdown-toggle {
        background-color: transparent;
        color: #000;
        border: none;

        &::after {
            border: none;
        }

        &:hover,
        &:focus {
            color: gray;
            outline: transparent;
        }
    }

    .cart-badge {
        position: absolute;
        border-radius: 50%;
        top: -5px;
        right: -5px;
    }

    .cart-title {
        margin-top: -0.5rem;
        padding: 1rem;
        margin-bottom: 0;
    }

    .dropdown-menu {
        min-width: 350px;
        max-height: 500px !important;
        overflow-y: scroll;

        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            background-color: #F5F5F5;
        }

        &::-webkit-scrollbar {
            width: 12px;
            background-color: #F5F5F5;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
            background-color: #555;
        }
    }
}

.table td {
    padding: 0.5rem !important;
}
</style>
