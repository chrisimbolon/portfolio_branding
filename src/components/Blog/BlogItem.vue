<template>
  <div 
    class="blog-item"
    :data-test="`blog-item-${blog.id}`"
    @click="$emit('click', blog)"
  >
    <!-- Blog Image -->
    <img :src="blog.image" :alt="blog.title" class="h-44 w-full object-cover" loading="lazy" />

    <!-- Blog Content -->
    <div class="p-4">
      <!-- Blog Title -->
      <h3 class="text-base font-semibold text-brand-blue-2 mb-2 line-clamp-2">
        {{ blog.title }}
      </h3>

      <!-- Blog Excerpt -->
      <p class="text-brand-grey-1 text-sm mb-4 line-clamp-3">
        {{ blog.excerpt }}
      </p>

      <!-- Published Date & Read More -->
      <div class="flex justify-between items-center">
        <!-- Published Date -->
        <p class="text-gray-500 text-xs italic">
          Posted on: {{ formattedCreatedAt }}
        </p>       
        <!-- Read More Link (Prevent default click behavior) -->
        <a
          href="#"
          class="text-brand-blue-2 font-medium hover:underline text-sm"
          @click.prevent
        >
          Read More
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogItem',
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedCreatedAt() {
      return this.blog.createdAt ? this.blog.createdAt.toDate().toLocaleDateString() : 'No date available';
    },
  },
};
</script>


<style scoped>
.blog-item {
  @apply w-[330px] max-w-sm mx-auto border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white;
  cursor: pointer; /* Add pointer cursor to indicate it's clickable */
}

.blog-item img {
  @apply rounded-t-lg;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
