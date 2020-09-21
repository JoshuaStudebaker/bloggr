<template>
  <div class="blog-window">
    <div class="card">
      <div class="card-header">
        <h3>{{ activeBlog.title }}</h3>
        <h5>{{ activeBlog.creatorEmail }}</h5>
      </div>
      <p>{{ activeBlog.body }}</p>
    </div>
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

        <div>
          <form class="form-inline" @submit.prevent="editComment">
            <div class="form-group">
              <textarea
                class="form-control"
                v-model="editedComment.body"
                rows="2"
                placeholder="(Be nice!!!)"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success">
              Edit
            </button>
          </form>
        </div>
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
          placeholder="(Please be nice!!!)"
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
      editedComment: {},
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
    editComment() {
      this.$store.dispatch("editComment", this.editedComment);
    },
    deleteComment(id) {
      this.$store.dispatch("deleteComment", id);
    },
  },
};
</script>

<style></style>
