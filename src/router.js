import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Sample from "./views/Sample.vue";
import Step from "./views/Step.vue";
import Line from "./views/Line.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/sample",
      name: "sample",
      component: Sample
    },
    {
      path: "/step",
      name: "step",
      component: Step
    },
    {
      path: "/line",
      name: "Line",
      component: Line
    }
  ]
});
