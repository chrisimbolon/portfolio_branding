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
        class="image-wrapper group border-4 border-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center relative mb-4"
      >
        <img
          loading="lazy"
          class="w-full sm850:max-w-[600px] h-auto object-contain"
          src="@/assets/images/chris-closeup.png"
          alt="Chris Closeup"
        />
        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300"
        >
          <p class="text-white text-lg font-semibold opacity-0 group-hover:opacity-100">
            Let’s Connect!
          </p>
        </div>
        <div class="button-container mt-4 sm850:absolute sm850:bottom-4 w-full flex justify-center">
          <action-button
            btnText="Contact me"
            class="bg-brand-blue-2 text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-shadow"
          />
        </div>
      </div>

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
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'TheHero',
  components: { HeadLine, MainNav, ActionButton, WorksSection, BlogSection, ContactSection },
  setup() {
    // onMounted below
    onMounted(() => {
      const scroller = document.querySelector('.scrolling-left')

      ScrollTrigger.scrollerProxy(scroller, {
        scrollTop(value) {
          if (arguments.length) scroller.scrollTop = value
          return scroller.scrollTop
        },
      })

      ScrollTrigger.addEventListener('refresh', () => ScrollTrigger.update())

      gsap.utils.toArray('.section').forEach((section, index) => {
        ScrollTrigger.matchMedia({
          // Large screens
          '(min-width: 851px)': function () {
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
          },

          // Small screens
          '(max-width: 850px)': function () {
            ScrollTrigger.kill() // Disable ScrollTrigger for mobile
            gsap.set(section, { opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }) // Reset styles
          },
        })
      })

      ScrollTrigger.refresh()
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
  overflow-y: auto; /* Changed to auto for smooth scrolling */
  height: 100vh; /* Full viewport height */
  position: relative;
}

/* Sticky right section */
.fixed-right {
  position: sticky;
  top: 0;
  height: 100vh;
}

/* Individual section styling */
.section {
  min-height: 100vh; /* Ensure each section is full height */
  opacity: 0;
  transform: translateY(60px);
  padding: 2rem; /* Optional padding for content */
}

@media (max-width: 850px) {
  .portfolio-wrapper {
    flex-direction: column; /* Stack sections vertically */
    height: auto; /* Let it grow with content */
  }

  .scrolling-left,
  .fixed-right {
    width: 100%; /* Take full width in one-column mode */
    height: auto; /* Remove height constraints */
    overflow: visible; /* No scroll constraints for individual sections */
    position: relative; /* Reset positioning */
  }

  .fixed-right {
    margin-bottom: 2rem; /* Add some spacing below the image/CTA section */
  }

  .section {
    opacity: 1; /* Ensure the sections are visible */
    transform: none; /* Remove GSAP initial transform on mobile */
    padding: 1.5rem; /* Optional: adjust padding for smaller screens */
  }
}
</style>
