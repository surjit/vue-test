import Router from 'vue-router';
/* eslint-disable no-unused-vars */

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home'),
  },
  {
    path: '/post/edit/:Id',
    name: 'Post',
    component: () => import('./views/Post'),
  },
  {
    path: '/404',
    name: '404',
    component: require('./views/404').default,
  },
  {
    path: '*',
    redirect: '404',
  }
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});

export default router;
