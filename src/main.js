import { createApp } from "vue";
import App from "./App.vue";
import customDirectives from "./customDirectives.js";
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import routes from "./routes.js";
import { createStore } from "vuex";

// todo: routes에 넣은 컴포넌트들 lazy 되는지, 어떻게 적용하는지
const router = createRouter({
    history: createWebHistory(),
    routes
});

const store = createStore({
   state () {
       return {
           list: []
       }
   },
    mutations: {
        addList (list) {
            state.lists.push(list);
        }
    }
});

const app = createApp(App);
customDirectives(app);
app.use(router);
app.use(store);
app.mount("#app");
