<script setup>
import { ArrowUp, ArrowUpRight, Download } from '@lucide/vue'
import { profile } from '../../data/profile'

defineProps({ content: { type: Object, required: true } })
const year = new Date().getFullYear()
</script>

<template>
  <section id="contacto" class="contact-section">
    <div class="container">
      <p class="eyebrow">{{ content.label }}</p>
      <div class="contact-heading">
        <h2>{{ content.title[0] }}<br>{{ content.title[1] }}<span>.</span></h2>
        <a class="contact-arrow" :href="`mailto:${profile.email}`" :aria-label="content.emailLabel"><ArrowUpRight :stroke-width="1.5" aria-hidden="true" focusable="false" /></a>
      </div>
      <div class="contact-links">
        <a :href="`mailto:${profile.email}`">{{ profile.email }} <ArrowUpRight class="inline-icon" aria-hidden="true" focusable="false" /></a>
        <a :href="profile.phoneHref">{{ profile.phone }} <ArrowUpRight class="inline-icon" aria-hidden="true" focusable="false" /></a>
        <a :href="profile.cv" download>{{ content.download }} <Download class="inline-icon" aria-hidden="true" focusable="false" /></a>
      </div>
      <footer>
        <span>© {{ year }} {{ profile.name }}</span>
        <a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight class="inline-icon" aria-hidden="true" focusable="false" /></a>
        <a href="#perfil">{{ content.backToTop }} <ArrowUp class="inline-icon" aria-hidden="true" focusable="false" /></a>
      </footer>
    </div>
  </section>
</template>
