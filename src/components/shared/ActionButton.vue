<template>
  <button :class="buttonClass">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    btnText: {
      type: String,
      required: true,
    },
    styleType: {
      type: String,
      required: false,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary'].includes(value)
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.styleType]: true,
      }
    },
  },
}
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}
.primary {
  @apply rounded bg-brand-blue-1 text-white hover:shadow-blue inline;
}
.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
</style>
