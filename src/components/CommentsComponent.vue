<template>
  <div class="comments-component">
    <div class="card my-2">
      <div class="card-header p-1">
        <p class="card-title text-muted my-auto">
          By: {{ commentsProp.creatorEmail }}
        </p>
      </div>
      <div class="card-body p-1">
        <p class="card-text">{{ commentsProp.body }}</p>
        <button
          type="button"
          class="btn btn-primary btn-sm"
          @click="loadComment(commentsProp.id)"
        >
          View Comment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comments-component",
  props: ["commentsProp"],
  mounted() {
    this.$store.dispatch("getProfile");
  },
  data() {
    return {};
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    loadComment(id) {
      console.log("comm-comp", id);
      this.$store.dispatch("loadComment", id);
    },
  },
  components: {},
};
</script>

<style></style>
