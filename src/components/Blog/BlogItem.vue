<template>
  <div class="blog-item">
    <!-- Blog Image -->
    <img :src="blog.image" :alt="blog.title" class="h-40 w-full object-cover" loading="lazy" />

    <!-- Blog Content -->
    <div class="p-4">
      <!-- Blog Title -->
      <h3 class="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
        {{ blog.title }}
      </h3>

      <!-- Blog Excerpt -->
      <p class="text-gray-600 text-sm mb-4 line-clamp-3">
        {{ blog.excerpt }}
      </p>

      <!-- Read More Link -->
      <a href="#" class="text-blue-600 font-medium hover:underline text-sm"> Read More </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogItem',
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.blog-item {
  @apply w-[320px] max-w-sm mx-auto border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white;
}

.blog-item img {
  @apply rounded-t-lg;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
