import { createRouter, createWebHistory } from 'vue-router'
import SplashPage from '../views/SplashPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SplashPage
    },
    // Catch-all route - redirect to home for now
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router