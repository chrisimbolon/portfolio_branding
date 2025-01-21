<template>
  <div class="flex flex-col gap-12">
    <h2 class="text-3xl font-bold text-center mb-6">Contact Me</h2>

    <!-- Contact Information Section -->
    <div class="contact-info bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold text-gray-700 mb-4">Contact Information</h3>
      <div class="flex flex-col gap-4">
        <div class="icon-wrap flex items-center gap-3">
          <i class="fa-solid fa-phone text-blue-500 text-2xl"></i>
          <span class="icon-text text-gray-800 text-lg">+6281365825124</span>
        </div>
        <div class="icon-wrap flex items-center gap-3">
          <i class="fa-solid fa-envelope text-blue-500 text-2xl"></i>
          <span class="icon-text text-gray-800 text-lg">christyansimbolon@mail.com</span>
        </div>
      </div>
    </div>

    <!-- Contact Form Section -->
    <div class="contact-form-section">
      <h3 class="text-xl font-semibold text-gray-700 mb-4">Send Me a Message</h3>
      <contact-form />
    </div>

    <!-- Skills Section -->
    <skill-list />
  </div>
</template>
<script>
import ContactForm from './ContactForm.vue'
import SkillList from './SkillList.vue'
export default {
  name: 'ContactSection',
  components: { ContactForm, SkillList },
}
</script>

