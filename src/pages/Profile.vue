<template>
  <main class="container-fluid flex-grow-1">
    <div class="about text-center row">
      <h1>Welcome {{ profile.name }}</h1>
      <img class="rounded" :src="profile.picture" alt />
      <p>{{ profile.email }}</p>
    </div>
    <div class="row">
      <form-component />
    </div>
    <div class="row"></div>
  </main>
</template>

<script>
import userBlogComponent from "../components/UserBlogsComponent";
import formComponent from "../components/FormComponent";
export default {
  name: "Profile",
  components: {
    userBlogComponent,
    formComponent,
  },
  mounted() {
    this.$store.dispatch("getUserBlogs");
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    userBlogs() {
      return this.$store.state.userBlogs;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
