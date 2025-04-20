<template>
  <div class="flex flex-col gap-10">
    <h2 class="text-4xl font-extrabold text-center text-brand-blue-3 mt-5 mb-4">Let’s get in touch!</h2>

    <!-- Contact Form Section -->
    <contact-form />
    <!-- Skills Section -->
    <skill-list />
    <built-upon />
  </div>
</template>
<script>
import ContactForm from './ContactForm.vue'
import SkillList from './SkillList.vue'
import BuiltUpon from './BuiltUpon.vue';
export default {
  name: 'ContactSection',
  components: { ContactForm, SkillList, BuiltUpon },
}
</script>
