<template>
  <div class="blog-window">
    <h3>{{activeBlog.title}}</h3>
    <h5>{{activeBlog.creatorEmail}}</h5>
    <p>{{activeBlog.body}}</p>
    <comments-component
      v-for="iComment in activeComments"
      :key="iComment.id"
      :commentsProp="iComment"
    />
    <form class="form-inline" @submit.prevent="addComment">
      <div class="form-group">
        <textarea
          class="form-control"
          v-model="newComment.body"
          rows="2"
          placeholder="(Plase be nice!!!)"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-success">Add Comment</button>
    </form>
  </div>
</template>
// 
<script>
import commentsComponent from "../components/CommentsComponent";
export default {
  name: "blog-window",
  components: {
    commentsComponent,
  },
  data() {
    return {
      newComment: {},
    };
  },
  mounted() {
    this.$store.dispatch("getActiveBlog", this.$route.params.blogId);
    this.$store.dispatch("getCommentsByBlog", this.$route.params.blogId);
  },
  computed: {
    activeBlog() {
      return this.$store.state.activeBlog;
    },
    activeComments() {
      return this.$store.state.activeComments;
    },
  },
  methods: {
    addComment() {
      this.$store.dispatch("createComment", this.newComment);
    },
  },
};
</script>

<style>
</style>