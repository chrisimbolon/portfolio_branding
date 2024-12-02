<template>
  <div class="contact-form-section py-10">
    <h2 class="text-2xl font-bold mb-6">Get In Touch</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block font-medium mb-2">Name</label>
        <input v-model="formData.name" type="text" class="w-full p-2 border rounded" required />
      </div>
      <div>
        <label class="block font-medium mb-2">Email</label>
        <input v-model="formData.email" type="email" class="w-full p-2 border rounded" required />
      </div>
      <div>
        <label class="block font-medium mb-2">Message</label>
        <textarea
          v-model="formData.message"
          class="w-full p-2 border rounded"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Send Message
      </button>
    </form>
    <p v-if="submissionMessage" class="mt-4 text-green-500">
      {{ submissionMessage }}
    </p>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc } from 'firebase/firestore'

export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      submissionMessage: '',
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const db = getFirestore()
        const messagesCollection = collection(db, 'messages')
        await addDoc(messagesCollection, this.formData)
        this.submissionMessage = 'Thank you for reaching out!'
        this.formData = { name: '', email: '', message: '' } // Reset form
      } catch (error) {
        console.error('Error submitting message:', error)
        this.submissionMessage = 'An error occurred. Please try again later.'
      }
    },
  },
}
</script>

<style scoped>
.contact-form-section {
  max-width: 600px;
  margin: 0 auto;
}
</style>
