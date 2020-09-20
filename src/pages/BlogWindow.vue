<template>
  <div class="blog-window">
    <h3>{{ activeBlog.title }}</h3>
    <h5>{{ activeBlog.creatorEmail }}</h5>
    <p>{{ activeBlog.body }}</p>
    <div>
      <p>Live Comment: {{ liveComment.body }}</p>
      <div v-if="profile.email == liveComment.creatorEmail && liveComment.body">
        <button
          type="button"
          class="btn btn-danger"
          @click="deleteComment(liveComment.id)"
        >
          Delete
        </button>
        <button
          type="button"
          class="btn btn-success"
          @click="editComment(liveComment.id)"
        >
          Edit
        </button>
      </div>
    </div>
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
    this.$store.dispatch("nullifyLiveComment");
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    activeBlog() {
      return this.$store.state.activeBlog;
    },
    activeComments() {
      return this.$store.state.activeComments;
    },
    liveComment() {
      console.log("liveComment", this.$store.state.liveComment);
      return this.$store.state.liveComment;
    },
  },
  methods: {
    addComment() {
      this.$store.dispatch("createComment", this.newComment);
    },
    editComment(id) {
      console.log("edit comment", id);
    },
    deleteComment(id) {
      this.$store.dispatch("deleteComment", id);
    },
  },
};
</script>

<style></style>
