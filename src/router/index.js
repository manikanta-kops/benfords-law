import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/fb",
    name: "fb",
    component: function() {
      return import(/* webpackChunkName: "fb" */ "../views/fb.vue");
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
