<script setup>
import SectionHeading from '../ui/SectionHeading.vue'
import ProjectCard from '../ProjectCard.vue'

defineProps({ content: { type: Object, required: true } })
</script>

<template>
  <section id="proyectos" class="projects-section">
    <div class="container section">
      <SectionHeading :heading="content.heading" />
      <div class="project-grid"><ProjectCard v-for="project in content.items" :key="project.id" :project="project" /></div>
    </div>
  </section>
</template>
