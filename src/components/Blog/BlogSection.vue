<template>
  <section class="blog-section min-h-screen py-5">
    <h2 class="text-3xl font-bold">Blog</h2>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <blog-list :blogs="blogs" @blog-click="openModal" />
    </div>

    <!-- Pass showModal and selectedBlog to BlogModal -->
    <blog-modal
      :show="showModal"
      :blog="selectedBlog"
      @close="closeModal"
    />
  </section>
</template>

<script>
import BlogModal from '@/components/Blog/BlogModal.vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import BlogList from '@/components/Blog/BlogList.vue'

export default {
  name: 'BlogSection',
  components: { BlogList, BlogModal },
  data() {
    return {
      blogs: [],
      loading: true,
      error: null,
      showModal: false,
      selectedBlog: null,
    }
  },
  methods: {
    openModal(blog) {
      this.selectedBlog = blog
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
      this.selectedBlog = null
    },
  },
  async mounted() {
    try {
      const querySnapshot = await getDocs(collection(db, 'blogs'))
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      console.log('Fetched Blogs:', data)
      this.blogs = data
    } catch (err) {
      console.error('Error fetching blogs:', err)
      this.error = 'Failed to load blog posts.'
    } finally {
      this.loading = false
    }
  },
}
</script>
