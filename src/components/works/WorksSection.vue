<template>
  <section class="work-section relative h-screen bg-gray-200">
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
          description:
            'When you feel you like to tell others about some cool spot to eat, drink or just having fun',
          image: '/images/randomdots.png',
        },
        {
          id: 2,
          title: 'Fullstack Pizza',
          description: 'a live demo how stacked pizza can be a fun thing',
          image: '/images/fullstack-pizza.png',
        },
        {
          id: 3,
          title: 'Django Taekwondo Coaches',
          description: 'you can organize lots of Taekwondo Coaches in one web app',
          image: '/images/taekwondo-coaches.png',
        },
        {
          id: 4,
          title: 'Earth Explorer',
          description: 'Mark the places in the world that you have visited',
          image: '/images/earth-explorer.png',
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
