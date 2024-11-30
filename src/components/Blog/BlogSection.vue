<template>
  <section class="blog-section">
    <h2 class="text-3xl font-bold">Blog</h2>
    <div v-if="!loading && !error">
      <p>BlogList component is loading...</p>
      <blog-list :blogs="blogs" />
    </div>

    <!-- <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <blog-list v-else :blogs="blogs" /> -->
  </section>
</template>

<script>
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import BlogList from '@/components/Blog/BlogList.vue'

export default {
  name: 'BlogSection',
  components: { BlogList },
  data() {
    return {
      blogs: [],
      loading: true,
      error: null,
    }
  },
  async mounted() {
    try {
      const querySnapshot = await getDocs(collection(db, 'blogs')) // Update "blogs" to your collection name
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      console.log('Fetched Blogs:', data) // Log the data to check what you get
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
