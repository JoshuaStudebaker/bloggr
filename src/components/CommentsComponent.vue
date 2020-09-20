<template>
  <div class="comments-component">
    <h6>{{commentsProp.creatorEmail}}</h6>
    <p>{{commentsProp.body}}</p>
  </div>
</template>

<script>
export default {
  name: "comments-component",
  props: ["commentsProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>

<style>
</style>