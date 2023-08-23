// Composables
import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router'
import { useUserStore } from '@/store/user'

const routes = [
	{
		path: '/',
		component: () => import('@/layouts/FrontLayout.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () => import(/* webpackChunkName: "home" */ '@/views/front/HomeView.vue'),
				meta: {
					title: '購物網',
					login: false,
					admin: false
				}
			},
			{
				path: 'aboutus',
				name: 'Aboutus',
				component: () => import(/* webpackChunkName: "aboutus" */ '@/views/front/AboutUss.vue'),
				meta: {
					title: '關於我們',
					login: false,
					admin: false
				}
			},
			{
				path: 'register',
				name: 'Register',
				component: () => import(/* webpackChunkName: "register" */ '@/views/front/RegisterView.vue'),
				meta: {
					title: '購物網 | 註冊',
					login: false,
					admin: false
				}
			},
			{
				path: 'login',
				name: 'Login',
				component: () => import(/* webpackChunkName: "login" */ '@/views/front/LoginView.vue'),
				meta: {
					title: '購物網 | 登入',
					login: false,
					admin: false
				}
			},
			{
				path: 'products/:id',
				name: 'Product',
				component: () => import(/* webpackChunkName: "product" */ '@/views/front/ProductView.vue'),
				meta: {
					title: '購物網 | 商品',
					login: false,
					admin: false
				}
			},
			{
				path: 'cart',
				name: 'Cart',
				component: () => import(/* webpackChunkName: "cart" */ '@/views/front/CartView.vue'),
				meta: {
					title: '購物網 | 購物車',
					login: true,
					admin: false
				}
			},
			{
				path: 'orders',
				name: 'Orders',
				component: () => import(/* webpackChunkName: "orders" */ '@/views/front/OrdersView.vue'),
				meta: {
					title: '購物網 | 訂單',
					login: true,
					admin: false
				}
			}
			// ,
			// {
			// 	path: 'member',
			// 	name: 'Member',
			// 	component: () => import(/* webpackChunkName: "orders" */ '@/layouts/MemberLayout.vue'),
			// 	meta: {
			// 		title: '購物網 | 訂單',
			// 		login: true,
			// 		admin: false
			// 	}
			// }
		]
	},
	{
		path: '/admin',
		component: () => import('@/layouts/AdminLayout.vue'),
		children: [
			{
				path: '',
				name: 'AdminHome',
				component: () => import(/* webpackChunkName: "admin-home" */ '@/views/admin/HomeView.vue'),
				meta: {
					title: '購物網 | 管理',
					login: true,
					admin: true
				}
			},
			{
				path: 'products',
				name: 'AdminProducts',
				component: () => import(/* webpackChunkName: "admin-products" */ '@/views/admin/ProductsView.vue'),
				meta: {
					title: '購物網 | 商品管理',
					login: true,
					admin: true
				}
			},
			{
				path: 'orders',
				name: 'AdminOrders',
				component: () => import(/* webpackChunkName: "admin-orders" */ '@/views/admin/OrdersView.vue'),
				meta: {
					title: '購物網 | 訂單管理',
					login: true,
					admin: true
				}
			},
			{
				path: 'noworder',
				name: 'AdminNowOrder',
				component: () => import(/* webpackChunkName: "admin-NowOrder" */ '@/views/admin/NowOrder.vue'),
				meta: {
					title: 'KK | 訂單進度',
					login: true,
					admin: true
				}
			}
		]
	},
	{
		path: '/member',
		component: () => import('@/layouts/MemberLayout.vue'),
		children: [
			{
				path: '',
				name: 'OrdersView',
				component: () => import(/* webpackChunkName: "member-OrdersView" */ '@/views/front/OrdersView.vue'),
				meta: {
					title: 'KK | 訂單',
					login: true,
					admin: false
				}
			}
			// ,
			// {
			// 	path: 'member',
			// 	name: 'MemberOrdersView',
			// 	component: () => import(/* webpackChunkName: "member-OrdersView" */ '@/views/front/OrdersView.vue'),
			// 	meta: {
			// 		title: 'KK | 訂單',
			// 		login: true,
			// 		admin: false
			// 	}
			// },
			// ,
			// {
			// 	path: '',
			// 	name: 'DataSetting',
			// 	component: () => import(/* webpackChunkName: "member-DataSetting" */ '@/views/front/DataSetting.vue'),
			// 	meta: {
			// 		title: 'KK | 資料編輯',
			// 		login: true,
			// 		admin: false
			// 	}
			// },
			// {
			// 	path: 'noworder',
			// 	name: 'NowOrder',
			// 	component: () => import(/* webpackChunkName: "member-NowOrder" */ '@/views/front/NowOrder.vue'),
			// 	meta: {
			// 		title: 'KK | 訂單進度',
			// 		login: true,
			// 		admin: false
			// 	}
			// }
			// {
			// 	path: 'products',
			// 	name: 'AdminProducts',
			// 	component: () => import(/* webpackChunkName: "admin-products" */ '@/views/admin/ProductsView.vue'),
			// 	meta: {
			// 		title: '購物網 | 商品管理',
			// 		login: true,
			// 		admin: true
			// 	}
			// },
			// {
			// 	path: 'orders',
			// 	name: 'AdminOrders',
			// 	component: () => import(/* webpackChunkName: "admin-orders" */ '@/views/admin/OrdersView.vue'),
			// 	meta: {
			// 		title: '購物網 | 訂單管理',
			// 		login: true,
			// 		admin: true
			// 	}
			// }
		]
	}
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

router.afterEach((to, from) => {
	document.title = to.meta.title
})

router.beforeEach(async (to, from, next) => {
	const user = useUserStore()
	// 剛進網頁時的第一次路由跳轉
	if (from === START_LOCATION) {
		// 取得使用者資訊
		await user.getProfile()
	}

	if (user.isLogin && ['/register', '/login'].includes(to.path)) {
		// 如果有登入，去註冊或登入頁，導向回首頁
		next('/')
	} else if (to.meta.login && !user.isLogin) {
		// 如果沒登入，去需要登入的頁面，導向回登入頁
		next('/login')
	} else if (to.meta.admin && !user.isAdmin) {
		// 如果不是管理員，去需要管理員，導向回首頁
		next('/')
	} else {
		// 不做導向
		next()
	}
})

export default router
