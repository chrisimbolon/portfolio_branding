<template>
  <section id="home" class="home-section">
    <!-- TheHero.vue now handles all sections -->
    <the-hero />
  </section>
</template>

<script>
import TheHero from '@/components/Home/TheHero.vue'

export default {
  name: 'HomeView',
  components: { TheHero },
}
</script>

<!-- <template>
  <section id="home" class="home-section">
    <the-hero />
  </section>

  <section id="works" class="work-section">
    <WorksSection />
  </section>

  <section id="blog" class="blog-section">
    <blog-section />
  </section>

  <section id="contact" class="contact-section">
    <contact-section />
  </section>
</template>

<script>
import TheHero from '@/components/Home/TheHero.vue'
import WorksSection from '@/components/Works/WorksSection.vue'
import BlogSection from '@/components/Blog/BlogSection.vue'
import ContactSection from '@/components/Contact/ContactSection.vue'

export default {
  name: 'HomeView',
  components: { TheHero, WorksSection, BlogSection, ContactSection },
}
</script> -->
