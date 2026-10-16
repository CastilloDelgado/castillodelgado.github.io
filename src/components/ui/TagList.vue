<script setup>
defineProps({ tags: { type: Array, required: true } })
</script>

<template>
  <ul class="tags"><li v-for="tag in tags" :key="tag">{{ tag }}</li></ul>
</template>
