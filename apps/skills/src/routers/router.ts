import {
  createWebHistory,
  createRouter,
  RouteRecordRaw,
} from "vue-router";

import AllPage from "../pages/all-page/AllPage.vue";

export const AllPageName = "AllPage";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/all",
  },
  {
    path: "/all",
    name: AllPageName,
    component: AllPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
