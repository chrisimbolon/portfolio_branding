<template>
  <div class="contact-form-section py-10">
    <h2 class="text-3xl font-bold mb-8 text-center text-gray-800">Get In Touch</h2>
    <div class="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label class="block font-medium mb-2 text-gray-700">Name</label>
          <input
            v-model="formData.name"
            type="text"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label class="block font-medium mb-2 text-gray-700">Email</label>
          <input
            v-model="formData.email"
            type="email"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label class="block font-medium mb-2 text-gray-700">Message</label>
          <textarea
            v-model="formData.message"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            rows="5"
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </form>
      <p v-if="submissionMessage" class="mt-4 text-center text-green-600 font-medium">
        {{ submissionMessage }}
      </p>
    </div>
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
  background-color: #f9f9f9;
  max-width: 600px;
  /* margin: 0 auto; */
}
</style>
