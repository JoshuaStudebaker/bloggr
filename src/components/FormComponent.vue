<template>
  <form class="form-inline" @submit.prevent="createBlog">
    <div class="form-group">
      <input
        type="text"
        v-model="newBlog.title"
        class="form-control"
        placeholder="Blog Title"
        aria-describedby="helpId"
      />
      <textarea class="form-control" v-model="newBlog.body" rows="10" placeholder="Content..."></textarea>
    </div>
    <button type="submit" class="btn btn-success">Create Blog</button>
  </form>
</template>

<script>
export default {
  name: "form-component",
  data() {
    return {
      newBlog: {},
    };
  },
  method: {
    createBlog() {
      this.$store.dispatch("createBlog", this.newBlog);
      for (let key in this.newBlog) {
        this.newBlog[key] = null;
      }
    },
  },
};
</script>

<style>
</style>