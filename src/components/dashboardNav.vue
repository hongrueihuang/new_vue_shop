<template>
  <div>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <router-link class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/">管理後臺</router-link>
      <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="navbar-nav px-3 d-none d-md-block">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="logout">Sign out</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}logout`;
      vm.$http.post(api).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/");
        } else {
          console.log(response.data.message);
        }
      });
    },
  },
};
</script>