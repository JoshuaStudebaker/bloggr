<template>
  <div class="blogs-component">
    <router-link :to="{name:'blog-window', params: {blogId: blogProp.id}}">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="blogProp.imgUrl" alt="Card image cap" />
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

<style>
</style>