<template>
  <div id="app">
    <p>{{ message }} from {{ username }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  created() {
    console.log("Hi");
  },
  computed: {
    ...mapState(["message", "username"]),
  },
};
</script>

<style>
</style>
