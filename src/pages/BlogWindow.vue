<template>
  <div class="blog-window">
    <div class="card col-12 my-3 shadow p-0">
      <div class="card-body shadow">
        <div class="text-center">
          <h3 class="text-dark">{{ activeBlog.title }}</h3>
          <p class="text-muted my-1">By: {{ activeBlog.creatorEmail }}</p>

          <hr />
        </div>
        <div class="shadow p-3">
          <p class="card-text">{{ activeBlog.body }}</p>
        </div>
      </div>
    </div>
    <div>
      <form
        class="form-inline"
        v-if="!liveComment.body"
        @submit.prevent="addComment"
      >
        <div class="form-group">
          <textarea
            class="form-control"
            v-model="newComment.body"
            rows="2"
            placeholder="Please be nice!!!"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-success mx-3">Add Comment</button>
      </form>
      <div class="d-flex justify-content-between" v-if="liveComment.body">
        <div class="card col-6">
          <div class="card-body">
            <p class="card-text">
              {{ liveComment.creatorEmail }} says: <br />
              <span class="text-dark">{{ liveComment.body }}</span>
            </p>
            <button
              v-if="
                profile.email == liveComment.creatorEmail && liveComment.body
              "
              type="button"
              class="btn btn-danger my-2"
              @click="deleteComment(liveComment.id)"
            >
              Delete
            </button>
          </div>
        </div>

        <div
          v-if="profile.email == liveComment.creatorEmail && liveComment.body"
          class="col-6"
        >
          <form class="form-inline" @submit.prevent="editComment">
            <div class="form-group">
              <textarea
                class="form-control"
                v-model="editedComment.body"
                rows="2"
                placeholder="(Be nice!!!)"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success mx-3">
              Edit Comment Text
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

<style scoped>
.card-header,
.card-footer {
  background-color: lightcyan;
}

.card-body {
  color: darkgray;
}
</style>
