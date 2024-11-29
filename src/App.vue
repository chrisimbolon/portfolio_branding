<template>
  <the-logo />

  <router-view />
</template>

<script>
import TheLogo from '@/shared/TheLogo.vue'

export default {
  name: 'App',
  components: { TheLogo },
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
