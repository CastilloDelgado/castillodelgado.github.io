<script setup>
import TagList from './ui/TagList.vue'

defineProps({ job: { type: Object, required: true }, index: { type: Number, required: true } })
</script>

<template>
  <article class="job">
    <div class="job-side">
      <span class="date">{{ job.date }}</span><h3>{{ job.company }}</h3><p>{{ job.role }}</p>
      <span class="job-index">/ {{ String(index + 1).padStart(2, '0') }}</span>
    </div>
    <div class="job-content">
      <h4>{{ job.intro }}</h4><p>{{ job.summary }}</p>
      <TagList :tags="job.tags" />
      <div class="job-details"><div v-for="[title, text] in job.details" :key="title"><h5>{{ title }}</h5><p>{{ text }}</p></div></div>
    </div>
  </article>
</template>
