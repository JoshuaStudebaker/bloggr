<template>
  <div class="user-blogs-component col-md-4 my-3">
    <div class="card card-style" style="height: 24rem;">
      <div
        class="card-header d-flex justify-content-between"
        style="height: 5rem"
      >
        <button
          type="button"
          class="btn btn-warning btn-header"
          @click="editPost(userBlogProp.id)"
        >
          Edit
        </button>
        <button
          type="button"
          class="btn btn-danger btn-header"
          @click="deletePost(userBlogProp.id)"
        >
          Delete
        </button>
      </div>
      <div class="card-body p-2" style="height: 21rem">
        <div style="height: 4rem">
          <h5 class="card-title">{{ userBlogProp.title }}</h5>
          <h6 class="card-subtitle text-muted">
            By: {{ userBlogProp.creator.name }}
          </h6>
        </div>
        <p class="card-text" style="height: 15rem my-1">
          {{ userBlogProp.body }}
        </p>
      </div>
      <div class="card-footer" style="height: 4rem">
        <router-link
          :to="{ name: 'blog-window', params: { blogId: userBlogProp.id } }"
        >
          <button class="btn btn-secondary">Click for Blog View</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-blogs-component",
  props: ["userBlogProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    editPost(id) {
      this.$store.dispatch("loadEditForm", id);
    },
    deletePost(id) {
      this.$store.dispatch("deleteUserBlog", id);
    },
  },
};
</script>

<style scoped>
.card-style {
  background-color: azure;
  border: 4px solid skyblue;
  box-shadow: 0px 0px 3px 3px cadetblue;
}
.card-body {
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 15rem;
  line-height: 1.5rem;
}

.btn-header {
  min-width: 30%;
  max-width: 38%;
  height: 75%;
}
</style>
