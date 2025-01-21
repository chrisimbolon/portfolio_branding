<template>
  <div class="flex flex-col gap-8">
    <contact-form />
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

<style scoped>

</style>