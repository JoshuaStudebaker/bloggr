<template>
  <main class="container-fluid flex-grow-1">
    <div class="about text-center row">
      <h1>Welcome {{ profile.name }}</h1>
      <img class="rounded" :src="profile.picture" alt />
      <p>{{ profile.email }}</p>
    </div>
    <div class="row" v-if="!activeUserBlog.id">
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
    <div class="row" v-if="activeUserBlog.id">
      <div class="col-8">
        <form class="form-inline" @submit.prevent="editUserBlog">
          <div class="form-group">
            <input
              type="text"
              v-model="editBlog.title"
              class="form-control"
              aria-describedby="helpId"
              :placeholder="activeUserBlog.title"
            />
            <textarea
              class="form-control"
              v-model="editBlog.body"
              rows="10"
              :placeholder="activeUserBlog.body"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-success">Edit Blog</button>
        </form>
        <button type="button" class="btn btn-warning" @click="unloadEditForm">Cancel</button>
      </div>
      <div class="col-4">
        <div class="card card-style" style="width: 18rem;">
          <div class="card-header justify-content-around">Original</div>
          <div class="card-body">
            <h5 class="card-title">{{activeUserBlog.title}}</h5>
            <p class="card-text">{{activeUserBlog.body}}</p>
          </div>
        </div>
      </div>
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
      editBlog: {},
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

    activeUserBlog() {
      return this.$store.state.activeUserBlog;
    },
  },
  methods: {
    createBlog() {
      this.$store.dispatch("createBlog", this.newBlog);
    },
    editUserBlog() {
      console.log("edit-check", this.editBlog.title, this.editBlog.body);
      this.$store.dispatch("editBlog", this.editBlog);
    },
    unloadEditForm() {
      this.$store.dispatch("unloadEditForm");
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
.card-style {
  background-color: azure;
  border: 4px solid skyblue;
  box-shadow: 0px 0px 3px 3px cadetblue;
}
</style>
