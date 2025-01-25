<template>
  <section class="work-section min-h-screen bg-brand-white-1 py-5 ">
    <h2 class="text-4xl font-extrabold text-center text-brand-blue-3">Works</h2>
    <h3 class="flex-grow p-4 text-brand-blue-2 leading-relaxed">Here are some of my projects, where I’ve combined creativity and technical expertise to deliver practical, user-friendly solutions</h3>
    <work-list :works="works" />
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
.works-section {
  @apply px-6 py-12;
}
</style>
