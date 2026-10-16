<script setup>
import { languages } from '../../composables/useLanguage'

defineProps({ locale: { type: String, required: true }, label: { type: String, required: true } })
defineEmits(['change'])
</script>

<template>
  <div class="language-toggle" role="group" :aria-label="label">
    <button
      v-for="language in languages"
      :key="language.code"
      type="button"
      :lang="language.code"
      :aria-label="language.label"
      :aria-pressed="locale === language.code"
      @click="$emit('change', language.code)"
    >{{ language.code.toUpperCase() }}</button>
  </div>
</template>

<style scoped>
.language-toggle { display: flex; padding: 3px; border: 1px solid var(--line); border-radius: 5px; gap: 2px; }
button { border: 0; border-radius: 3px; background: transparent; color: var(--green); padding: 8px 10px; font: 11px 'Space Mono', monospace; cursor: pointer; min-height: 34px; }
button[aria-pressed='true'] { background: var(--green); color: #fff; }
button[aria-pressed='false']:hover { background: #edf1e7; }
@media (max-width: 700px) { button { min-height: 36px; padding: 8px; } }
</style>
