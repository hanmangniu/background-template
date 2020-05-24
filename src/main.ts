import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import './style/antd_vue.scss'
import './style/global.scss'

import { post, fetch, patch, put } from "./utils/axios";
Vue.config.productionTip = false;
Vue.use(Antd);
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
