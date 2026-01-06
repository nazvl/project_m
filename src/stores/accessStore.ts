import { defineStore } from 'pinia'
import {ref} from "vue";
import {useLoaderStore} from "@/stores/loaderStore.ts";


export const useAccessStore = defineStore('access', () => {

    const token = ref('accessToken')
    const loader= useLoaderStore();
    async function login(login: string, password: string): Promise<void> {
        loader.enable()
        try {
            await new Promise(resolve => setTimeout(resolve, 2500))

            if (login === 'admin' && password === 'admin') {
                token.value = 'admin'
            }
        } catch (error) {
            console.error(error)
        } finally {
            loader.disable()
        }
    }


    return {
        login, token
    }
})