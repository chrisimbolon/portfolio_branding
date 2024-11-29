<template>
  <section>
    <h2>My works</h2>
  </section>
</template>

<script>
import WorkList from '@/components/works/WorkList.vue'
export default {
  name: 'WorkSection',
  components: {
    WorkList,
  },
  data() {
    ;[
      {
        id: 1,
        title: 'Randomblur.id',
        description:
          'When you feel you like to tell others about some cool spot to eat, drink or just having fun',
        image: '@/assets/images',
      },
      {
        id: 2,
        title: 'Fullstack Pizza',
        description: 'a live demo how stacked pizza can be a fun thing',
        image: '@/assets/images',
      },
      {
        id: 3,
        title: 'Django Taekwondo Coaches',
        description: 'you can organize lots of Taekwondo Coaches in one web app',
        image: '@/assets/images',
      },
      {
        id: 4,
        title: 'Earth Explorer',
        description: 'Mark the places in the world that you have visited',
        image: '@/assets/images',
      },
    ]
  },
}
</script>
