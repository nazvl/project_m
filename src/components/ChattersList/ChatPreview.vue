<script setup lang="ts">
import type {ChatPreview} from "@/types.ts";

const props = defineProps<ChatPreview>()
</script>

<template>

  <div class="flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointertransition-colors duration-200
           hover:bg-gray-100 dark:hover:bg-gray-700"
  >

    <div class="relative shrink-0">
      <el-avatar
          :size="56"
          class="shadow-sm"
          :src="props.imageUrl || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
      />
      <span
          v-if="props.online"
          class="absolute bottom-0 right-0 w-3.5 h-3.5
               bg-green-400 border-2 border-white dark:border-gray-900
               rounded-full"
      />
    </div>

    <div class="flex flex-col min-w-0">
      <span class="font-medium text-gray-900 dark:text-gray-100 truncate">
        {{ props.name }}
      </span>

      <span
          class="text-sm text-gray-500 dark:text-gray-400
               line-clamp-2"
      >
        {{ props.message }}
      </span>
    </div>
  </div>
</template>
