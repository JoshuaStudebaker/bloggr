<template>
  <div class="blogs-component col-md-4 ">
    <router-link :to="{ name: 'blog-window', params: { blogId: blogProp.id } }">
      <div class="card card-style m-2" style="height: 20rem">
        <div class="card-header">
          <h5 class="card-title  ">{{ blogProp.title }}</h5>
        </div>
        <div class="card-body shadow m-2">
          <p class="card-text card-body-style">{{ blogProp.body }}</p>
        </div>
        <div class="card-footer">
          <h6 class="card-subtitle text-muted">{{ blogProp.creator.name }}</h6>
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

.card-body-style {
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 90%;
  line-height: 1.8em;
}
</style>
