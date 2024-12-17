<!-- BlogModal.vue -->
<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-btn" @click="$emit('close')">&times;</button>
      <img :src="blog.image" :alt="blog.title" class="h-40 w-full object-cover rounded" />
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  props: ['blog'],
  methods: {
    openModal(blog) {
      this.selectedBlog = blog
      this.showModal = true
      this.$nextTick(() => {
        gsap.fromTo(
          '.modal-content',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' },
        )
      })
    },
    closeModal() {
      gsap.to('.modal-content', {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          this.selectedBlog = null
          this.showModal = false
        },
      })
    },
  },
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  animation: slideIn 0.3s ease-out;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}
@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
