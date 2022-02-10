import Home from "@/components/routeTest/Home.vue";
import About from "@/components/routeTest/About.vue";
import AboutNested1 from "@/components/routeTest/AboutNested1.vue";
import AboutNested2 from "@/components/routeTest/AboutNested2.vue";
import User from "@/components/routeTest/User.vue";
import Repeatable from "@/components/routeTest/Repeatable.vue";
import NotFound from "@/components/routeTest/NotFound.vue";
import * as VueRouter from "vue-router";

/**
 * @type VueRouter.RouteRecordRaw[]
 */
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About, children: [
            {
                path: 'nested1', component: AboutNested1
            },
            {
                path: 'nested2', component: AboutNested2
            }
        ]
    },
    { path: '/user/:name', component: User },
    { path: '/user-:name', component: User },
    { path: '/nested/:numbers(\\d+)*', component: Repeatable },
    { path: '/:pathMatch(.*)*', component: NotFound },
];

export default routes;