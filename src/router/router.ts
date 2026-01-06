import { createMemoryHistory, createRouter } from 'vue-router'
import LoginView from "../components/Login/LoginView.vue";
import ChattersListView from "../components/ChattersList/ChattersListView.vue";

const routes = [
    { path: '/login', component: LoginView },
    { path: '/list', component: ChattersListView }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router