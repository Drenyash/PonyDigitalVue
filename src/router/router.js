import {createRouter, createWebHistory} from "vue-router";import AppMain from "@/views/AppMain.vue";import AppAbout from "@/views/AppAbout.vue";import AppError from "@/views/AppError.vue";export default createRouter({	history: createWebHistory(),	routes: [		{			path: '',			component: AppMain,		},		{			path: '/about',			component: AppAbout,		},		{			path: '/:pathMatch(.*)*',			component: AppError,		},	]})