import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Login from "../views/Login.vue"
import PatientRegistration from "../views/PatientRegistration.vue"
import Portal from "../views/Portal.vue"
import NotFound from "../views/NotFound.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/registration',
    component: PatientRegistration
  },
  {
    path: '/portal',
    component: Portal,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
