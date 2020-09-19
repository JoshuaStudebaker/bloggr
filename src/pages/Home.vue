<template>
  <div class="home">
    <h1>Welcome</h1>
    <blogs-component v-for="iBlog in blogs" :key="iBlog.id" :blogProp="iBlog" />
  </div>
</template>

<script>
import blogsComponent from "../components/BlogsComponent";
export default {
  name: "home",
  components: {
    blogsComponent,
  },
  mounted() {
    this.$store.dispatch("getAllBlogs");
  },
  data() {
    return {};
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },
};
</script>
