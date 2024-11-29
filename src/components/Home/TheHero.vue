<template>
  <div class="flex flex-col md:flex-row w-full h-screen bg-brand-blue-2 text-center">
    <!-- Headline Section -->
    <div class="flex-1 flex justify-center items-center">
      <head-line />
    </div>

    <!-- Image Section -->
    <div class="flex-1 flex justify-center items-center relative">
      <div class="border-4 border-white rounded-lg overflow-hidden relative">
        <img
          class="w-[75vw] md:w-auto md:h-[75vh] object-contain"
          src="@/assets/images/chris-closeup1.png"
          alt="Chris Closeup"
        />
        <!-- ActionButton positioned at the bottom of the image container -->
        <action-button
          btnText="Contact me"
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        />
        <main-nav />
      </div>
    </div>
    <!-- End of Image Section -->
  </div>
</template>

<script>
import ActionButton from '@/shared/ActionButton.vue'
import MainNav from '@/components/Navigation/MainNav.vue'
import HeadLine from '@/components/Home/HeadLine.vue'

export default {
  name: 'TheHero',
  components: { HeadLine, MainNav, ActionButton },
}
</script>

<style scoped>
/* Optional: Add any specific styling to the button inside the image container */
button {
  /* You can adjust the size and styling of the button here if necessary */
}
</style>
