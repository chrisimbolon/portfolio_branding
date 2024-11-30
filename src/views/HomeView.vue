<template>
  <section id="home" class="home-section">
    <the-hero />
  </section>

  <section id="works" class="work-section">
    <WorksSection />
  </section>

  <section id="blog" class="blog-section">
    <blog-section />
  </section>
</template>

<script>
import TheHero from '@/components/Home/TheHero.vue'
import WorksSection from '@/components/Works/WorksSection.vue'
import BlogSection from '@/components/Blog/BlogSection.vue'

export default {
  name: 'HomeView',
  components: { TheHero, WorksSection, BlogSection },
}
</script>
