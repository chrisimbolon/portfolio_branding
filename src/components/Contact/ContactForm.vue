<template>
  <div class="contact-form-section py-8">
    <div class="flex flex-col gap-4 mb-5 text-gray-700 ">
      <div class="flex items-center gap-3">
        <h3 class="text-lg font-medium">Reach out via</h3>
        <div class="icon-wrap flex items-center gap-2">
          <i class="fa-solid fa-envelope text-brand-blue-2 text-2xl"></i>
          <a
            href="mailto:christyansimbolon@mail.com"
            class="text-brand-blue-2 hover:underline text-lg font-semibold"
          >
            christyansimbolon@mail.com
          </a>
        </div>
      </div>
      <h3 class="text-lg font-medium">Or drop a message below</h3>
    </div>
    <div class="max-w-lg mx-auto border border-gray-400 bg-none shadow-lg rounded-lg p-6">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label class="block font-medium mb-2 text-gray-700">Name</label>
          <input
            v-model="formData.name"
            type="text"
            class="w-full p-3 border border-gray-400 rounded-lg bg-gray-200 focus:ring focus:ring-blue-300"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label class="block font-medium mb-2 text-gray-700">Email</label>
          <input
            v-model="formData.email"
            type="email"
            class="w-full p-3 border border-gray-400 rounded-lg bg-gray-200 focus:ring focus:ring-blue-300"
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label class="block font-medium mb-2 text-gray-700">Message</label>
          <textarea
            v-model="formData.message"
            class="w-full p-3 border border-gray-400 rounded-lg bg-gray-200 focus:ring focus:ring-blue-300"
            rows="5"
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-brand-accent-1 text-white py-3 rounded-lg hover:shadow-blue transition-colors"
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
  /* background-color: #f9f9f9; */
  max-width: 600px;
  margin: 0 auto;
}
</style>
