<template>
  <main class="text-brand-blue-3">
    <h1 class="text-4xl font-bold mb-4">Hi, I'm Chris Simbolon</h1>
    <div class="mb-4 font-bold">
      <p>A passionate Full-Stack Web Developer and I'm crafting</p>
      <p>my journey into meaningful Digital Solutions with</p>
    </div>
    <p class="text-2xl mt-2 text-brand-blue-3">
      <span>{{ currentPhrase }}</span>
    </p>
  </main>
</template>

<script>
export default {
  name: 'HeadLine',
  data() {
    return {
      phrases: ['Continuous Learning', 'Building with Purpose', 'Evolving Through Innovation'],
      currentPhraseIndex: 0,
    }
  },
  computed: {
    currentPhrase() {
      return this.phrases[this.currentPhraseIndex]
    },
  },
  mounted() {
    this.startRotation()
  },
  methods: {
    startRotation() {
      setInterval(() => {
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length
      }, 3000) // Change phrase every 3 seconds
    },
  },
}
</script>
