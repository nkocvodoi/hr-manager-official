<template>
  <v-card color="white" class="ma-5 pa-10">
    <v-row>
      <v-col cols="12">
        <v-autocomplete
          v-model="friends"
          :items="people"
          chips
          closable-chips
          color="blue-grey lighten-2"
          label="Select"
          item-text="name"
          item-value="name"
          multiple
        >
        </v-autocomplete>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
  },
})
export default class SearchCandidatesForm extends Vue {
  public srcs = {
    1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
  };

  public autoUpdate = true;
  public friends = ["Sandra Adams", "Britta Holt"];
  public isUpdating = false;
  public name = "Midnight Crew";
  public people = [
    { header: "Group 1" },
    { name: "Sandra Adams", group: "Group 1", avatar: this.srcs[1] },
    { name: "Ali Connors", group: "Group 1", avatar: this.srcs[2] },
    { name: "Trevor Hansen", group: "Group 1", avatar: this.srcs[3] },
    { name: "Tucker Smith", group: "Group 1", avatar: this.srcs[2] },
    { divider: true },
    { header: "Group 2" },
    { name: "Britta Holt", group: "Group 2", avatar: this.srcs[4] },
    { name: "Jane Smith ", group: "Group 2", avatar: this.srcs[5] },
    { name: "John Smith", group: "Group 2", avatar: this.srcs[1] },
    { name: "Sandra Williams", group: "Group 2", avatar: this.srcs[3] },
  ];
  public title = "The summer breeze";

  remove(item: any) {
    const index = this.friends.indexOf(item.name);
    if (index >= 0) this.friends.splice(index, 1);
  }
}
</script>

<style lang="scss" scoped module>
@import "@/styles/common.scss";
</style>
