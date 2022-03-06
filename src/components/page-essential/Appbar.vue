<template>
  <v-app-bar app color="white" dark>
    <v-app-bar-title>Title</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi:mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi:mdi-heart</v-icon>
    </v-btn>

    <!-- <v-switch
      v-model="theme"
      color="primary"
      true-value="light"
      false-value="dark"
      inset
      :label="`Toggle theme ${$store.state.theme}`"
    ></v-switch> -->

    <v-btn icon>
      <v-icon>mdi:mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import store from "@/store";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {},
  watch: {
    theme: () => {
      store.commit("toggleTheme");
    },
  },
})
export default class Appbar extends Vue {
  public theme = store.state.theme;
}
</script>

<style lang="scss" scoped module>
@import "@/styles/common.scss";
</style>
