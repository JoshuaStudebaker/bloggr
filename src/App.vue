<template>
  <div id="app" class="container-fluid d-flex flex-column">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import { onAuth } from "@bcwdev/auth0-vue";
import { setBearer } from "./services/AxiosService";
export default {
  name: "App",
  async beforeCreate() {
    await onAuth();
    if (this.$auth.isAuthenticated) {
      setBearer(this.$auth.bearer);
      //NOTE if you want to do something everytime the user logs in, do so here
    }
  },
  components: {
    Navbar,
  },
};
</script>
<style scoped>
#app {
  min-height: 100vh;
}
</style>
