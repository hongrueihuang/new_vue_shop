<template>
<div class="row justify-content-center align-items-center mt-5">
    <div class="col-3">
        <div class="card">
            <form class="form-signin" @submit.prevent="login">
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="form.username" required autofocus />
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="form.password" required />
                <span class="text-danger" v-if="message">{{ message }}，請重新登入</span>
                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
            </form>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            message: ''
        }
    },
    methods: {
        login() {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}admin/signin`;
            let data = vm.form;
            vm.$http.post(api, data).then((response) => {
                if (response.data.success) {
                    vm.$router.push('/admin/products-list');
                } else {
                    vm.message = response.data.message;
                    vm.form.username = '';
                    vm.form.password = '';
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped>
html,
body {
    height: 100%;
}

body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
}

.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

.form-signin .checkbox {
    font-weight: 400;
}

.form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
}

.form-signin .form-control:focus {
    z-index: 2;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>
