<template>
  <div class="w-full h-screen flex flex-col bg-brand-blue-2">
    <!-- Headline and Image Section -->
    <div class="flex flex-1 flex-col md:flex-row">
      <!-- Headline Section -->
      <div class="flex-1 flex justify-center items-center">
        <head-line />
      </div>

      <!-- Image Section -->
      <div class="flex-1 flex justify-center items-center relative">
        <!-- Image and ActionButton -->
        <div class="border-4 border-white rounded-lg overflow-hidden relative">
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
        <!-- Navigation Section Positioned at Mark (Y) -->
        <main-nav class="absolute -bottom-14 left-1/2 transform -translate-x-1/2 z-10" />
      </div>
    </div>
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
