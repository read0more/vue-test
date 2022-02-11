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
        addList (state, payload) {
            state.list.push(payload);
        }
    },
    actions: {
       addList ({ commit }, payload) {
           commit('addList', payload);
       }
    },
    // todo: getters 외부에서 사용할때 property 방식이면 캐시되고 method 방식이면 캐시 되지 않는다고 함. 하지만 vue에 버그가 있어 캐시가 되지 않았다고 하며, 현재 버전에서 되는지는 확인필요
    getters: {
       lastOfList (state) {
           return state.list[state.list.length - 1];
       },
        firstOfList (state) {
            return state.list[0];
        }
    }
});

const app = createApp(App);
customDirectives(app);
app.use(router);
app.use(store);
app.mount("#app");
