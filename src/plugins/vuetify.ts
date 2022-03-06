import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import { createVuetify } from "vuetify";
import * as components from "vuetify/lib/components";
import * as directives from "vuetify/lib/directives";

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#9999FF",
    surface: "#FFFFFF",
    primary: "#9999FF",
    "primary-darken-1": "#4F4FFF",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: "#000000",
    surface: "#FFFFFF",
    primary: "#9999FF",
    "primary-darken-1": "#4F4FFF",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: myCustomLightTheme,
      dark: myCustomDarkTheme,
    },
  },
});
export default vuetify;
