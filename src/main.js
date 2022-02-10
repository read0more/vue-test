import { createApp } from "vue";
import App from "./App.vue";
import customDirectives from "./customDirectives.js";
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import routes from "./routes.js";

// todo: routes에 넣은 컴포넌트들 lazy 되는지, 어떻게 적용하는지
const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
customDirectives(app);
app.use(router);
app.mount("#app");
