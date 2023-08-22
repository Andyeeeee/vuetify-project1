<template>
  <v-container>
    <v-navigation-drawer v-if="isMobile" v-model="drawer" location="right" temporary>
      <v-list>
        <template v-for="navItem in navItems" :key="navItem.to">
          <v-list-item v-if="navItem.show" :to="navItem.to">
            <template #prepend>
              <v-icon :icon="navItem.icon" />
            </template>
            <template #append>
              <v-badge color="success" :content="cart.toString()" v-if="navItem.to === '/cart'" />
            </template>
            <v-list-item-title>{{ navItem.text }}</v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item v-if="isLogin" @click="logout">
          <template #prepend>
            <v-icon icon="mdi-logout" />
          </template>
          <v-list-item-title>登出</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar id="FrontLayout">
      <v-app-bar-title id="FrontLayout">
        <div class="d-flex">
          <v-img src="@/image/logo.jpg" max-width="70" cover aspect-ratio="1" @click="toHome()" />
          <span class="ms-5" style="line-height: 70px; font-size: 32px">
            沐對
          </span>
        </div>
      </v-app-bar-title>
      <v-spacer />
      <v-app-bar-nav-icon v-if="isMobile" @click="drawer = true" />
      <template v-if="!isMobile">
        <template v-for="navItem in navItems" :key="navItem.to">
          <v-btn variant="text" :prepend-icon="navItem.icon" :to="navItem.to" v-if="navItem.show">
            {{ navItem.text }}
            <v-badge color="success" :content="cart.toString()" floating v-if="navItem.to === '/cart'" />
          </v-btn>
        </template>
        <v-btn v-if="!isMobile && isLogin" variant="text" prepend-icon="mdi-logout" @click="logout">
          登出
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <router-view :key="$route.path" />
    </v-main>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const createSnackbar = useSnackbar()

const router = useRouter()
const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

const drawer = ref(false)

const navItems = computed(() => {
  return [
    // { to: '/register', text: '註冊', icon: 'mdi-account-plus', show: !isLogin.value },
    { to: '/', text: '首頁菜單', show: true },
    { to: '/login', text: '會員登入', show: !isLogin.value },
    { to: '/cart', text: '購物車', icon: 'mdi-cart', show: isLogin.value },
    { to: '/orders', text: '訂單', icon: 'mdi-format-list-numbered', show: isLogin.value },
    { to: '/admin', text: '管理', icon: 'mdi-cog', show: isLogin.value && isAdmin.value },
    { to: '/aboutus', text: '關於我們', show: true }
  ]
})

const toHome = () => {
  router.push('/')
}

const toAboutus = () => {
  router.push('/aboutus')
}

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
