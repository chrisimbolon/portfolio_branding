<template>
  <section class="work-section bg-brand-white-1 py-5">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
      <h2 class="text-4xl font-extrabold text-center text-brand-blue-3">Works</h2>
      <h3 class="text-start text-brand-blue-2 font-semibold leading-relaxed my-6">
        Here are some of my projects, where I’ve combined creativity and technical expertise to deliver practical, user-friendly solutions.
      </h3>
      <work-list :works="works" />
    </div>
  </section>
</template>


<script>
import WorkList from '@/components/Works/WorkList.vue'
export default {
  name: 'WorkSection',
  components: {
    WorkList,
  },
  data() {
    return {
      works: [
        {
          id: 1,
          title: 'Randomdots.id',
          description: 'Discover and share hidden gems—cool places to eat, drink, and have a blast!',
          image: '/images/RandomdotsCard.webp',
          tags: ['Node.js', 'Express', 'MongoDB', 'Bootstrap'],
          link: 'https://randomdots.id',
        },
        {
          id: 2,
          title: 'Fullstack Pizza',
          description: 'A tasty experiment in stacking pizzas and stacking delicacy! 🍕💡',
          image: '/images/FullstackPizzaCard.webp',
          tags: ['Javascript', 'HTML', 'CSS'],
          link: 'https://chrisimbolon.dev/fullstack-pizza',
        },
        {
          id: 3,
          title: 'Django Taekwondo Coaches',
          description: 'Kickstart your coaching game! Organize Taekwondo coaches like a pro.',
          image: '/images/DjangoTaekwondoCard.webp',
          tags: ['Python', 'Django', 'Bootstrap', 'PostgreSQL'],
          link: 'https://taekwondo-coach.chrisimbolon.dev',
        },
        {
          id: 4,
          title: 'Planet Wander',
          description: 'Pin your travels, track your adventures, and relive your journeys!',
          image: '/images/PlanetWanderCard.webp',
          tags: ['Javascript', 'React', 'HTML', 'CSS'],
          link: 'https://chrisimbolon.dev/planetwander',
        },
      ],
    }
  },
}
</script>

<style scoped>
/* Refine centering specifically for WorkSection */
@media (max-width: 850px) and (min-width: 641px) {
  .work-section {
    display: flex; /* Use flex for vertical alignment */
    align-items: center; /* Center content vertically */
    justify-content: center; /* Optional: horizontally center */
    padding-top: 4rem; /* Add some padding at the top */
    padding-bottom: 4rem; /* Add some padding at the bottom */
  }

  .work-section .container {
    max-width: 800px; /* Prevent container from being too wide */
  }
}
</style>