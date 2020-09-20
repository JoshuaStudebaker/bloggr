<template>
  <div class="comments-component">
    <h6>{{ commentsProp.creatorEmail }}</h6>
    <p>{{ commentsProp.body }}</p>
    <button
      type="button"
      class="btn btn-primary"
      @click="loadComment(commentsProp.id)"
    >
      View Comment
    </button>
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
