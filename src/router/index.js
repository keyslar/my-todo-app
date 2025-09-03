import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "../views/WelcomePage.vue";
import TodoList from "../views/TodoList.vue";
import CompletedTasks from "../views/CompletedTasks.vue"; // yeni sayfa

const routes = [
  { path: "/", redirect: "/welcome" },
  { path: "/welcome", component: WelcomePage },
  { path: "/todos", component: TodoList },
  { path: "/completed", component: CompletedTasks }, // yeni route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
