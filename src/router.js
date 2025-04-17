import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";

import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup'
    },
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'Add',
        component: Add,
        path: '/add-restaurant'
    },
    {
        name: 'Update',
        component: Update,
        path: '/update-restaurant/:id'
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router