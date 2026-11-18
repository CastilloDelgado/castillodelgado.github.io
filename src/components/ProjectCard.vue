<script setup>
import { ArrowUpRight } from '@lucide/vue'
import TagList from './ui/TagList.vue'

defineProps({
  project: { type: Object, required: true },
  linkLabels: { type: Object, required: true },
})
</script>

<template>
  <article class="project">
    <div class="project-art" :class="`${project.id}-art`" aria-hidden="true">
      <div v-if="project.id === 'saldo'" class="saldo-preview">
        <small>{{ project.art.label }}</small>
        <div class="saldo-preview-title">{{ project.art.title[0] }}</div>
        <p>{{ project.art.title[1] }}</p>
        <div class="saldo-categories"><span v-for="category in project.art.categories" :key="category">{{ category }}</span></div>
      </div>
      <div v-else-if="project.art.domain" class="mock-browser">
        <div class="mock-top"><div class="mock-controls"><i v-for="dot in 3" :key="dot"></i></div><span>{{ project.art.domain }}</span></div>
        <div class="mock-body">
          <small>{{ project.art.label }}</small>
          <div class="mock-title">{{ project.art.title[0] }}<br>{{ project.art.title[1] }}</div>
          <div class="mock-lines"></div><div class="mock-pill">{{ project.art.stack }} <ArrowUpRight class="inline-icon" aria-hidden="true" focusable="false" /></div>
        </div>
      </div>
      <template v-else>
        <div class="light light-one"></div><div class="light light-two"></div>
        <div class="hue-label">{{ project.art.title[0] }}<br>{{ project.art.title[1] }}<span class="hue-track"><i></i><b></b><i></i><b></b><i></i></span></div>
      </template>
      <span class="art-number">{{ project.number }}</span>
    </div>
    <div class="project-info">
      <p class="eyebrow">{{ project.label }}</p>
      <div class="project-title-row">
        <h3>{{ project.title }}</h3>
        <a v-if="project.site" class="project-site-link" :href="project.site" target="_blank" rel="noopener noreferrer" :aria-label="`${linkLabels.site}: ${project.title}`">{{ project.art.domain }} <ArrowUpRight class="inline-icon" aria-hidden="true" focusable="false" /></a>
      </div>
      <p v-for="paragraph in project.paragraphs" :key="paragraph">{{ paragraph }}</p>
      <TagList v-if="project.tags.length" :tags="project.tags" />
      <div v-if="project.repository" class="project-links">
        <a v-if="project.repository" :href="project.repository" target="_blank" rel="noopener noreferrer">{{ linkLabels.repository }} <ArrowUpRight class="inline-icon" aria-hidden="true" focusable="false" /></a>
      </div>
    </div>
  </article>
</template>
