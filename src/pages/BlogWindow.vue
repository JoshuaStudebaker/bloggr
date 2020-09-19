<template>
  <div class="blog-window">
    <h3>{{activeBlog.title}}</h3>
    <h5>{{activeBlog.creatorEmail}}</h5>
    <p>{{activeBlog.body}}</p>
  </div>
</template>
// 
<script>
export default {
  name: "blog-window",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getActiveBlog", this.$route.params.blogId);
  },
  computed: {
    activeBlog() {
      return this.$store.state.activeBlog;
    },
  },
};
</script>

<style>
</style>