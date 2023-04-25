import {
  createWebHistory,
  createRouter,
  RouteRecordRaw,
} from "vue-router";
import DDDPage from "../pages/ddd-page/DDDPage.vue";
import GitPage from "../pages/git-page/GitPage.vue";
import RestPage from "../pages/rest-page/RestPage.vue";
import TestsPage from "../pages/tests-page/TestsPage.vue";
import DotnetPage from "../pages/dotnet-page/DotnetPage.vue";
import FrontendPage from "../pages/frontend-page/FrontendPage.vue";
import MessagingPage from "../pages/messaging-page/MessagingPage.vue";

import DDDDrawerContent from "../pages/ddd-page/DDDDrawerContent.vue";
import GitDrawerContent from "../pages/git-page/GitDrawerContent.vue";
import RestDrawerContent from "../pages/rest-page/RestDrawerContent.vue";
import TestsDrawerContent from "../pages/tests-page/TestsDrawerContent.vue";
import DotnetDrawerContent from "../pages/dotnet-page/DotnetDrawerContent.vue";
import FrontendDrawerContent from "../pages/frontend-page/FrontendDrawerContent.vue";
import MessagingDrawerContent from "../pages/messaging-page/MessagingDrawerContent.vue";

export const DDDPageName = "DDDPage";
export const GitPageName = "GitPage";
export const RestPageName = "RestPage";
export const TestsPageName = "TestsPage";
export const DotnetPageName = "DotnetPage";
export const FrontendPageName = "FrontendPage";
export const MessagingPageName = "MessagingPage";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/rest",
  },
  {
    path: "/ddd",
    name: DDDPageName,
    components: {
      default: DDDPage,
      drawer: DDDDrawerContent,
    },
  },
  {
    path: "/source-control",
    name: GitPageName,
    components: {
      default: GitPage,
      drawer: GitDrawerContent,
    },
  },
  {
    path: "/rest",
    name: RestPageName,
    components: {
      default: RestPage,
      drawer: RestDrawerContent,
    },
  },
  {
    path: "/tests",
    name: TestsPageName,
    components: {
      default: TestsPage,
      drawer: TestsDrawerContent,
    },
  },
  {
    path: "/dotnet",
    name: DotnetPageName,
    components: {
      default: DotnetPage,
      drawer: DotnetDrawerContent,
    },
  },
  {
    path: "/frontend",
    name: FrontendPageName,
    components: {
      default: FrontendPage,
      drawer: FrontendDrawerContent,
    },
  },
  {
    path: "/messaging",
    name: MessagingPageName,
    components: {
      default: MessagingPage,
      drawer: MessagingDrawerContent,
    },
  },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
