<script setup>
import SectionHeading from '../ui/SectionHeading.vue'

defineProps({ content: { type: Object, required: true } })
</script>

<template>
  <section class="education-section container section">
    <div>
      <SectionHeading :heading="content.heading" />
      <p class="school">Centro de Enseñanza Técnica Industrial<br><span>{{ content.schoolLocation }}</span></p>
    </div>
    <div class="education-list">
      <article v-for="course in content.courses" :key="course.date">
        <span class="date">{{ course.date }}</span><h3>{{ course.title }}</h3><p v-if="course.note">{{ course.note }}</p>
      </article>
      <div class="languages"><div v-for="language in content.languages" :key="language.name"><strong>{{ language.name }}</strong><span>{{ language.level }}</span></div></div>
    </div>
  </section>
</template>
