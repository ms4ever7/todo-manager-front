import Vue from 'vue';
import Router from 'vue-router';
import AppMain from '../components/layout/AppMain';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppMain',
      component: AppMain
    }
  ]
})
