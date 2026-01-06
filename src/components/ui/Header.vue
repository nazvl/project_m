<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>

<template>
<div class="w-full bg-gray-100 dark:bg-gray-900 h-12 text-gray-950 dark:text-gray-400 font-bold text-3xl text-center shadow-xl">
  {{props.title}}
</div>
</template>

<style scoped>

</style>