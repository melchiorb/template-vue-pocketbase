import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"

import "./assets/style.css"

import App from "./App.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: () => import("./views/Home.vue") }],
})

createApp(App).use(router).mount("#app")
