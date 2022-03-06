<template>
  <v-app full-height>
    <Sidebar />
    <Appbar />
    <v-main><v-autocomplete></v-autocomplete></v-main>
  </v-app>
</template>

<script lang="ts">
import Sidebar from "@/components/page-essential/Sidebar.vue";
import Appbar from "@/components/page-essential/Appbar.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: { Sidebar, Appbar },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped module>
@import "@/styles/common.scss";
</style>
