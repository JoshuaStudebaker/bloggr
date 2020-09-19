<template>
  <div class="blogs-component col-4">
    <router-link :to="{name:'blog-window', params: {blogId: blogProp.id}}">
      <div class="card card-style" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{blogProp.title}}</h5>
          <h6 class="card-subtitle text-muted">{{blogProp.creator.name}}</h6>
          <p class="card-text">{{blogProp.body}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "blogs-component",
  props: ["blogProp"],
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