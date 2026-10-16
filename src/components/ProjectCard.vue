<script setup>
import TagList from './ui/TagList.vue'

defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <article class="project">
    <div class="project-art" :class="`${project.id}-art`" aria-hidden="true">
      <div v-if="project.id === 'blog'" class="mock-browser">
        <div class="mock-top">● ● ● <span>personal.blog</span></div>
        <div class="mock-body">
          <small>{{ project.art.label }}</small>
          <div class="mock-title">{{ project.art.title[0] }}<br>{{ project.art.title[1] }}</div>
          <div class="mock-lines"></div><div class="mock-pill">Laravel + Vue.js ↗</div>
        </div>
      </div>
      <template v-else>
        <div class="light light-one"></div><div class="light light-two"></div>
        <div class="hue-label">{{ project.art.title[0] }}<br>{{ project.art.title[1] }}<span>● ━━━ ● ━━━ ●</span></div>
      </template>
      <span class="art-number">{{ project.number }}</span>
    </div>
    <div class="project-info">
      <p class="eyebrow">{{ project.label }}</p><h3>{{ project.title }}</h3>
      <p v-for="paragraph in project.paragraphs" :key="paragraph">{{ paragraph }}</p>
      <TagList :tags="project.tags" />
    </div>
  </article>
</template>
