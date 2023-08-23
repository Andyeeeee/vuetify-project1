<template style="background-color: #003c6c">
	<div id="MemberLayout">
		<VNavigationDrawer permanent id="MemberLayout" style="background-color: #004886">
			<VList>
				<VListItem :prepend-avatar="avatar" :title="account"></VListItem>
			</VList>
			<VDivider></VDivider>
			<VList>
				<VListItem v-for="navItem in navItems" :key="navItem.to" :to="navItem.to" :title="navItem.title"
					:prepend-icon="navItem.icon"></VListItem>
				<v-list-item @click="logout">
					<template #prepend>
						<v-icon icon="mdi-logout" />
					</template>
					<v-list-item-title>登出</v-list-item-title>
				</v-list-item>
			</VList>
		</VNavigationDrawer>
		<VMain>
			<RouterView></RouterView>
		</VMain>
	</div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user'
import { useSnackbar } from 'vuetify-use-dialog'
import { apiAuth } from '@/plugins/axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const createSnackbar = useSnackbar()
const user = useUserStore()
const { avatar, account } = storeToRefs(user)

const toHome = () => {
	router.push('/')
}

const navItems = [
	// { to: '/admin/products', title: '商品管理', icon: 'mdi-shopping' },
	// { to: '/admin/orders', title: '訂單管理', icon: 'mdi-format-list-numbered' },

	// { to: '/', title: '會員資料', icon: 'mdi-account' },
	// { to: '/member/noworder', title: '訂單進度', icon: 'mdi-clipboard-text-search-outline' },
	{ to: '/member', title: '訂單', icon: 'mdi-script-text-outline' },
	{ to: '/', title: '回首頁', icon: 'mdi-home' }
]

const logout = async () => {
	try {
		await apiAuth.delete('/users/logout')
		user.logout()
		createSnackbar({
			text: '登出成功',
			showCloseButton: false,
			snackbarProps: {
				timeout: 2000,
				color: 'green',
				location: 'bottom'
			}
		})
		router.push('/')
	} catch (error) {
		createSnackbar({
			text: error.response.data.message,
			showCloseButton: false,
			snackbarProps: {
				timeout: 2000,
				color: 'red',
				location: 'bottom'
			}
		})
	}
}
</script>
