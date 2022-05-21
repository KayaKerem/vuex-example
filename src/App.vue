<template>
  <div id="app">
    <p>{{ message }} from {{ username }}</p>
    <p>{{welcomeMessage}}</p>
    <input v-model="name" /> 
    <button @click="updateName">İsmi Değiştir</button>

  </div>
</template>

<script>
import { mapState,mapGetters,mapActions } from "vuex";

export default {
  name: "App",
  data(){
    return{
      name:"kerem"
    }
  },
  methods:{
    
    ...mapActions([
      'updateUsername'
    ]),
    updateName(){
      this.updateUsername(this.name)
    },
  },
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
