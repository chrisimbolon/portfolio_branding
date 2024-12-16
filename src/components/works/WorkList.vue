<template>
  <div class="works-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
  @apply mt-8;
}
</style>
