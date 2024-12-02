<template>
  <div class="skills-section py-10">
    <h2 class="text-2xl font-bold mb-6">My Skills</h2>
    <ul class="grid grid-cols-2 gap-6">
      <li v-for="(skill, index) in skills" :key="index" class="skill-item flex items-center gap-4">
        <div
          class="icon w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full text-white"
        >
          <i :class="skill.icon"></i>
        </div>
        <div class="skill-info flex-1">
          <h3 class="font-medium">{{ skill.name }}</h3>
          <div class="progress-bar bg-gray-300 rounded-full h-2 mt-2">
            <div
              class="bg-blue-500 h-2 rounded-full"
              :style="{ width: skill.proficiency + '%' }"
            ></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SkillList',
  data() {
    return {
      skills: [
        { name: 'JavaScript', proficiency: 90, icon: 'fab fa-js-square' },
        { name: 'Vue.js', proficiency: 85, icon: 'fab fa-vuejs' },
        { name: 'HTML', proficiency: 95, icon: 'fab fa-html5' },
        { name: 'CSS', proficiency: 80, icon: 'fab fa-css3-alt' },
        { name: 'Tailwind CSS', proficiency: 75, icon: 'fas fa-paint-brush' },
        { name: 'Firebase', proficiency: 70, icon: 'fas fa-fire' },
      ],
    }
  },
}
</script>

<style scoped>
.skill-item {
  align-items: center;
}
.progress-bar div {
  transition: width 0.3s ease-in-out;
}
</style>
