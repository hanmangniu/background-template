import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Loading from "../views/Loading.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "loading",
    component: Loading,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/user/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
