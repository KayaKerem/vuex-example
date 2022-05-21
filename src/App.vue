<template>
  <div id="app">
    <p>{{ message }} from {{ username }}</p>
    <p>{{welcomeMessage}}</p>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";

export default {
  name: "App",
  created() {
    console.log("Hi");
  },
  computed: {
    ...mapState(["message", "username"]),
    ...mapGetters(['welcomeMessage'])
  },
};
</script>

<style>
</style>
