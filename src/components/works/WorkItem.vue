<template>
  <div
    class="work-item relative flex flex-col border rounded-lg overflow-hidden shadow-lg bg-brand-white-1 text-brand-blue-3 transition-transform transform hover:scale-105 duration-300 ease-in-out"
  >
    <img
      :src="work.image"
      :alt="work.title"
      class="h-auto w-full object-cover"
      loading="lazy"
    />

    <div class="p-4 flex-1">
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-xl font-bold">{{ work.title }}</h3>
        <a :href="work.link" target="_blank" class="text-brand-blue-3 hover:underline font-medium">
          View Project
        </a>
      </div>
      <p class="text-sm text-brand-blue-2 mb-3">{{ work.description }}</p>
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
</style>
