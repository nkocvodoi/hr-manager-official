<template>
  <v-app :theme="theme" full-height>
    <v-main
      ><v-card height="100vh"><router-view></router-view></v-card
    ></v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import store from "@/store";

export default class App extends Vue {
  get theme() {
    return store.state.theme;
  }
}
</script>

<style lang="scss">
@import "@/styles/common.scss";

html,
body {
  position: relative;
  background-color: $color-light-veri-peri;
  font-family: "Fira Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
