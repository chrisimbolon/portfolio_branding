<template>
  <div
    class="work-item relative flex flex-col border rounded-lg overflow-hidden shadow-lg bg-brand-white-1 text-brand-blue-3 transition-transform transform hover:scale-105 duration-300 ease-in-out"
    style="min-width: 350px;"
  >
    <!-- Responsive Image -->
    <img
      :src="work.image"
      :alt="work.title"
      class="h-auto w-full object-cover"
      loading="lazy"
    />

    <!-- Responsive Text Section -->
    <div class="p-4 flex-1 flex flex-col justify-between">
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-base sm:text-xl font-bold">{{ work.title }}</h3>
        <a :href="work.link" target="_blank" class="text-brand-blue-3 hover:underline text-sm sm:text-base">
          View Project
        </a>
      </div>
      <p class="text-xs sm:text-sm lg:text-base text-brand-blue-2 mb-3">{{ work.description }}</p>
      <ul class="flex flex-wrap gap-2">
        <li
          v-for="(tag, index) in work.tags"
          :key="index"
          class="text-[10px] sm:text-xs lg:text-sm bg-slate-200 text-brand-blue-2 rounded-md px-2 py-1"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
.work-item {
  @apply w-full sm:max-w-md md:max-w-lg lg:max-w-full;
}
</style>


<script>
export default {
  name: 'WorkItem',
  props: {
    work: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.work-item {
  @apply w-full sm:max-w-md md:max-w-lg lg:max-w-full;
}

@media (max-width: 850px) {
  .work-item .p-4 {
    @apply p-2; 
  }
}

.work-item .p-4 {
    @media (max-width: 640px) {
    @apply text-center p-1 ; 
  }
}

@media (max-width: 480px) {
  h3 {
    @apply text-sm; 
  }
}

</style>
