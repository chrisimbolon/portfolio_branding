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
          <div class="container flex justify-center items-stretch">
            <div class="service">
              <span>
           
              </span>

              <p>
                {{ skill.description }}
              </p>
            </div>
           
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
        {
          name: 'Front-End and Responsive Design',
          description:
            'Crafting dynamic and visually engaging interfaces with seamless responsiveness across all devices',
          icon: 'fa-solid fa-laptop-code',
        },
        {
          name: 'Back-end Development',
          description:
            'Building robust server-side logic and APIs to power scalable and secure applications',
          icon: 'fa-solid fa-server',
        },
        {
          name: 'Database Management',
          description:
            'Designing, optimizing, and managing databases for efficient data storage and retrieval',
          icon: 'fa-solid fa-database',
        },
        {
          name: 'UI/UX Design',
          description:
            'Creating intuitive, user-friendly designs that blend aesthetics with functionality.',
          icon: 'fa-solid fa-palette',
        },
        {
          name: 'Version Control',
          description:
            'Streamlining collaboration and maintaining code integrity with Git and modern versioning tools.',
          icon: 'fas fa-paint-brush',
        },
        {
          name: 'Problem Solving',
          description:
            'Breaking down challenges and delivering innovative, effective solutions in coding and beyond.',
          icon: 'fa-solid fa-lightbulb',
        },
      ],
    }
  },
}
</script>

<style scoped>
.skill-item {
  align-items: center;
}

</style>
