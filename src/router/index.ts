import { h, resolveComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/Default.vue"),
      name: "DefaultLayout",
      children: [
        {
          path: "",
          component: () => import("../pages/Home.vue"),
          name: "HomePage",
        },
        {
          path: "users",
          component: () => import("../pages/Users.vue"),
          name: "UsersPage",
        }
      ],
    },
    {
      path: "/auth/register",
      component: () => import("../pages/Register.vue"),
      name: "RegisterPage",
    },
    {
      path: "/auth/login",
      component: () => import("../pages/Login.vue"),
      name: "LoginPage",
    },
  ],
});

export default router;
