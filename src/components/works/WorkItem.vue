<template>
  <div class="work-item border rounded-lg overflow-hidden shadow-lg bg-brand-blue-2">
    <!-- <img :src="workImage" :alt="work.title" class="h-48 w-full object-cover" /> -->
    <img :src="work.image" :alt="work.title" class="h-48 w-full object-cover" loading="lazy" />

    <div class="p-4">
      <h3 class="text-xl font-bold mb-2">{{ work.title }}</h3>
      <p>{{ work.description }}</p>
      <a
        :href="work.link"
        target="_blank"
        class="inline-block mt-4 text-brand-blue-3 hover:underline"
      >
        view project
      </a>
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
  min-height: 300px;
  @apply transition-transform transform hover:scale-105 duration-300 ease-in-out;
}
</style>
