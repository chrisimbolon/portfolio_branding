<template>
  <div class="blog-entry-form bg-white shadow-md rounded-lg p-6">
    <form @submit.prevent="submitBlogPost">
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium mb-1">Title</label>
        <input
          v-model="title"
          id="title"
          required
          placeholder="Enter blog title"
          class="w-full border rounded px-3 py-2"
        />
      </div>
      <div class="mb-4">
        <label for="excerpt" class="block text-sm font-medium mb-1">Excerpt</label>
        <textarea
          class="w-full border rounded px-3 py-2"
          v-model="excerpt"
          id="excerpt"
          required
          placeholder="Enter blog excerpt"
        ></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" for="content">Content</label>
        <textarea
          class="w-full border rounded px-3 py-2"
          v-model="content"
          id="content"
          required
          placeholder="Enter full blog content"
        ></textarea>
      </div>
      <div>
        <label for="image">Image URL</label>
        <input v-model="image" id="image" placeholder="Enter image URL" />
      </div>
      <button
        type="submit"
        class="bg-brand-blue-3 text-white px-4 rounded hover:bg-brand-blue-2 transition"
      >
        Post Blog
      </button>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'

export default {
  name: 'BlogEntryForm',
  data() {
    return {
      title: '',
      excerpt: '',
      content: '',
      image: '',
      successMessage: '',
      errorMessage: '',
    }
  },
  methods: {
    async submitBlogPost() {
      this.successMessage = ''
      this.errorMessage = ''

      const newBlog = {
        title: this.title,
        excerpt: this.excerpt,
        content: this.content,
        image: this.image,
        createdAt: serverTimestamp(), // Add timestamp
      }

      try {
        const docRef = await addDoc(collection(db, 'blogs'), newBlog)
        this.successMessage = `Blog posted successfully! ID: ${docRef.id}`
        this.clearForm()
      } catch (error) {
        console.error('Error adding document:', error)
        this.errorMessage = 'Failed to post blog. Please try again.'
      }
    },
    clearForm() {
      this.title = ''
      this.excerpt = ''
      this.content = ''
      this.image = ''
    },
  },
}
</script>

<style scoped>
.blog-entry-form {
  @apply max-w-lg mx-auto mt-8;
}
.success {
  color: green;
}
.error {
  color: red;
}
</style>
