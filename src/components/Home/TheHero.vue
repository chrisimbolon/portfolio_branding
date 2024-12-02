<template>
  <div class="portfolio-wrapper w-full h-screen flex bg-brand-blue-2">
    <!-- Scrolling Left Section -->
    <div class="scrolling-left flex-[60%] overflow-y-scroll">
      <section class="section h-screen flex justify-center items-center bg-gray-50">
        <head-line />
      </section>
      <section class="section h-screen flex justify-center items-center bg-gray-100">
        <works-section />
      </section>
      <section class="section h-screen flex justify-center items-center bg-gray-200">
        <blog-section />
      </section>
      <section class="section h-screen flex justify-center items-center bg-gray-300">
        <contact-section />
      </section>
    </div>

    <!-- Sticky Right Section -->
    <div
      class="fixed-right flex-[40%] flex flex-col justify-center items-center h-screen sticky top-0"
    >
      <div class="image-wrapper border-4 border-white rounded-lg overflow-hidden relative">
        <img
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
    onMounted(() => {
      const sections = document.querySelectorAll('.section')
      console.log(sections)
      gsap.utils.toArray('.section').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
              scroller: '.scrolling-left', // Add this
              markers: true,
            },
          },
        )
      })
    })
  },
}
</script>

<style scoped>
.portfolio-wrapper {
  display: flex;
  height: 100vh;
}

.fixed-right {
  position: sticky;
  top: 0;
  height: 100vh;
}

.scrolling-left {
  overflow-y: scroll;
}

.section {
  scroll-snap-align: start;
}
.section {
  opacity: 0;
  transform: translateY(50px);
}
</style>
