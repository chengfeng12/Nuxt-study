import Vue from 'vue'
import Router from 'vue-router'

import list from "@/pages/order/list";
import detail from "@/pages/order/detail";

Vue.use(Router)

const routes = [
  {
    path : '/' ,
    redirect: "/list"
  },
  {
    path: "/list",
    name: "List",
    component: list
  },
  {
    path: "/detail",
    name: "Detail",
    component: detail
  }
]

let router = new Router({
  mode: "history",
  routes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  next();
})

export const createRouter = () => {
  return router
}
