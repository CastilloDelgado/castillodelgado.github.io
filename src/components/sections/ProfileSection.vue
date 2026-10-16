<script setup>
import { ArrowDown, ArrowUpRight, Asterisk, Download } from '@lucide/vue'
import { profile } from '../../data/profile'

defineProps({ content: { type: Object, required: true } })
</script>

<template>
  <section id="perfil" class="hero container">
    <div class="eyebrow"><span class="dot"></span> FULL STACK DEVELOPER <span class="edition">CV / 2026</span></div>
    <h1>MARCO<br><span>CASTILLO</span><Asterisk class="hero-star" :stroke-width="1" aria-hidden="true" focusable="false" /></h1>
    <div class="hero-bottom">
      <p class="hero-intro">{{ content.intro[0] }}<br>{{ content.intro[1] }}<span>.</span></p>
      <div class="hero-copy">
        <p>{{ content.summary }}</p>
        <div class="actions">
          <a class="button primary" href="#experiencia">{{ content.explore }} <ArrowDown class="inline-icon" aria-hidden="true" focusable="false" /></a>
          <a class="text-link" :href="profile.cv" download>{{ content.download }} <Download class="inline-icon" aria-hidden="true" focusable="false" /></a>
        </div>
      </div>
    </div>
    <div class="hero-meta">
      <span>{{ content.location }}</span><span>FRONTEND · BACKEND · CLOUD</span>
      <a :href="profile.github" target="_blank" rel="noopener noreferrer">GITHUB <ArrowUpRight class="inline-icon" aria-hidden="true" focusable="false" /></a>
    </div>
  </section>
  <div class="stack-strip" :aria-label="content.stackLabel">
    <template v-for="(technology, index) in profile.stack" :key="technology"><i v-if="index" aria-hidden="true">/</i><span>{{ technology }}</span></template>
  </div>
</template>
