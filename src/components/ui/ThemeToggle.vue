<script setup>
import { Moon, Sun } from '@lucide/vue'
import { useTheme } from '../../composables/useTheme'

defineProps({ labels: { type: Object, required: true } })
const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button class="theme-toggle" type="button" :aria-label="theme === 'dark' ? labels.light : labels.dark" :title="theme === 'dark' ? labels.light : labels.dark" @click="toggleTheme">
    <component :is="theme === 'dark' ? Sun : Moon" class="inline-icon" aria-hidden="true" focusable="false" />
  </button>
</template>

<style scoped>
.theme-toggle { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; flex-shrink: 0; border: 1px solid var(--line); border-radius: 5px; background: transparent; color: var(--green); cursor: pointer; }
.theme-toggle:hover { background: var(--surface); }
</style>
