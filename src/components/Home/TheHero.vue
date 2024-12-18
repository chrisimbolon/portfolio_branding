<template>
  <div class="portfolio-wrapper flex w-full h-screen bg-brand-white-1">
    <!-- Scrolling Left Section -->
    <div class="scrolling-left flex-[60%] overflow-y-auto h-screen">
      <section id="home" class="section flex justify-center items-center">
        <head-line />
      </section>
      <section id="works" class="section flex justify-center items-center bg-gray-100">
        <works-section />
      </section>
      <section id="blog" class="section flex justify-center items-center bg-gray-200">
        <blog-section />
      </section>
      <section id="contact" class="section flex justify-center items-center bg-gray-300">
        <contact-section />
      </section>
    </div>

    <!-- Sticky Right Section -->
    <div
      class="fixed-right flex-[40%] sticky top-0 h-screen flex flex-col justify-center items-center"
    >
      <div class="image-wrapper border-4 border-white rounded-lg overflow-hidden relative">
        <img
          loading="lazy"
          class="w-[75vw] md:w-auto md:h-[75vh] object-contain"
          src="@/assets/images/chris-closeup1.png"
          alt="Chris Closeup"
        />
        <action-button
          btnText="Contact me"
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <main-nav class="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10" />
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

      // Register scrollerProxy to ensure GSAP can interact with it
      ScrollTrigger.scrollerProxy(scroller, {
        scrollTop(value) {
          if (arguments.length) scroller.scrollTop = value
          return scroller.scrollTop
        },
      })

      ScrollTrigger.addEventListener('refresh', () => ScrollTrigger.update())

      gsap.utils.toArray('.section').forEach((section, index) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 80,
            x: index % 2 === 0 ? -50 : 50, // Alternate swipe directions
            scale: 0.9,
            rotate: index % 2 === 0 ? -5 : 5, // Alternate subtle rotations
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotate: 0,
            duration: 1.2, // Increased duration for more impact
            ease: 'power2.out',
            delay: index * 0.15, // Stagger delay for each section
            scrollTrigger: {
              trigger: section,
              start: 'top 70%', // Trigger slightly earlier
              end: 'top 10%',
              scroller: '.scrolling-left', // Use the custom scroller
              markers: true, // Keep markers for debugging
              toggleActions: 'play none none reverse', // Play and reverse animations
            },
          },
        )
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
</style>
