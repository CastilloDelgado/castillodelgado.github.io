<script setup>
defineProps({ heading: { type: Object, required: true } })
</script>

<template>
  <div class="section-heading">
    <div>
      <p class="eyebrow">{{ heading.eyebrow }}</p>
      <h2><template v-for="(line, index) in heading.title" :key="index"><br v-if="index" />{{ line }}</template></h2>
    </div>
    <p v-if="heading.note" class="section-note">{{ heading.note }}</p>
  </div>
</template>
