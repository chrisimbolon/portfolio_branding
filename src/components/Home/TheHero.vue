<template>
  <div
    class="portfolio-wrapper flex flex-col sm850:flex-row w-full h-auto sm850:h-screen bg-brand-white-1"
  >
    <!-- Scrolling Left Section -->
    <div
      class="scrolling-left flex-[100%] sm850:flex-[60%] overflow-y-auto h-auto sm850:h-screen order-2 sm850:order-1"
    >
      <section id="home" class="section flex justify-center items-center">
        <head-line />
      </section>
      <section id="works" class="section flex justify-center items-center bg-gray-100">
        <works-section />
      </section>
      <section id="blog" class="section flex justify-center items-center bg-gray-200">
        <blog-section />
      </section>
      <section id="contact" class="section flex justify-center items-center bg-brand-platinum-1">
        <contact-section />
      </section>
    </div>

    <!-- Sticky Right Section -->
    <div
      class="fixed-right flex-[100%] sm850:flex-[40%] sticky sm850:sticky sm850:top-0 h-auto sm850:h-screen flex flex-col justify-center items-center order-1 sm850:order-2"
    >
      <div
        class="image-wrapper group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center relative mb-4"
      >
        <!-- Profile Image -->
        <img
          class="w-full sm850:max-w-[60%] lg:max-w-[500px] xl:max-w-[600px] h-auto object-contain"
          srcset="
            /images/chris-closeup-250.webp 300w,
            /images/chris-closeup-400.webp 500w,
            /images/chris-closeup-600.webp 600w
          "
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 60vw, 500px"
          src="/images/chris-closeup.webp"
          width="600"
          height="700"
          alt="Chris Closeup"
        />

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300"
        >
          <p
            class="text-white text-sm sm850:text-lg font-semibold opacity-0 group-hover:opacity-100 px-2 text-center"
          >
            Let’s Connect!
          </p>
        </div>

        <!-- Contact Me Button -->
        <div
          class="button-container mt-4 sm850:absolute sm850:bottom-4 sm850:left-1/2 sm850:transform sm850:-translate-x-1/2 w-full flex justify-center"
        >
          <action-button
            @click="scrollToSection('contact')"
            btnText="Contact me"
            class="bg-brand-blue-2 text-white text-xs sm850:text-sm lg:text-base px-4 sm850:px-6 py-1.5 sm850:py-2 rounded-md shadow-md hover:shadow-lg transition-shadow"
          />
        </div>
      </div>

      <!-- Navigation -->
      <main-nav
        class="hidden sm850:block absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
      />
    </div>
  </div>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue'
import MainNav from '@/components/Navigation/MainNav.vue'
import HeadLine from '@/components/Home/HeadLine.vue'
import WorksSection from '@/components/Works/WorksSection.vue'
import BlogSection from '@/components/Blog/BlogSection.vue'
import ContactSection from '@/components/Contact/ContactSection.vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'TheHero',
  components: { HeadLine, MainNav, ActionButton, WorksSection, BlogSection, ContactSection },
  methods: {
    scrollToSection(id) {
      const target = document.getElementById(id)
      const scrollableParent = document.querySelector('.scrolling-left')

      if (target && scrollableParent) {
        scrollableParent.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth',
        })

        history.pushState(null, '', `#${id}`) 
      }
    },
  },

  setup() {
    let mm = null // Store gsap.matchMedia instance for cleanup
    let lastScrollTop = 0 // To store the last scroll position

    // Function to handle breakpoint changes
    const handleBreakpointChange = () => {
      const scroller = document.querySelector('.scrolling-left')
      if (scroller) {
        lastScrollTop = scroller.scrollTop // Capture scroll position
        ScrollTrigger.refresh() // Refresh ScrollTrigger setup
        scroller.scrollTop = lastScrollTop // Restore scroll position
      }
    }

    const setupScrollAnimations = () => {
      const scroller = document.querySelector('.scrolling-left')
      if (!scroller) return

      // Set up GSAP ScrollTrigger scroller proxy
      ScrollTrigger.scrollerProxy(scroller, {
        scrollTop(value) {
          if (arguments.length) scroller.scrollTop = value
          return scroller.scrollTop
        },
      })

      ScrollTrigger.addEventListener('refresh', () => ScrollTrigger.update())
      ScrollTrigger.refresh()

      // Initialize matchMedia for animations
      mm = gsap.matchMedia()

      // Media query for large screens
      mm.add('(min-width: 851px)', () => {
        gsap.utils.toArray('.section').forEach((section, index) => {
          gsap.fromTo(
            section,
            {
              opacity: 0,
              y: 80,
              x: index % 2 === 0 ? -50 : 50,
              scale: 0.9,
              rotate: index % 2 === 0 ? -5 : 5,
            },
            {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              rotate: 0,
              duration: 1.2,
              ease: 'power2.out',
              delay: index * 0.15,
              scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                end: 'top 10%',
                scroller: '.scrolling-left',
                toggleActions: 'play none none reverse',
              },
            },
          )
        })

        return () => {
          // Clean up ScrollTriggers for large screens
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
      })

      // Media query for small screens
      mm.add('(max-width: 850px)', () => {
        // Reset animations for mobile
        gsap.utils.toArray('.section').forEach((section) => {
          gsap.set(section, { opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 })
        })

        return () => {
          // No specific cleanup needed for mobile
        }
      })
    }

    onMounted(() => {
      setupScrollAnimations()

      // Listen for window resize and restore scroll position
      window.addEventListener('resize', handleBreakpointChange)
    })

    onUnmounted(() => {
      if (mm) mm.revert() // Clean up matchMedia
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()) // Kill all ScrollTriggers
      window.removeEventListener('resize', handleBreakpointChange) // Remove event listener
    })
  },
}
</script>

<style scoped>
/* Wrapper to hold the layout */
.portfolio-wrapper {
  display: flex;
  height: 100vh;
}

/* Left scrolling section */
.scrolling-left {
  overflow-y: auto; /* Smooth scrolling */
  height: 100vh; /* Full viewport height */
  position: relative;
  overflow-x: hidden;
}

.scrolling-left::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
}

.scrolling-left {
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For IE/Edge */
}

/* Sticky right section */
.fixed-right {
  position: sticky;
  top: 0;
  height: 100vh;
}

/* Individual section styling */
.section {
  min-height: 100vh;
  opacity: 0;
  transform: translateY(60px);
  padding: 2rem;
}

@media (max-width: 850px) {
  .fixed-right {
    display: none;
  }

  .section {
    opacity: 1;
    transform: none;
    padding: 1.5rem;
  }
}
</style>
