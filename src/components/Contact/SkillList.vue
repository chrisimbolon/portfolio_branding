<template>
  <div class="skills-section px-5 pb-5 border border-white bg-gradient-to-b from-[#D9DADB] to-[#e5e4e2]">
    <div class="card flex flex-col max-w-4xl mx-auto m-6 p-6 rounded-md shadow-lg">
      <h2 class="font-bold text-2xl text-brand-blue-3 text-center">Short background</h2>
      <p class="flex-grow p-4 text-brand-blue-2 leading-relaxed">
        I’ve always been fascinated by the intersection of creativity and technology. At the age of
        45, I made the bold decision to switch careers and turn my lifelong passion into a
        profession. Diving headfirst into the world of development, I’ve honed my skills in
        front-end and responsive design, back-end development, and database management. With a
        strong foundation in UI/UX design, version control, and problem-solving, I’m dedicated to
        creating innovative, user-centric solutions that bridge design and technology. I thrive on
        tackling complex challenges and delivering seamless, scalable applications that enhance user
        experiences.
      </p>
    </div>
    <h2 class="text-2xl font-bold mt-12 mb-5 text-center text-brand-blue-3">My skills</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 custom-lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <li
        v-for="(skill, index) in skills"
        :key="index"
        class="skill-item flex flex-col items-center border border-white bg-none shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow text-center"
        @mouseover="hoveredSkill = index"
        @mouseleave="hoveredSkill = null"
      >
        <div
          class="icon w-10 h-10 flex items-center justify-center rounded-full text-white text-xl mb-4"
          :style="{ backgroundColor: hoveredSkill === index ? hoverColors[index] : skill.color }"
        >
          <i :class="skill.icon"></i>
        </div>
        <div class="skill-info">
          <h4 class="font-bold text-brand-blue-3 mb-2">{{ skill.name }}</h4>
          <p class="text-sm text-brand-blue-2">{{ skill.description }}</p>
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
      hoveredSkill: null, 
      skills: [
        {
          name: 'Front-End and Responsive Design',
          description:
            'Crafting dynamic and visually engaging interfaces with seamless responsiveness across all devices',
          icon: 'fa-solid fa-laptop-code',
          color: '#E87F3C', // Default color
        },
        {
          name: 'Back-end Development',
          description:
            'Building robust server-side logic and APIs to power scalable and secure applications',
          icon: 'fa-solid fa-server',
          color: '#29AB87', // Default color
        },
        {
          name: 'Database Management',
          description:
            'Designing, optimizing, and managing databases for efficient data storage and retrieval',
          icon: 'fa-solid fa-database',
          color: '#826387', 
        },
        {
          name: 'UI/UX Design',
          description:
            'Creating intuitive, user-friendly designs that blend aesthetics with functionality.',
          icon: 'fa-solid fa-palette',
          color: '#548FC9', // Default color
        },
        {
          name: 'Version Control',
          description:
            'Streamlining collaboration and maintaining code integrity with Git and modern versioning tools.',
          icon: 'fa-solid fa-code-branch',
          color: '#E6648A', // Default color
        },
        {
          name: 'Problem Solving',
          description:
            'Breaking down challenges and delivering innovative, effective solutions in coding and beyond.',
          icon: 'fa-solid fa-lightbulb',
          color: '#FFD700', // Default color
        },
      ],
      hoverColors: [
        '#E86B1F', // Hover color for Front-End
        '#388E3C', // Hover color for Back-end
        '#6B5270', // Hover color for Database
        '#31669B', // Hover color for UI/UX
        '#DE3163', // Hover color for Version Control
        '#FFC107', // Hover color for Problem Solving
      ],
    };
  },
};

</script>

<style scoped>


.skill-item {
  align-items: center;
}
</style>
