<template>
  <div
    class="main-nav text-brand-blue-2 mx-auto px-8 h-10 bg-none shadow-lg rounded-md flex items-center justify-center"
  >
    <nav>
      <ul class="flex space-x-8">
        <li v-for="menuItem in menuItems" :key="menuItem.text">
          <router-link
            :to="menuItem.url"
            class="text-brand-gray-1 font-semibold hover:text-brand-blue-1 transition duration-300"
          >
            {{ menuItem.text }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      menuItems: [
        { text: 'Home', url: '/#home' },
        { text: 'Works', url: '/#works' },
        { text: 'Blog', url: '/#blog' },
        { text: 'Contact', url: '/#contact' },
      ],
    }
  },
}
</script>

<style scoped>
.main-nav {
  max-width: 800px;
}
</style>
