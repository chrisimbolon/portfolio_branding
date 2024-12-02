import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'
import HomeView from '@/views/HomeView.vue'
import AdminLogin from '@/views/AdminLogin.vue'
import BlogEntryForm from '@/components/Blog/BlogEntryForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'AdminLogin',
      component: AdminLogin, // Login form
      meta: { requiresNoAuth: true },
    },
    {
      path: '/admin',
      name: 'AdminPanel',
      component: BlogEntryForm, // Admin-only route
      meta: { requiresAdmin: true },
    },
  ],
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else if (to.hash) {
  //     const target = document.querySelector(to.hash)
  //     if (target) {
  //       const duration = 2000 // Adjust duration for slower scrolling
  //       const start = window.pageYOffset
  //       const end = target.getBoundingClientRect().top + start
  //       const distance = end - start
  //       const startTime = performance.now()

  //       const smoothScroll = (currentTime) => {
  //         const elapsed = currentTime - startTime
  //         const progress = Math.min(elapsed / duration, 1) // Normalize time (0 to 1)
  //         const ease = progress * (2 - progress) // Easing function
  //         window.scrollTo(0, start + distance * ease)

  //         if (progress < 1) requestAnimationFrame(smoothScroll)
  //       }

  //       requestAnimationFrame(smoothScroll)
  //       return false
  //     }
  //   } else {
  //     return { top: 0 }
  //   }
  // },
})

// Route Guard
router.beforeEach(async (to, from, next) => {
  const auth = getAuth()
  const user = auth.currentUser

  if (to.meta.requiresAdmin) {
    if (user) {
      try {
        const token = await user.getIdTokenResult()
        if (token.claims.isAdmin) {
          next()
        } else {
          alert('Access denied. Admins only.')
          next('/') // Redirect non-admins to home
        }
      } catch (error) {
        console.error('Error checking admin claims:', error)
        next('/')
      }
    } else {
      alert('Please log in to access admin routes.')
      next('/login') // Redirect unauthenticated users to login
    }
  } else if (to.meta.requiresNoAuth && user) {
    alert('You are already logged in.')
    next('/') // Prevent logged-in users from accessing login
  } else {
    next() // Proceed to route
  }
})

export default router
