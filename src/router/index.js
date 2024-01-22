import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '../components/PageNotFound.vue'
import TeamPageView from '../views/TeamPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'page-not-found',
      component: PageNotFound
    },
    {
      path: '/team',
      name: 'team',
      component: TeamPageView
    },
    {
      path: '/event/list',
      name: 'event-list',
      component: () => import('../views/EventPageView.vue')
    },
  ]
})

export default router
