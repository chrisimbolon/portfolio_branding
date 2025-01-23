<template>
  <div class="flex flex-col gap-12">
    <h2 class="text-4xl font-extrabold text-center text-brand-blue-3 mb-4">Let’s get in touch!</h2>

    <!-- Contact Form Section -->
    <contact-form />
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
