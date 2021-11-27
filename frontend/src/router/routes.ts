import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        redirect: '/history',
      },
      {
        path: 'history',
        name: 'history',
        component: () => import('pages/History.vue'),
      },
      {
        path: 'history/create',
        name: 'create-history',
        component: () => import('pages/HistoryCreate.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
