import { defineStore } from 'pinia'
import { ref } from "vue";
import type {ChatPreview} from "@/types.ts";
import {useLoaderStore} from "@/stores/loaderStore.ts";

const mockChats = [
    {
        id: 1,
        name: 'Алексей',
        message: 'Привет, ты видел последнее обновление по проекту?',
        imageUrl: 'https://i.pravatar.cc/150?img=1',
        online: true,
        unreaded: 1,
    },
    {
        id: 2,
        name: 'Мария',
        message: 'Окей, тогда завтра созвонимся и всё обсудим',
        imageUrl: 'https://i.pravatar.cc/150?img=2',
        online: false,
    },
    {
        id: 3,
        name: 'Дмитрий',
        message: 'Я закинул правки в репозиторий, посмотри пожалуйста',
        imageUrl: 'https://i.pravatar.cc/150?img=3',
        online: true,
    },
    {
        id: 4,
        name: 'Анна',
        message: 'Не забудь про дедлайн, он уже на носу',
        imageUrl: 'https://i.pravatar.cc/150?img=4',
        online: false,
    },
    {
        id: 5,
        name: 'Илья',
        message: 'А можно потом созвониться? Сейчас не очень удобно',
        imageUrl: 'https://i.pravatar.cc/150?img=5',
        online: true,
    },
    {
        id: 6,
        name: 'Екатерина',
        message: 'Я проверила, всё работает корректно 👍',
        imageUrl: 'https://i.pravatar.cc/150?img=6',
        online: true,
    },
    {
        id: 7,
        name: 'Сергей',
        message: 'Хмм, тут возможно проблема с API, нужно копнуть глубже',
        imageUrl: 'https://i.pravatar.cc/150?img=7',
        online: false,
    },
    {
        id: 8,
        name: 'Ольга',
        message: 'Отправила тебе файлы, посмотри как будет время',
        imageUrl: 'https://i.pravatar.cc/150?img=8',
        online: false,
    },
    {
        id: 9,
        name: 'Никита',
        message: 'Vue 3 + Pinia зашли отлично, спасибо за совет',
        imageUrl: 'https://i.pravatar.cc/150?img=9',
        online: true,
    },
    {
        id: 10,
        name: 'Виктория',
        message: 'Я чуть позже отвечу, сейчас на встрече',
        imageUrl: 'https://i.pravatar.cc/150?img=10',
        online: true,
    },
    {
        id: 11,
        name: 'Роман',
        message: 'Ты не знаешь, почему падает сборка?',
        imageUrl: 'https://i.pravatar.cc/150?img=11',
        online: false,
    },
    {
        id: 12,
        name: 'Полина',
        message: 'Классный интерфейс получился, выглядит аккуратно',
        imageUrl: 'https://i.pravatar.cc/150?img=12',
        online: true,
    },
    {
        id: 13,
        name: 'Артём',
        message: 'Можешь глянуть мой MR, там пара мелких изменений',
        imageUrl: 'https://i.pravatar.cc/150?img=13',
        online: false,
    },
    {
        id: 14,
        name: 'Юлия',
        message: 'Давай перенесём на понедельник',
        imageUrl: 'https://i.pravatar.cc/150?img=14',
        online: true,
    },
    {
        id: 15,
        name: 'Кирилл',
        message: 'Я сейчас не за компом, отвечу позже',
        imageUrl: 'https://i.pravatar.cc/150?img=15',
        online: false,
    },
    {
        id: 16,
        name: 'Настя',
        message: 'Можно ли сделать предпросмотр сообщения как в Telegram?',
        imageUrl: 'https://i.pravatar.cc/150?img=16',
        online: true,
    },
    {
        id: 17,
        name: 'Павел',
        message: 'У меня локально всё работает, странно',
        imageUrl: 'https://i.pravatar.cc/150?img=17',
        online: false,
    },
    {
        id: 18,
        name: 'Владислав',
        message: 'Давай добавим лоадер, без него выглядит резко',
        imageUrl: 'https://i.pravatar.cc/150?img=18',
        online: true,
    },
    {
        id: 19,
        name: 'Елена',
        message: 'Спасибо! Всё получила',
        imageUrl: 'https://i.pravatar.cc/150?img=19',
        online: false,
    },
    {
        id: 20,
        name: 'Максим',
        message: 'Сейчас проверю и отпишусь',
        imageUrl: 'https://i.pravatar.cc/150?img=20',
        online: true,
    },
]
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
}


export const useChattersStore = defineStore('chatters', () => {
    const loader = useLoaderStore()
    const chatlist = ref<ChatPreview[]>([])
    async function fetchChats() {
        loader.enable()
        try {
            await sleep(5000)
            chatlist.value = mockChats
        } catch (e) {
            console.error(e)
        } finally {
            loader.disable()
        }
    }
    const currentChatId = ref<number | null>(null)


    return {
        chatlist, fetchChats, currentChatId
    }
})