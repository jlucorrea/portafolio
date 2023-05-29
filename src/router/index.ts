import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/HomeView.vue')
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('@/views/Sections/AboutSection.vue')
		},
		{
			path: '/skill',
			name: 'skill',
			component: () => import('@/views/Sections/SkillSection.vue')
		},
		{
			path: '/work',
			name: 'work',
			component: () => import('@/views/Sections/ProjectSection.vue')
		},
		{
			path: '/contact',
			name: 'contact',
			component: () => import('@/views/Sections/ContactSection.vue')
		}
	]
})

export default router
