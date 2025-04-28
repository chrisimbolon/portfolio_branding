<template>
  <teleport to="body">
    <!-- Use v-if to conditionally render the modal -->
    <div v-if="show" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">&times;</button>
        <h1 class="modal-title">{{ blog.title }}</h1>
        <img :src="blog.image" :alt="blog.title" class="modal-image" />
        <!-- Render blog content with line breaks properly -->
        <p class="modal-text font-normal" v-html="formattedContent"></p>
      </div>
    </div>
  </teleport>
</template>

<script>
import { marked } from 'marked';
import { gsap } from 'gsap';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default {
  props: {
    blog: Object,
    show: Boolean,
  },
  computed: {
    formattedContent() {
      if (!this.blog || !this.blog.content) return '';

      // Using Marked.js to convert Markdown to HTML
      return marked(this.blog.content, {
        breaks: true, // Converting \n to <br>
        gfm: true,    // Enabling GitHub-flavored Markdown (tables, strikethrough, etc.)
      });
    },
  },
  watch: {
    show(newVal) {
      const modalOverlay = document.querySelector('.modal-overlay');
      if (newVal) {
        disableBodyScroll(modalOverlay); // Lock body scroll
        gsap.fromTo(
          '.modal-content',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' },
        );
      } else {
        enableBodyScroll(modalOverlay); // Unlock body scroll
      }
    },
  },
  methods: {
    closeModal() {
      console.log("Close button clicked! Emitting 'close' event."); 
      this.$emit('close'); // Emitting the close event to the parent
    },
  },
};
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
  color: #264F79;
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

 ::v-deep(pre) {
  background: #264F79;
  padding: 0.5rem 0.5rem;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  color: #fff;
  margin: 1rem 0;
}

::v-deep(code) {
  font-family: 'Courier New', Courier, monospace;
  background: #264F79;
  padding: 0.5rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #EFF4FA;
}

::v-deep(h2) {
  font-weight: bold;
  font-size: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  color: #31669B;
}

::v-deep(p) {
  font-size: 1rem;
  line-height: 1.6;
  color: #536878;
  margin: 0.875rem 0;
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

  .modal-title {
    font-size: 1.25rem; /* Slightly smaller font for smaller screens */
    text-align: center; /* Optional: Center-align the text */
    margin-bottom: 0.75rem; /* Adjust spacing if necessary */
  }

  ::v-deep(h2) {
    font-size: 1rem;
  }

  ::v-deep(p) {
    font-size: 0.9375rem;
  }

  .close-btn {
    font-size: 1.5rem; /* Slightly smaller for mobile */
  }
}
</style>
