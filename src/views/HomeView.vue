<template>
  <section id="home" class="home-section">
    <the-hero />
  </section>

  <section id="works" class="work-section">
    <WorksSection />
  </section>
</template>

<script>
import TheHero from '@/components/Home/TheHero.vue'
import WorksSection from '@/components/Works/WorksSection.vue'
export default {
  name: 'HomeView',
  components: { TheHero, WorksSection },
}
</script>
