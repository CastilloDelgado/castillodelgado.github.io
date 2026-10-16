<script setup>
import { ref } from 'vue'
import { ArrowUpRight, Menu, X } from '@lucide/vue'
import LanguageToggle from './ui/LanguageToggle.vue'

defineProps({ content: { type: Object, required: true }, locale: { type: String, required: true } })
defineEmits(['language-change'])
const menuOpen = ref(false)
</script>

<template>
  <a class="skip-link" href="#contenido">{{ content.skip }}</a>
  <header class="header" @keydown.esc="menuOpen = false">
    <a class="wordmark" href="#perfil" :aria-label="content.home">mc<span>.</span></a>
    <nav id="navigation" :class="{ open: menuOpen }" :aria-label="content.navigation">
      <a v-for="section in content.sections" :key="section.id" :href="`#${section.id}`" @click="menuOpen = false">{{ section.label }}</a>
      <a class="nav-contact" href="#contacto" @click="menuOpen = false">{{ content.contact }} <ArrowUpRight class="inline-icon" aria-hidden="true" focusable="false" /></a>
    </nav>
    <div class="header-controls">
      <LanguageToggle :locale="locale" :label="content.language" @change="$emit('language-change', $event)" />
      <button class="menu-button" type="button" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-controls="navigation">
        {{ menuOpen ? content.close : content.menu }}
        <component :is="menuOpen ? X : Menu" class="inline-icon" aria-hidden="true" focusable="false" />
      </button>
    </div>
  </header>
</template>
