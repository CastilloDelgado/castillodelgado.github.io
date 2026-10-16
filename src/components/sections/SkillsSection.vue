<script setup>
import SectionHeading from '../ui/SectionHeading.vue'
import TagList from '../ui/TagList.vue'

defineProps({ content: { type: Object, required: true } })
</script>

<template>
  <section id="conocimientos" class="section container">
    <SectionHeading :heading="content.heading" />
    <div class="skills-grid">
      <article v-for="skill in content.items" :key="skill.number" class="skill">
        <span class="skill-number">{{ skill.number }}</span><h3>{{ skill.title }}</h3><p>{{ skill.text }}</p>
        <TagList :tags="skill.tags" />
      </article>
    </div>
  </section>
</template>
