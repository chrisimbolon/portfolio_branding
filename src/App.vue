<template>
  <the-logo />

  <login-modal
    :show="showLoginModal"
    @close="showLoginModal = false"
    @show-blog-entry-form="showBlogEntryForm = true"
  />
  <router-view
    :show-blog-entry-form="showBlogEntryForm"
    @hide-blog-entry-form="showBlogEntryForm = false"
  />
</template>

<script>
import TheLogo from '@/components/shared/TheLogo.vue'
import LoginModal from '@/components/shared/LoginModal.vue'

export default {
  name: 'App',
  components: { TheLogo, LoginModal },
  data() {
    return {
      showLoginModal: false,
      showBlogEntryForm: false,
    }
  },
}
</script>

<!-- <template>
  <the-logo />

  <router-view />
</template>

<script>
import TheLogo from '@/components/shared/TheLogo.vue'

export default {
  name: 'App',
  components: { TheLogo },
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style> -->
