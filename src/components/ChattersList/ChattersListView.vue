<script setup lang="ts">

import Header from "@/components/ui/Header.vue";
import ChatPreview from "@/components/ChattersList/ChatPreview.vue";
import {useChattersStore} from "@/stores/chattersStore.ts";
const chattersStore = useChattersStore();
</script>

<template>
  <Header title="Messages"/>
  <div class="max-w-6xl mx-auto">
    <div v-for="chat in chattersStore.chatlist" :key="chat.id">
      <chat-preview :id="chat.id" :name="chat.name" :message="chat.message" :imageUrl="chat.imageUrl" :online="chat.online" :unreaded="chat.unreaded"></chat-preview>
    </div>
  </div>

</template>

<style scoped>

</style>