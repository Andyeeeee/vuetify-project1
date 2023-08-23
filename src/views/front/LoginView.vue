<template>
  <section id="LoginView">
    <!-- <h1 class="text-center">會員登入</h1> -->
    <v-container>
      <v-img :width="180" aspect-ratio="16/9" cover src="@/image/icon.jpg" style="margin: auto;"></v-img>
      <v-col cols="4" style="margin: auto;" class="text-center justify-center">
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
          <v-text-field v-model="account.value.value" :error-messages="account.errorMessage.value" placeholder="帳號"
            counter maxlength="20"></v-text-field>
          <v-text-field v-model="password.value.value" :error-messages="password.errorMessage.value" placeholder="密碼"
            counter maxlength="20" type="password"></v-text-field>
          <div>&nbsp;</div>
          <v-row style="justify-content: space-around;">
            <v-btn type="submit">登入</v-btn>
          </v-row>
        </v-form>
        <div>&nbsp;</div>
        <hr>
        <div>&nbsp;</div>
        <v-btn to="/register">註冊會員</v-btn>
      </v-col>
    </v-container>
  </section>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { api } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'

const createSnackbar = useSnackbar()
const router = useRouter()
const user = useUserStore()

const schema = yup.object({
  account: yup
    .string()
    .required('帳號必填')
    .min(4, '帳號最少 4 個字')
    .max(20, '帳號最多 20 個字'),
  password: yup
    .string()
    .required('密碼必填')
    .min(4, '密碼最少 4 個字')
    .max(20, '密碼最多 20 個字')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const password = useField('password')

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await api.post('/users/login', {
      account: values.account,
      password: values.password
    })
    user.login({
      token: data.result.token,
      account: data.result.account,
      email: data.result.email,
      cart: data.result.cart,
      role: data.result.role
    })
    createSnackbar({
      text: '登入成功',
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
})
</script>
