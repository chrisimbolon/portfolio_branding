<template>
  <div class="blog-item border p-4 rounded-lg shadow hover:shadow-lg">
    <img :src="blog.image" :alt="blog.title" class="h-40 w-full object-cover rounded" />
    <h3 class="mt-4 text-xl font-bold">{{ blog.title }}</h3>
    <p class="mt-2 text-gray-600">{{ blog.excerpt }}</p>
    <p class="mt-6 text-gray-600">{{ blog.content }}</p>

    <!-- <router-link :to="blog.content" class="text-blue-600 hover:underline mt-4 inline-block">
      Read More
    </router-link> -->
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
