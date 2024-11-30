<template>
  <section class="blog-section bg-gray-100 py-12">
    <h2 class="text-4xl font-bold text-center mb-8">Blog</h2>
    <blog-entry-form v-if="showBlogEntryForm" @add-blog="addBlogPost" />
    <blog-list :posts="posts" />
  </section>
</template>

<script>
import BlogList from '@/components/Blog/BlogList.vue'
import BlogEntryForm from '@/components/Blog/BlogEntryForm.vue'

export default {
  name: 'BlogSection',
  components: {
    BlogList,
    BlogEntryForm,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'My Journey into Web Development',
          excerpt: 'Sharing my story of diving into coding and building amazing projects.',
          image: '/public/blog-journey.jpg',
          link: '/blog/my-journey-into-web-development',
        },
      ],
    }
  },
  computed: {
    showBlogEntryForm() {
      return import.meta.env.VITE_SHOW_BLOG_ENTRY_FORM === 'true'
    },
  },
  methods: {
    addBlogPost(newPost) {
      newPost.id = this.posts.length + 1
      this.posts.push(newPost)
    },
  },
}
</script>
