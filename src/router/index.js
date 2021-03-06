import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/console'
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/console',
    name: 'Console',
    component: () => import(/* webpackChunkName: "console" */ '../pages/console/index.vue'),
  },
  {
    path: '/workspace',
    name: 'Workspace',
    component: () => import(/* webpackChunkName: "workspace" */ '../pages/workspace/index.vue'),
  },
];

export default routes;
