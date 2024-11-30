<template>
  <div class="blog-list grid grid-cols-1 md:grid-cols-2 gap-6">
    <blog-item v-for="blog in blogs" :key="blog.id" :blog="blog" />
  </div>
</template>

<script>
import BlogItem from '@/components/Blog/BlogItem.vue'

export default {
  name: 'BlogList',
  components: { BlogItem },
  props: {
    blogs: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log('Blogs passed to BlogList:', this.blogs)
  },
}
</script>

<style scoped>
.blog-list {
  @apply mt-8;
}
</style>
