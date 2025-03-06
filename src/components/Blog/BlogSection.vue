<template>
  <section class="blog-section min-h-screen py-5">
    <h2 class="text-4xl font-extrabold text-center text-brand-blue-3 mt-5 mb-4">Blog</h2>
    <h3 class="text-center font-semibold text-brand-blue-2 leading-relaxed my-6">
      All the articles I've posted.
      </h3>

    <div v-if="loading" data-test="loading">Loading...</div>
    <div v-else-if="error" data-test="error-message">{{ error }}</div>
    <div v-else-if="blogs.length === 0" data-test="no-blogs">No blogs found</div>
    <div v-else>
      <blog-list :blogs="blogs" @blog-click="openModal" />
    </div>

    
    <blog-modal
      :show="showModal"
      :blog="selectedBlog"
      @close="closeModal"
    />
  </section>
</template>


<script>
import BlogModal from '@/components/Blog/BlogModal.vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import BlogList from '@/components/Blog/BlogList.vue';
import { format } from 'date-fns'; // Import date-fns for formatting

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
    };
  },
  methods: {
    openModal(blog) {
      this.selectedBlog = blog;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedBlog = null;
    },
    formatDate(timestamp) {
      // Ensure the timestamp is a Firestore Timestamp object
      return format(timestamp.toDate(), 'dd-MM-yyyy HH:mm');
    },
  },
  async mounted() {
    try {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const data = querySnapshot.docs.map((doc) => {
        const blog = { id: doc.id, ...doc.data() };
        // Add a formatted date field
        blog.formattedCreatedAt = blog.createdAt ? this.formatDate(blog.createdAt) : "No date available";
        return blog;
      });
      console.log('Fetched Blogs:', data);
      this.blogs = data;
    } catch (err) {
      console.error('Error fetching blogs:', err);
      this.error = 'Failed to load blog posts.';
    } finally {
      this.loading = false;
    }
  },
};
</script>
