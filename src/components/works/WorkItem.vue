<template>
  <div
    class="work-item border rounded-lg overflow-hidden shadow-lg bg-brand-white-1 text-brand-blue-3"
  >
    <!-- Image Section -->
    <img :src="work.image" :alt="work.title" class="h-80 w-full object-cover" loading="lazy" />

    <!-- Info Section -->
    <div class="p-4">
      <!-- Title and Description -->
      <div class="info mb-4">
        <h3 class="text-xl font-bold mb-1">{{ work.title }}</h3>
        <p class="text-sm text-slate-600">{{ work.description }}</p>
      </div>

      <!-- Tags Section -->
      <div class="tags mb-4">
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="(tag, index) in work.tags"
            :key="index"
            class="tag-item text-xs font-semibold bg-blue-100 text-blue-600 px-2 py-1 rounded-lg"
          >
            {{ tag }}
          </li>
        </ul>
      </div>

      <!-- Link Section -->
      <div class="link">
        <a
          :href="work.link"
          target="_blank"
          class="inline-block mt-4 text-brand-blue-3 hover:underline font-medium"
        >
          View Project
        </a>
      </div>
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
