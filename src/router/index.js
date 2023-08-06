import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CareerView from "../views/CareerView.vue";
import DetailIformations from "../components/DetailInformations.vue";
import Login from "../components/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/result",
      name: "result",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/career",
      name: "career",
      component: CareerView,
      children: [
        {
          path: ":id",
          name: "DetailInformations",
          components: {
            default: CareerView,
            detail: DetailIformations,
          },
          props: {
            default: true,
            detail: true,
          },
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      props: {
        mockAccount: {
          username: "career",
          password: "scouter",
        },
      },
    },
    {
      path: "/quiz",
      name: "quiz",
      component: () => import("../views/QuizView.vue"),
    },
    {
      path: "/gdpr",
      name: "gdpr",
      component: () => import("../views/GDPRView.vue"),
    },
  ],
});

export default router;
