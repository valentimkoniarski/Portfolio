<template>
  <div>
    <h5 class="text-h5 text-uppercase text-center text-deep-purple-accent-1">Projects</h5>
    <div class="projects__card mt-10">
      <project-card
        v-for="(project, i) in projects"
        :key="i"
        :ariaLabel="project.ariaLabel"
        :title="project.title"
        :description="project.description"
        :externalLink="project.externalLink"
        :technologies="project.technologies"
        class="project-card"
      ></project-card>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '@/components/projects/ProjectCard.vue'

const projects = [
  {
    ariaLabel: 'Link to the project',
    title: 'Portfolio',
    description: 'My personal portfolio',
    technologies: ['Vue', 'Vite', 'TypeScript'],
    externalLink: 'https://github.com/valentimkoniarski/portfolio'
  },
  {
    ariaLabel: 'Link to the project',
    title: 'Project Transfer',
    description: 'Project Transfer using Spring boot and Kafka',
    technologies: ['Java', 'Spring boot', 'JUnit', 'Kafka', 'PostgreSQL', 'Spring JPA'],
    externalLink: 'https://github.com/valentimkoniarski/transferencia-models'
  }
]
</script>

<style scoped>

.projects__card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>
