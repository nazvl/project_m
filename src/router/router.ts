import { createMemoryHistory, createRouter } from 'vue-router'
import LoginView from "@/components/pages/Login/LoginView.vue";
import ChattersListView from "@/components/pages/ChattersList/ChattersListView.vue";

const routes = [
    { path: '/', component: LoginView },
    { path: '/login', component: LoginView },
    { path: '/list', component: ChattersListView }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router