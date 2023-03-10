/*
 * @Descripttion: 
 * @version: 
 * @Author: 金苏
 * @Date: 2021-08-30 09:21:49
 * @LastEditors: 金苏
 * @LastEditTime: 2021-08-30 10:30:22
 */
import Vue from "vue";

import App from "@/App";
import router from "@/router";
import store from "@/store";

// 国际化
import i18n from "@/libs/lang";
import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant, {
  size: "medium",
  i18n: (key, value) => i18n.t(key, value)
});

// 集成vue架包
import { initSetup } from "@/libs/setup";
initSetup(Vue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  i18n,
  render: h => h(App)
});
