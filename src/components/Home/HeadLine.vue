<template>
  <main class="text-brand-blue-3 text-left">
    <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-brand-blue-3 mb-4">
      Hi, I'm Chris Simbolon
    </h1>

    <div class="mb-4 font-bold">
      <p>A passionate Full-Stack Web Developer and I'm crafting</p>
      <p>my journey into meaningful Digital Solutions with</p>
    </div>
    <p
      class="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-2 to-brand-accent-1 mb-4"
    >
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
