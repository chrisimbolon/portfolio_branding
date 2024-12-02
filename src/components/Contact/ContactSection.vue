<template>
  <skill-list />
  <contact-form />
</template>
<script>
import ContactForm from './ContactForm.vue'
import SkillList from './SkillList.vue'
export default {
  name: 'ContactSection',
  components: { ContactForm, SkillList },
}
</script>
