<template>
  <div class="blog-list grid grid-cols-1 custom-lg:grid-cols-2 gap-6">
    <blog-item
      v-for="(blog, index) in blogs"
      :key="blog.id"
      :blog="blog"
      :data-test="`blog-item-${index}`"
      @click="handleBlogClick(blog)"
    />
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
  methods: {
    handleBlogClick(blog) {
      this.$emit('blog-click', blog) // Emiting the clicked blog
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
