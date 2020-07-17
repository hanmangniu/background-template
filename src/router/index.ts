import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import Loading from "../views/Loading.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/user/Login.vue"),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('../views/dashboard/Dashboard.vue'),
      redirect: '/dashboard/analysis',
      children: [
        {
        path: 'analysis',
        name: 'Analysis',
        component: () => import('../views/dashboard/analysis/Analysis.vue')
      },
        {
        path: 'monitor',
        name: 'Monitor',
        component: () => import('../views/dashboard/monitor/Monitor.vue')
      },
        {
        path: 'workplace',
        name: 'Workplace',
        component: () => import('../views/dashboard/workplace/Workplace.vue')
      },
    ]
    }]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
