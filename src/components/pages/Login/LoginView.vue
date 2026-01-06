<script setup lang="ts">
import {useAccessStore} from "@/stores/accessStore.ts";
import {ref} from "vue";
const max_symbols = 4
const accessStore = useAccessStore();
const user = ref<Record<string, string>>({
  login: '',
  password: ''
})
const error = ref<string | null>(null);
const showPassword = ref<boolean>(false);
//TODO: перенести в стор, сделать рефакторинг проверок
function handleLogin() {
  if(user.value && user.value.login && user.value.password) {
    if(user.value.password.length > max_symbols && user.value.login.length > max_symbols) {
      accessStore.login(user.value.login, user.value.password);
    }
    else {
      error.value = `Логин или пароль должны быть более ${max_symbols} символов`;
    }
  }
}
</script>

<template>
<div class="max-w-6xl mx-auto pt-8 flex flex-col items-center justify-center">
  <h2 class="font-bold text-2xl dark:text-white">Login</h2>
  <div class="flex flex-col justify-center h-full gap-3 mt-6 w-xs">
    <el-input v-model="user.login" placeholder="username" autocapitalize="off"></el-input>
    <el-input v-model="user.password" :type="!showPassword ? 'password' : 'text'" placeholder="password"></el-input>
    <el-checkbox v-model="showPassword">Показывать пароль</el-checkbox>
    <el-button type="primary" class="w-full" @click.prevent="handleLogin">Login</el-button>
    <div v-if="error" class="text-red-500">Ошибка: {{error}}</div>
  </div>


</div>
</template>

<style scoped>

</style>