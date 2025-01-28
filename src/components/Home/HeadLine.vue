<template>
  <main class="text-brand-blue-3 text-left">
    <!-- Title -->
    <h1
      ref="headlineTitle"
      class="text-3xl sm:text-5xl font-bold tracking-tight text-brand-blue-3 mb-0 opacity-0"
    >
      Hi, I'm Chris Simbolon
    </h1>

    <!-- Subtitle -->
    <div ref="headlineSubtitle" class="font-bold opacity-0 mb-10 mt-0">
      <p>A passionate Full-Stack Web Developer and I'm crafting</p>
      <p>my journey into meaningful Digital Solutions with</p>
    </div>

    <!-- Rotating Phrase with Shine Effect -->
    <p
      ref="headlinePhrase"
      class="text-2xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-2 to-brand-accent-1 leading-relaxed overflow-visible opacity-0 relative shine-text"
    >
      <span class="inline-block pb-[3px]">{{ currentPhrase }}</span>
    </p>
  </main>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'HeadLine',
  data() {
    return {
      phrases: ['Continuous Learning', 'Building with Purpose', 'Evolving Through Innovation'],
      currentPhraseIndex: 0,
    };
  },
  computed: {
    currentPhrase() {
      return this.phrases[this.currentPhraseIndex];
    },
  },
  mounted() {
    this.animateHeadline(); // Trigger headline animation on mount
    this.startRotation(); // Start phrase rotation
  },
  methods: {
    startRotation() {
      setInterval(() => {
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      }, 3000); // Change phrase every 3 seconds
    },
    animateHeadline() {
      const tl = gsap.timeline();

      tl.to(this.$refs.headlineTitle, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.2,
      })
        .to(
          this.$refs.headlineSubtitle,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
          },
          '-=0.5' // Overlap animation by 0.5s
        )
        .to(
          this.$refs.headlinePhrase,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
          },
          '-=0.3' // Overlap animation by 0.3s
        );
    },
  },
};
</script>

<style scoped>
/* Initial Offset for GSAP Animation */
h1,
div,
p {
  transform: translateY(30px); /* Initial offset for animation */
}

/* Shine Effect Styling */
.shine-text {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.shine-text::after {
  content: '';
  position: absolute;
  top: 0;
  left: -150%; /* Start far left */
  width: 200%; /* Large width to create the "streak" */
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent 20%,
    rgba(255, 255, 255, 0.8) 50%,
    transparent 80%
  );
  transform: skewX(-20deg); /* Diagonal shine */
  animation: shine-animation 2s infinite; /* Infinite shine animation */
}

/* Keyframes for Shine Effect */
@keyframes shine-animation {
  0% {
    left: -150%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 150%;
  }
}
</style>
