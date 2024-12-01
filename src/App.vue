<template>
  <the-logo />

  <router-view />
</template>

<script>
import TheLogo from '@/components/shared/TheLogo.vue'

export default {
  name: 'App',
  components: { TheLogo },
  data() {
    return {
      showLoginModal: true,
      showBlogEntryForm: false,
    }
  },
}
</script>
