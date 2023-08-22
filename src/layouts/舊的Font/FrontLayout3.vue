<template>
  <!-- <v-navigation-drawer> -->
  <v-app-bar style="background-color:#004886">

    <a href="/" style="display: flex;">
      <img src="../image/icon.jpg" alt="" style="border: 1px white solid" height="60" width="60">
      <span style="font-size: 30px;">MoonDay</span>
    </a>

    <v-container class="d-flex align-center">
      <v-app-bar-title> <v-btn to="/" :active="false">

        </v-btn></v-app-bar-title>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon v-if="isMobile" variant="text" @click="drawer = true"></v-app-bar-nav-icon>
      <template v-if="!isMobile">
        <v-btn to="/" :active="false">菜單首頁</v-btn>
        <v-btn v-if="!isLogin" to="/login">登入會員</v-btn>
        <v-btn v-if="isLogin" @click="logout">登出會員</v-btn>
        <v-btn>關於我們</v-btn>
      </template>
    </v-container>
  </v-app-bar>
  <template v-if="isMobile">
    <!-- </v-navigation-drawer> -->
    <v-navigation-drawer v-model="drawer" location="right" temporary :active="false">
      <v-list :items="items" :active="false">
        <v-list-item to="/" :active="false">
          <v-list-item-title> 菜單首頁</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list v-if="!isLogin" :items="items" :active="false">
        <v-list-item to="/login" :active="false">
          <v-list-item-title> 登入會員
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list :items="items" v-if="isLogin">
        <v-list-item @click="logout">
          <v-list-item-title>登出會員</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list :items="items">
        <v-list-item to="/" :active="false">
          <v-list-item-title> 關於我們</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  <v-main>
    <RouterView></RouterView>
  </v-main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

const drawer = ref(false)

const navItems = computed(() => {
  return [
    { to: '/register', text: '註冊', icon: 'mdi-account-plus', show: !isLogin.value },
    { to: '/login', text: '登入', icon: 'mdi-login', show: !isLogin.value },
    { to: '/cart', text: '購物車', icon: 'mdi-cart', show: isLogin.value },
    { to: '/orders', text: '訂單', icon: 'mdi-format-list-numbered', show: isLogin.value },
    { to: '/admin', text: '管理', icon: 'mdi-cog', show: isLogin.value && isAdmin.value }
  ]
})

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
