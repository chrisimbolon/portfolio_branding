<template>
  <div class="blog-item bg-white shadow-lg rounded-lg overflow-hidden">
    <img :src="post.image" alt="post.title" class="h-48 w-full object-cover" />
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
      <p class="text-gray-600">{{ post.excerpt }}</p>
      <a :href="post.link" class="inline-block mt-4 text-brand-blue-3 hover:underline">
        Read more →
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogItem',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.blog-item {
  @apply transition-transform transform hover:scale-105 duration-300 ease-in-out;
}
</style>
