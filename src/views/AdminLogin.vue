<template>
  <div class="login-container">
    <h1 class="text-xl font-bold mb-4">Admin Login</h1>
    <input v-model="email" type="email" placeholder="Email" class="block w-full p-2 border mb-3" />
    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="block w-full p-2 border mb-3"
    />
    <button @click="login" class="bg-blue-500 text-white py-2 px-4 rounded w-full">Login</button>
    <!-- <button @click="$emit('close')" class="mt-2 text-gray-500 hover:underline">Cancel</button> -->
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'AdminLogin',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      try {
        const auth = getAuth()
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password)
        const user = userCredential.user
        const token = await user.getIdTokenResult()

        if (token.claims.isAdmin) {
          alert('Welcome, Admin!')
          localStorage.setItem('userToken', token.token) // Save token for later use
          this.$router.push('/admin') // Redirect to a dashboard or protected route
        } else {
          alert('You are not authorized.')
        }
      } catch (error) {
        console.error('Login failed:', error)
        alert('Invalid credentials.')
      }
    },
  },
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
