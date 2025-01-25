<template>
  <section class="work-section bg-brand-white-1 py-5">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
      <h2 class="text-4xl font-extrabold text-center text-brand-blue-3">Works</h2>
      <h3 class="text-center text-brand-blue-2 leading-relaxed my-6">
        Here are some of my projects, where I’ve combined creativity and technical expertise to deliver practical, user-friendly solutions
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
          description: 'Share cool spots to eat, drink, or just have fun !',
          image: '/images/RandomdotsCard.png',
          tags: ['Node.js', 'Express', 'MongoDB', 'Bootstrap'],
        },
        {
          id: 2,
          title: 'Fullstack Pizza',
          description: 'a live demo how stacked pizza can be a fun thing',
          image: '/images/FullstackPizzaCard.png',
          tags: ['Javascript', 'HTML', 'CSS'],
        },
        {
          id: 3,
          title: 'Django Taekwondo Coaches',
          description: 'you can organize lots of Taekwondo Coaches in one web app',
          image: '/images/DjangoTaekwondoCard.png',
          tags: ['Python', 'Django', 'Bootstrap', 'MySql'],
        },
        {
          id: 4,
          title: 'Planet Wander',
          description: 'Mark the places in the world that you have visited',
          image: '/images/PlanetWanderCard.png',
          tags: ['Javascript', 'React', 'HTML', 'CSS'],
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