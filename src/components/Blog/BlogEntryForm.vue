<template>
  <div class="blog-entry-form bg-white shadow-md rounded-lg p-6">
    <form @submit.prevent="submitBlogPost">
      <!-- Title -->
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

      <!-- Excerpt -->
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

      <!-- Content -->
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

      <!-- Image Upload -->
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" for="image">Image</label>
        <input type="file" @change="handleFileChange" />
        <p v-if="uploadProgress !== null">Uploading: {{ uploadProgress }}%</p>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isUploading"
        class="bg-brand-blue-3 text-white px-4 rounded hover:bg-brand-blue-2 transition"
      >
        {{ isUploading ? 'Posting...' : 'Post Blog' }}
      </button>

      <!-- Success/Error Messages -->
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'

export default {
  name: 'BlogEntryForm',
  data() {
    return {
      title: '',
      excerpt: '',
      content: '',
      imageFile: null, // Holds the selected file
      imageUrl: '', // Stores the uploaded image URL
      uploadProgress: null,
      successMessage: '',
      errorMessage: '',
      isUploading: false,
    }
  },
  methods: {
    // Handle File Selection
    handleFileChange(event) {
      this.imageFile = event.target.files[0]
    },

    // Upload Image to Cloudinary
    async uploadImageToCloudinary() {
      if (!this.imageFile) return

      this.isUploading = true
      this.uploadProgress = 0

      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
      const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

      const formData = new FormData()
      formData.append('file', this.imageFile)
      formData.append('upload_preset', uploadPreset)

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData,
          {
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total,
              )
              this.uploadProgress = percentCompleted
            },
          },
        )

        this.imageUrl = response.data.secure_url
        this.uploadProgress = null
        this.isUploading = false
      } catch (error) {
        console.error('Error uploading image:', error)
        this.errorMessage = 'Failed to upload image. Please try again.'
        this.isUploading = false
      }
    },

    // Submit Blog Post
    async submitBlogPost() {
      this.successMessage = ''
      this.errorMessage = ''

      try {
        // Step 1: Upload the image to Cloudinary
        if (this.imageFile) {
          await this.uploadImageToCloudinary()
        }

        // Step 2: Prepare the blog post data
        const newBlog = {
          title: this.title,
          excerpt: this.excerpt,
          content: this.content,
          image: this.imageUrl, // Image URL from Cloudinary
          createdAt: serverTimestamp(),
        }

        // Step 3: Save blog post to Firestore
        const docRef = await addDoc(collection(db, 'blogs'), newBlog)
        this.successMessage = `Blog posted successfully! ID: ${docRef.id}`
        this.clearForm()
      } catch (error) {
        console.error('Error adding document:', error)
        this.errorMessage = 'Failed to post blog. Please try again.'
      }
    },

    // Clear Form
    clearForm() {
      this.title = ''
      this.excerpt = ''
      this.content = ''
      this.imageFile = null
      this.imageUrl = ''
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
