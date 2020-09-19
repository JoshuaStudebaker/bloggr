<template>
  <div class="blogs-component">
    <router-link :to="{name:'blog-window', params: {blogId: blogProp.id}}">
      <div>
        <h4>{{blogProp.title}}</h4>
        <h6 class="text-muted">{{blogProp.creator.name}}</h6>
        <p>{{blogProp.body}}</p>
      </div>
    </router-link>>
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