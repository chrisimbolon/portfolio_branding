<template>
  <div
    class="work-item border rounded-lg overflow-hidden shadow-lg bg-brand-white-1 text-brand-blue-3"
  >
    <img :src="work.image" :alt="work.title" class="h-80 w-full object-cover" loading="lazy" />

    <div class="p-4">
      <div class="flex justify-between items-center mb-2">
        <!-- Title -->
        <h3 class="text-xl font-bold">{{ work.title }}</h3>

        <!-- Link -->
        <a :href="work.link" target="_blank" class="text-brand-blue-3 hover:underline font-medium">
          View Project
        </a>
      </div>

      <!-- Description -->
      <!-- <p class="text-sm text-slate-600 mb-3">{{ work.description }}</p> -->
      <p class="text-sm text-brand-blue-2 mb-3">{{ work.description }}</p>

      <!-- Tags -->
      <ul class="flex flex-wrap gap-2">
        <li
          v-for="(tag, index) in work.tags"
          :key="index"
          class="text-xs bg-slate-200 text-brand-blue-2 rounded-md px-2 py-1"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkItem',
  props: {
    work: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.work-item {
  max-width: 800px;
  min-height: 400px;
  @apply transition-transform transform hover:scale-105 duration-300 ease-in-out;
}

.tag-item {
  @apply transition-all transform hover:scale-105 hover:shadow-sm cursor-pointer;
}
</style>
