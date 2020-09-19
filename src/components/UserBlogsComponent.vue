<template>
  <div class="user-blogs-component col-4">
    <div class="card card-style" style="width: 18rem;">
      <div class="card-header justify-content-around">
        <button type="button" class="btn btn-warning" @click="editPost">Edit</button>
        <button type="button" class="btn btn-danger" @click="deletePost(userBlogProp.id)">Delete</button>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{userBlogProp.title}}</h5>
        <h6 class="card-subtitle text-muted">{{userBlogProp.creator.name}}</h6>
        <p class="card-text">{{userBlogProp.body}}</p>
      </div>
      <div class="card-footer">
        <router-link :to="{name:'blog-window', params: {blogId: userBlogProp.id}}">
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
    editPost() {
      console.log("editPost");
    },
    deletePost(id) {
      console.log("deletePost", id);
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
</style>