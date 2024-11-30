<template>
  <div class="blog-entry-form bg-white shadow-md rounded-lg p-6">
    <h2 class="text-2xl font-bold mb-4">Add a New Blog Post</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          id="title"
          v-model="blog.title"
          class="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div class="mb-4">
        <label for="excerpt" class="block text-sm font-medium mb-1">Excerpt</label>
        <textarea
          id="excerpt"
          v-model="blog.excerpt"
          class="w-full border rounded px-3 py-2"
          required
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="image" class="block text-sm font-medium mb-1">Image URL</label>
        <input
          type="text"
          id="image"
          v-model="blog.image"
          class="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div class="mb-4">
        <label for="link" class="block text-sm font-medium mb-1">Blog Link</label>
        <input
          type="text"
          id="link"
          v-model="blog.link"
          class="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <button
        type="submit"
        class="bg-brand-blue-3 text-white px-4 py-2 rounded hover:bg-brand-blue-2 transition"
      >
        Add Blog Post
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'BlogEntryForm',
  data() {
    return {
      blog: {
        title: '',
        excerpt: '',
        image: '',
        link: '',
      },
    }
  },
  methods: {
    async submitForm() {
      // Emit the blog data to the parent component
      this.$emit('add-blog', { ...this.blog })
      // Reset the form
      this.blog = {
        title: '',
        excerpt: '',
        image: '',
        link: '',
      }
    },
  },
}
</script>

<style scoped>
.blog-entry-form {
  @apply max-w-lg mx-auto mt-8;
}
</style>
