<script setup>
import SectionHeading from '../ui/SectionHeading.vue'
import ExperienceCard from '../ExperienceCard.vue'

defineProps({ content: { type: Object, required: true } })
</script>

<template>
  <section id="experiencia" class="section container">
    <SectionHeading :heading="content.heading" />
    <ExperienceCard v-for="(job, index) in content.jobs" :key="job.company" :job="job" :index="index" />
    <div class="additional">
      <span class="eyebrow">{{ content.additional.label }}</span>
      <div><h3>Flex <span>· {{ content.additional.title }}</span></h3><p v-for="paragraph in content.additional.paragraphs" :key="paragraph">{{ paragraph }}</p></div>
    </div>
  </section>
</template>
