import {RouteRecordRaw} from "vue-router";

export default [
    {
        name: 'home',
        path: '/',
        component: () => import('@/pages/TheHome.vue'),
    },
    {
        name: 'contact',
        path: '/contact',
        component: () => import('@/pages/TheContact.vue'),
    },
    {
        name: 'about',
        path: '/about',
        component: () => import('@/pages/TheAbout.vue'),
    },
    {
        name: 'signUp',
        path: '/signUp',
        component: () => import('@/pages/TheSignUp.vue'),
    },{
        name: 'notFound',
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/NotFound.vue'),
    },
] as RouteRecordRaw[]