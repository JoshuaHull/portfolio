import {
  createWebHistory,
  createRouter,
  RouteRecordRaw,
} from "vue-router";
import SkillsDDDPage from "../pages/skills-ddd-page/SkillsDDDPage.vue";
import SkillsGitPage from "../pages/skills-git-page/SkillsGitPage.vue";
import SkillsRestPage from "../pages/skills-rest-page/SkillsRestPage.vue";
import SkillsTestsPage from "../pages/skills-tests-page/SkillsTestsPage.vue";
import SkillsDotnetPage from "../pages/skills-dotnet-page/SkillsDotnetPage.vue";
import SkillsFrontendPage from "../pages/skills-frontend-page/SkillsFrontendPage.vue";
import SkillsMessagingPage from "../pages/skills-messaging-page/SkillsMessagingPage.vue";

import SkillsDDDDrawerContent from "../pages/skills-ddd-page/SkillsDDDDrawerContent.vue";
import SkillsGitDrawerContent from "../pages/skills-git-page/SkillsGitDrawerContent.vue";
import SkillsRestDrawerContent from "../pages/skills-rest-page/SkillsRestDrawerContent.vue";
import SkillsTestsDrawerContent from "../pages/skills-tests-page/SkillsTestsDrawerContent.vue";
import SkillsDotnetDrawerContent from "../pages/skills-dotnet-page/SkillsDotnetDrawerContent.vue";
import SkillsFrontendDrawerContent from "../pages/skills-frontend-page/SkillsFrontendDrawerContent.vue";
import SkillsMessagingDrawerContent from "../pages/skills-messaging-page/SkillsMessagingDrawerContent.vue";

export const SkillsDDDPageName = "SkillsDDDPage";
export const SkillsGitPageName = "SkillsGitPage";
export const SkillsRestPageName = "SkillsRestPage";
export const SkillsTestsPageName = "SkillsTestsPage";
export const SkillsDotnetPageName = "SkillsDotnetPage";
export const SkillsFrontendPageName = "SkillsFrontendPage";
export const SkillsMessagingPageName = "SkillsMessagingPage";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/rest",
  },
  {
    path: "/ddd",
    name: SkillsDDDPageName,
    components: {
      default: SkillsDDDPage,
      drawer: SkillsDDDDrawerContent,
    },
  },
  {
    path: "/source-control",
    name: SkillsGitPageName,
    components: {
      default: SkillsGitPage,
      drawer: SkillsGitDrawerContent,
    },
  },
  {
    path: "/rest",
    name: SkillsRestPageName,
    components: {
      default: SkillsRestPage,
      drawer: SkillsRestDrawerContent,
    },
  },
  {
    path: "/tests",
    name: SkillsTestsPageName,
    components: {
      default: SkillsTestsPage,
      drawer: SkillsTestsDrawerContent,
    },
  },
  {
    path: "/dotnet",
    name: SkillsDotnetPageName,
    components: {
      default: SkillsDotnetPage,
      drawer: SkillsDotnetDrawerContent,
    },
  },
  {
    path: "/frontend",
    name: SkillsFrontendPageName,
    components: {
      default: SkillsFrontendPage,
      drawer: SkillsFrontendDrawerContent,
    },
  },
  {
    path: "/messaging",
    name: SkillsMessagingPageName,
    components: {
      default: SkillsMessagingPage,
      drawer: SkillsMessagingDrawerContent,
    },
  },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
