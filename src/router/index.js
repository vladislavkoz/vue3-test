import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ten-cards-test',
    name: 'ten-cards-test',
    component: () => import(/* webpackChunkName: "about" */ '../views/TenCardsTest')
  },
  {
    path: '/one-hundred-cards-test',
    name: 'one-hundred-cards-test',
    component: () => import(/* webpackChunkName: "about" */ '../views/OneHundredCardsTest')
  },
  {
    path: '/one-thousand-cards-test',
    name: 'one-thousand-cards-test',
    component: () => import(/* webpackChunkName: "about" */ '../views/OneThousandCardsTest')
  },
  {
    path: '/five-thousand-cards-test',
    name: 'five-thousand-cards-test',
    component: () => import(/* webpackChunkName: "about" */ '../views/FiveThousandCardsTest')
  },
  {
    path: '/ten-thousand-cards-test',
    name: 'ten-thousand-cards-test',
    component: () => import(/* webpackChunkName: "about" */ '../views/TenThousandCardsTest')
  },
  {
    path: '/twenty-thousand-cards-test',
    name: 'twenty-thousand-cards-test',
    component: () => import(/* webpackChunkName: "about" */ '../views/TwentyThousandCardsTest')
  },
  {
    path: '/thirty-thousand-cards-test',
    name: 'thirty-thousand-cards-test',
    component: () => import(/* webpackChunkName: "about" */ '../views/ThirtyThousandCardsTest')
  },
  {
    path: '/fifty-thousand-cards-test',
    name: 'fifty-thousand-cards-test',
    component: () => import(/* webpackChunkName: "about" */ '../views/FiftyThousandCardsTest')
  },
  {
    path: '/ten-thousand-cards-conditional-test',
    name: 'ten-thousand-cards-conditional-test',
    component: () => import(/* webpackChunkName: "about" */ '../views/TenThousandCardsConditionalTest')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
