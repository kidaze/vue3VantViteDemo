import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import PersonalCenter from "../components/PersonalCenter.vue";
import Register from "../components/MeetingRegister.vue"
import RegisterInformation from "../components/RegisterInformation.vue"


const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: HelloWorld
        },
        {
            path: '/personalCenter',
            component: PersonalCenter
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/registerInformation',
            component: RegisterInformation
        }
    ]
})
export default router
