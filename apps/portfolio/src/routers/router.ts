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
    redirect: "/skills/tests",
  },
  {
    path: "/skills/ddd",
    name: SkillsDDDPageName,
    component: SkillsDDDPage,
  },
  {
    path: "/skills/source-control",
    name: SkillsGitPageName,
    component: SkillsGitPage,
  },
  {
    path: "/skills/rest",
    name: SkillsRestPageName,
    component: SkillsRestPage,
  },
  {
    path: "/skills/tests",
    name: SkillsTestsPageName,
    component: SkillsTestsPage,
  },
  {
    path: "/skills/dotnet",
    name: SkillsDotnetPageName,
    component: SkillsDotnetPage,
  },
  {
    path: "/skills/frontend",
    name: SkillsFrontendPageName,
    component: SkillsFrontendPage,
  },
  {
    path: "/skills/messaging",
    name: SkillsMessagingPageName,
    component: SkillsMessagingPage,
  },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
