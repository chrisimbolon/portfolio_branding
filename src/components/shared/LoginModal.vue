<template>
  <div
    v-if="show"
    class="modal bg-gray-800 bg-opacity-50 fixed inset-0 flex items-center justify-center"
  >
    <div class="bg-white rounded-lg p-6 w-80">
      <h2 class="text-lg font-bold mb-4">Admin Login</h2>
      <input
        type="email"
        v-model="email"
        placeholder="Email"
        class="w-full p-2 border rounded mb-4"
      />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        class="w-full p-2 border rounded mb-4"
      />
      <button @click="login" class="w-full bg-blue-500 text-white py-2 rounded">Login</button>
      <button @click="$emit('close')" class="mt-2 text-gray-500 hover:underline">Cancel</button>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'LoginModal',
  props: {
    show: Boolean,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$emit('close')
          this.$emit('show-blog-entry-form')
        })
        .catch((error) => {
          console.error('Login failed:', error.message)
          alert('Login failed!')
        })
    },
  },
}
</script>

<style scoped>
.modal {
  z-index: 1000;
}
</style>
