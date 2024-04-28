import {
  createWebHistory,
  createRouter,
  RouteRecordRaw,
} from "vue-router";

import MePage from "../pages/me-page/MePage.vue";

export const MePageName = "MePage";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/me",
  },
  {
    path: "/me",
    name: MePageName,
    component: MePage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
