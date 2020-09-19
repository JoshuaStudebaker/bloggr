<template>
  <main class="container-fluid flex-grow-1">
    <div class="about text-center row">
      <h1>Welcome {{ profile.name }}</h1>
      <img class="rounded" :src="profile.picture" alt />
      <p>{{ profile.email }}</p>
      <form class="form-inline" @submit.prevent="createBlog">
        <div class="form-group">
          <input
            type="text"
            v-model="newBlog.title"
            class="form-control"
            placeholder="Blog Title"
            aria-describedby="helpId"
          />
          <textarea class="form-control" v-model="newBlog.body" rows="10" placeholder="Content..."></textarea>
        </div>
        <button type="submit" class="btn btn-success">Create Blog</button>
      </form>
    </div>
    <div class="row">
      <user-blogs-component v-for="iBlog in userBlogs" :key="iBlog.id" :userBlogProp="iBlog" />
    </div>
  </main>
</template>

<script>
import userBlogsComponent from "../components/UserBlogsComponent";

export default {
  name: "Profile",
  components: {
    userBlogsComponent,
  },
  data() {
    return {
      newBlog: {},
    };
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
  methods: {
    createBlog() {
      this.$store.dispatch("createBlog", this.newBlog);
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
