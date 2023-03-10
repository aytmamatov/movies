import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";

// Vuetify
import "vuetify/styles";
import "@fortawesome/fontawesome-free/css/all.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, fa } from "vuetify/iconsets/fa";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount("#app");
