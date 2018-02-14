// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import VueBootstrap from "bootstrap-vue";
import fontawesome from "@fortawesome/fontawesome";
import regular from "@fortawesome/fontawesome-free-regular";
import solid from "@fortawesome/fontawesome-free-solid";
import brands from "@fortawesome/fontawesome-free-brands";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
fontawesome.library.add(solid, regular, brands);
Vue.use(VueBootstrap);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
