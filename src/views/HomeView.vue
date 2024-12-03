<template>
  <section id="home">
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
