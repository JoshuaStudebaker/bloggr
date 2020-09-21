<template>
  <main class="container-fluid flex-grow-1 ">
    <div class="about text-center row my-3 shadow p-3 welcome">
      <img class="rounded mr-3" :src="profile.picture" alt />
      <h1 class="my-auto">Welcome {{ profile.name }}</h1>
    </div>
    <div class="row" v-if="!activeUserBlog.id">
      <form @submit.prevent="createBlog" class="rounded">
        <div class="form-group">
          <input
            type="text"
            v-model="newBlog.title"
            class="form-control my-1"
            placeholder="Blog Title"
            aria-describedby="helpId"
          />
          <textarea
            class="form-control"
            v-model="newBlog.body"
            rows="10"
            placeholder="Content..."
          ></textarea>
        </div>
        <button type="submit" class="btn btn-success">Create Blog</button>
      </form>
    </div>
    <div class="row p-3" v-if="activeUserBlog.id">
      <div class="col-md-8 ">
        <form @submit.prevent="editUserBlog" class="rounded">
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
          <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-success">Edit Blog</button>
            <button
              type="button"
              class="btn btn-warning"
              @click="unloadEditForm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div class="col-md-4 p-2">
        <div
          class="card rounded card-style card-style2 pr-2 shadow"
          style="width: 18rem;"
        >
          <div class="card-header justify-content-around">
            <h5 class="m-auto"><i>Original</i></h5>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ activeUserBlog.title }}</h5>
            <p class="card-text">{{ activeUserBlog.body }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <user-blogs-component
        v-for="iBlog in userBlogs"
        :key="iBlog.id"
        :userBlogProp="iBlog"
      />
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
    this.$store.dispatch("getProfile");
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

form {
  background-color: whitesmoke;
  box-shadow: 0px 0px 0px 2px skyblue;
  min-width: 45%;
  padding: 15px;
  margin: 15px;
}

.card-style2 {
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 15px;
}

.welcome {
  background-color: honeydew;
}
</style>
