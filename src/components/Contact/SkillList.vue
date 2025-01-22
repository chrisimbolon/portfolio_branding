<template>
  <div class="skills-section py-10">
    <div class="card flex flex-col max-w-4xl mx-auto m-8 p-8 bg-none rounded-md shadow-lg">
      <h2 class="font-bold text-2xl text-gray-800">Short background</h2>
      <p class="flex-grow mt-4 text-gray-700 leading-relaxed">
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
    <h2 class="text-3xl font-bold mb-8 text-center text-gray-800">My Skills</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <li
        v-for="(skill, index) in skills"
        :key="index"
        class="skill-item flex flex-col items-center bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow text-center"
      >
        <div
          class="icon w-16 h-16 flex items-center justify-center bg-blue-500 rounded-full text-white text-2xl mb-4"
        >
          <i :class="skill.icon"></i>
        </div>
        <div class="skill-info">
          <h3 class="font-semibold text-lg text-gray-700 mb-2">{{ skill.name }}</h3>
          <p class="text-sm text-gray-600">{{ skill.description }}</p>
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
          icon: 'fa-solid fa-code-branch',
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
.skill-item:hover .icon {
  background-color: #2563eb; /* Slightly darker blue for hover */
}

.skill-item {
  align-items: center;
}
</style>
