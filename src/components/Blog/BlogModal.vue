<template>
  <teleport to="body">
    <!-- No need for a separate `show` check, use `v-if` to render the modal -->
    <div v-if="show" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">&times;</button>
        <h2 class="modal-title">{{ blog.title }}</h2>
        <img :src="blog.image" :alt="blog.title" class="modal-image" />
        <p class="modal-text">{{ blog.content }}</p>
      </div>
    </div>
  </teleport>
</template>

<script>
import { gsap } from 'gsap'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default {
  props: {
    blog: Object,
    show: Boolean,
  },
  watch: {
    show(newVal) {
      const modalOverlay = document.querySelector('.modal-overlay')
      if (newVal) {
        disableBodyScroll(modalOverlay) // Lock body scroll
        // GSAP Animation
        gsap.fromTo(
          '.modal-content',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' },
        )
      } else {
        enableBodyScroll(modalOverlay) // Unlock body scroll
      }
    },
  },
  methods: {
    closeModal() {
      this.$emit('close') // Emit the close event to the parent
    },
  },
}
</script>

<style scoped>
/* Overlay */
.modal-overlay {
  position: fixed;
  inset: 0; /* Shorthand for top: 0; left: 0; right: 0; bottom: 0 */
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto; /* Allow scrolling if modal content overflows */
  padding: 1rem; /* Add padding for better spacing */
}

/* Modal Content */
.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  position: relative; /* For the close button */
  max-height: 90vh; /* Prevent the modal from overflowing vertically */
  overflow-y: auto; /* Scroll inside the modal if content exceeds */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Close Button */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

/* Title Styling */
.modal-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

/* Image Styling */
.modal-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 8px;
}

/* Text Content */
.modal-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}

/* Responsive Adjustments */
@media (max-width: 850px) {
  .modal-overlay {
    justify-content: flex-start; /* Align content to the top */
    padding-top: 2rem; /* Add spacing at the top */
  }

  .modal-content {
    max-width: 100%; /* Take up full width on smaller screens */
    border-radius: 0; /* Remove border radius for seamless stacking */
    padding: 1.5rem;
  }

  .close-btn {
    font-size: 1.5rem; /* Slightly smaller for mobile */
  }
}
</style>
