import { createRouter, createWebHistory } from "vue-router";
import CepView from "../views/CepView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "CepView",
      component: CepView,
    },
  ],
});

export default router;
