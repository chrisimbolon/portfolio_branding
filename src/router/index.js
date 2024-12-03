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
  // to be filled with GSAP or scrollBehavior
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition // Scroll to saved position (e.g., back/forward navigation)
    }

    if (to.hash) {
      const target = document.querySelector(to.hash) // Locate the target section

      if (target) {
        const scrollContainer = document.querySelector('.scrolling-left') || window

        // Smooth scrolling function
        const smoothScroll = (start, end, duration) => {
          const distance = end - start
          const startTime = performance.now()

          const animateScroll = (currentTime) => {
            const timeElapsed = currentTime - startTime
            const progress = Math.min(timeElapsed / duration, 1) // Ensure progress <= 1
            const ease = progress * (2 - progress) // Ease-out function

            scrollContainer.scrollTo(0, start + distance * ease)

            if (progress < 1) {
              window.requestAnimationFrame(animateScroll) // Continue animation
            }
          }

          window.requestAnimationFrame(animateScroll)
        }

        // Calculate the scroll position
        const startPosition = scrollContainer.scrollTop || 0
        const endPosition = target.offsetTop - (scrollContainer.offsetTop || 0)
        const duration = 2000 // Slow scroll duration in ms (1 second)

        smoothScroll(startPosition, endPosition, duration)

        return false // Prevent default scroll behavior
      }
    }

    return { left: 0, top: 0 } // Default: scroll to top-left
  },
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
