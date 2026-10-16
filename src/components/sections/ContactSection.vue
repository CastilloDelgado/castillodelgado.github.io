<script setup>
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
        <a class="contact-arrow" :href="`mailto:${profile.email}`" :aria-label="content.emailLabel">↗</a>
      </div>
      <div class="contact-links">
        <a :href="`mailto:${profile.email}`">{{ profile.email }} ↗</a>
        <a :href="profile.phoneHref">{{ profile.phone }} ↗</a>
        <a :href="profile.cv" download>{{ content.download }} ↓</a>
      </div>
      <footer>
        <span>© {{ year }} {{ profile.name }}</span>
        <a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a href="#perfil">{{ content.backToTop }} ↑</a>
      </footer>
    </div>
  </section>
</template>
