import { createApp } from "vue";
import App from "./App.vue";
import customDirectives from "./customDirectives.js";
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import routes from "./routes.js";

// const routes = [
//     { path: '/', name: 'Home', component: Home },
// ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const app = createApp(App);
customDirectives(app);
app.use(router);
app.mount("#app");
