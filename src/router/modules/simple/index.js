/*
 * @Descripttion:
 * @version:
 * @Author: 金苏
 * @Date: 2021-03-29 17:31:42
 * @LastEditors: 金苏
 * @LastEditTime: 2021-10-09 11:32:08
 */
// import Layout from "@/libs/layout/Layout";

export const constantRouterMap = [
  {
    path: "/",
    name: "index",
    redirect: "/home"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/simple-template/login") 
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/simple-template/home") 
  }
];
export const asyncRouterMap = [
  
];
