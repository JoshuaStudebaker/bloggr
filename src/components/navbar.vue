<template>
  <header class="container-fluid">
    <nav class="navbar navbar-expand-lg nav-style row">
      <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <div>
          <h3>Bloggr</h3>
        </div>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{ active: $route.name == 'Home' }">
            <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
          </li>
          <li
            class="nav-item"
            v-if="$auth.isAuthenticated"
            :class="{ active: $route.name == 'Profile' }"
          >
            <router-link class="nav-link" :to="{ name: 'Profile' }">Profile</router-link>
          </li>
        </ul>
        <span class="navbar-text">
          <button class="btn btn-success" @click="login" v-if="!$auth.isAuthenticated">Login</button>
          <button class="btn btn-danger" @click="logout" v-else>logout</button>
        </span>
      </div>
    </nav>
  </header>
</template>

<script>
import { getUserData } from "@bcwdev/auth0-vue";
import { setBearer, resetBearer } from "../services/AxiosService";
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      if (this.$auth.isAuthenticated) {
        setBearer(this.$auth.bearer);
        this.$store.dispatch("getProfile");
        // NOTE if you want to do something everytime the user logs in, do so here
      }
    },
    async logout() {
      resetBearer();
      await this.$auth.logout({ returnTo: window.location.origin });
    },
  },
};
</script>

<style scoped>
header {
  background-color: palegreen;
  min-width: 100wh;
}
</style>
