import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#dc6133",
        secondary: "#f2ce48",
        accent: "#4762d6",
      },
    },
  },
});
