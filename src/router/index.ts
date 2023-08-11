import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login/index.vue'),
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('../views/home/index.vue'),
	},
	{
		path: '/main',
		name: 'main',
		component: () => import('../views/main/index.vue'),
		redirect: '/team',
		children: [
			{
				path: '/team',
				name: 'team',
				component: () => import('../views/team/index.vue'),
			},
			{
				path: '/recentVisit',
				name: 'recentVisit',
				component: () => import('../views/recentVisit/index.vue'),
			},
		],
	},
	{
		path: '/personalCenter/:id',
		name: 'personalCenter',
		component: () => import('../views/personalCenter/index.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
