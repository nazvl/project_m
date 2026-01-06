<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <div
      class="
      sticky top-4 z-2000
      mx-2 mt-4
      px-6 py-3
      rounded-2xl
      bg-white/70 dark:bg-gray-900/70
      backdrop-blur-md
      shadow-md
      border border-gray-200/50 dark:border-gray-700/50
      flex items-center justify-center
      transition-all duration-300
      hover:shadow-lg
    "
  >
    <span
        class="
        absolute left-4 top-1/2 -translate-y-1/2
        h-6 w-1.5
        rounded-full
        bg-linear-to-b from-blue-500 to-violet-500
      "
    />

    <h2
        class="
        text-xl sm:text-2xl
        font-semibold
        tracking-tight
        text-gray-900 dark:text-gray-100
      "
    >
      {{ title }}
    </h2>
  </div>
</template>
