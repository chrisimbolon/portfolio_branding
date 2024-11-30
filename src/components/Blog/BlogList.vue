<template>
  <div class="blog-list grid grid-cols-1 md:grid-cols-2 gap-6">
    <blog-item v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import BlogItem from '@/components/Blog/BlogItem.vue'

export default {
  name: 'BlogList',
  components: {
    BlogItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.blog-list {
  @apply mt-8;
}
</style>
