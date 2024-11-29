import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      const target = document.querySelector(to.hash)
      if (target) {
        const duration = 2000 // Adjust duration for slower scrolling
        const start = window.pageYOffset
        const end = target.getBoundingClientRect().top + start
        const distance = end - start
        const startTime = performance.now()

        const smoothScroll = (currentTime) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1) // Normalize time (0 to 1)
          const ease = progress * (2 - progress) // Easing function
          window.scrollTo(0, start + distance * ease)

          if (progress < 1) requestAnimationFrame(smoothScroll)
        }

        requestAnimationFrame(smoothScroll)
        return false
      }
    } else {
      return { top: 0 }
    }
  },
})

export default router
