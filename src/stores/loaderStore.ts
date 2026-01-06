import { defineStore } from 'pinia'
import { ref } from "vue";

export const useLoaderStore = defineStore('loader', () => {
    const loading = ref<boolean>(false);

    function enable():void { loading.value = true }
    function disable():void { loading.value = false }

    return {
        loading, enable, disable,
    }
})