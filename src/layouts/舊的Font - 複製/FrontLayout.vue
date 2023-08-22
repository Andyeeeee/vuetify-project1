<template lang="pug">
VNavigationDrawer(v-if="isMobile" v-model="drawer" location="right" temporary)
  VList(nav)
    template(v-for="navItem in navItems" :key="navItem.to")
      VListItem(v-if="navItem.show" :to="navItem.to")
        template(#prepend)
          VIcon(:icon="navItem.icon")
        template(#append)
          VBadge(color="success" :content="cart.toString()" v-if="navItem.to === '/cart'")
        VListItemTitle {{ navItem.text }}
    VListItem(v-if="isLogin" @click="logout")
      template(#prepend)
        VIcon(icon="mdi-logout")
      VListItemTitle 登出
VAppBar(id="FrontLayout")

  //- VBtn(to="/" :active="false")
  VAppBarTitle(id="FrontLayout")
    .d-flex
      VImg(src="@/image/logo.jpg" max-width="70" cover aspect-ratio="1" @click="toHome()")
      Span.ms-5(style="line-height: 70px; font-size: 32px") 沐對
  VSpacer
  VAppBarNavIcon(v-if="isMobile" @click="drawer = true")
  template(v-if="!isMobile")
    template(v-for="navItem in navItems" :key="navItem.to")
      VBtn(variant="text" :prepend-icon="navItem.icon" :to="navItem.to" v-if="navItem.show") {{ navItem.text }}
        VBadge(color="success" :content="cart.toString()" floating v-if="navItem.to === '/cart'")
  VBtn(v-if="!isMobile && isLogin" variant="text" prepend-icon="mdi-logout" @click="logout") 登出
VMain
  RouterView(:key="$route.path")
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
    { to: '/login', text: '會員登入', icon: 'mdi-login', show: !isLogin.value },
    { to: '/cart', text: '購物車', icon: 'mdi-cart', show: isLogin.value },
    { to: '/orders', text: '訂單', icon: 'mdi-format-list-numbered', show: isLogin.value },
    { to: '/admin', text: '管理', icon: 'mdi-cog', show: isLogin.value && isAdmin.value }
  ]
})

const toHome = () => {
  router.push('/')
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
