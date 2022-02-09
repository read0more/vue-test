import { createApp } from "vue";
import App from "./App.vue";
import customDirectives from "./customDirectives.js";

const app = createApp(App);
customDirectives(app);
app.mount("#app");
