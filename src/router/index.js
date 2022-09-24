import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'my_boloes',
    component: () => import('@/views/pages/MyBoloes.vue'),
  },
  {
    path: '/meus-boloes',
    name: 'my_boloes',
    component: () => import('@/views/pages/MyBoloes.vue'),
  },
  {
    path: '/criar-bolao',
    name: 'create_bolao',
    component: () => import('@/views/pages/create-bolao/CreateBolao.vue'),
  },
  {
    path: '/classificacao-brasileirao-a',
    name: 'classification-brazil-a',
    component: () => import('@/views/pages/ClassificationBrazilA.vue'),
  },
  {
    path: '/rodadas-brasileirao-a',
    name: 'rounds-brazil-a',
    component: () => import('@/views/pages/RoundsBrazilA.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },





  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
  },
  {
    path: '/typography',
    name: 'typography',
    component: () => import('@/views/typography/Typography.vue'),
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import('@/views/icons/Icons.vue'),
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('@/views/cards/Card.vue'),
  },
  {
    path: '/simple-table',
    name: 'simple-table',
    component: () => import('@/views/simple-table/SimpleTable.vue'),
  },
  {
    path: '/form-layouts',
    name: 'form-layouts',
    component: () => import('@/views/form-layouts/FormLayouts.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
