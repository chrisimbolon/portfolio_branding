<template>
  <!-- <div class="works-list wrapper flex flex-col justify-center gap-5"> -->

  <div class="works-list grid grid-cols-1 gap-6">
    <work-item v-for="work in works" :key="work.id" :work="work" />
  </div>
</template>

<script>
import WorkItem from '@/components/Works/WorkItem.vue'

export default {
  name: 'WorkList',
  components: { WorkItem },
  props: {
    works: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.works-list {
  @apply flex flex-wrap justify-center items-start gap-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
  @apply mt-8;
}
</style>
