import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "light",
  },
  getters: {},
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme == "light" ? "dark" : "light";
      console.log(state.theme);
    },
  },
  actions: {},
  modules: {},
});
