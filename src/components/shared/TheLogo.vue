<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full">
      <!-- <div class="mx-auto flex h-full flex-wrap border-b border-solid border-brand-gray-1 px-8"> -->
      <div class="mx-auto flex h-full flex-wrap px-8">
        <router-link :to="{ name: 'home' }" class="flex h-full items-center text-xl">
          <img src="@/assets/images/Logo.png" class="h-16" alt="brand of chris" />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheLogo',
}
</script>
