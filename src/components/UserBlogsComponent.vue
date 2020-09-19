<template>
  <div class="user-blogs-component col-4">
    <!-- TODO add user verify probably -->
    <router-link :to="{name:'blog-window', params: {blogId: userBlogProp.id}}">
      <div class="card card-style" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{userBlogProp.title}}</h5>
          <h6 class="card-subtitle text-muted">{{userBlogProp.creator.name}}</h6>
          <p class="card-text">{{userBlogProp.body}}</p>
        </div>
      </div>
    </router-link>
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
  methods: {},
};
</script>

<style scoped>
.card-style {
  background-color: azure;
  border: 4px solid skyblue;
  box-shadow: 0px 0px 3px 3px cadetblue;
}
</style>