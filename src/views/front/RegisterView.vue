<template>
  <section style="background-color: #004886;">
    <!-- <h1 class="text-center">註冊會員</h1> -->
    <v-container>
      <v-img :width="180" aspect-ratio="16/9" cover src="@/image/icon.jpg" style="margin: auto;"></v-img>
      <v-col cols="4" style="margin: auto;">
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
          <v-text-field v-model="account.value.value" :error-messages="account.errorMessage.value" placeholder="帳號"
            counter maxlength="20"></v-text-field>
          <v-text-field v-model="password.value.value" :error-messages="password.errorMessage.value" placeholder="密碼"
            counter maxlength="20"></v-text-field>
          <v-text-field v-model="passwordConfirm.value.value" placeholder="確認密碼" counter maxlength="20"></v-text-field>
          <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value" placeholder="信箱" counter
            maxlength="20" type="email"></v-text-field>
          <div>&nbsp;</div>
          <v-row style="justify-content: space-around;">
            <v-btn type="submit">確認</v-btn>
          </v-row>

        </v-form>
      </v-col>
    </v-container>
  </section>
</template>

<script setup>
import validator from 'validator'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { api } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const createSnackbar = useSnackbar()
const router = useRouter()

const schema = yup.object({
  account: yup
    .string()
    .required('帳號必填')
    .min(4, '帳號最少 4 個字')
    .max(20, '帳號最多 20 個字'),
  email: yup
    .string()
    .required('信箱必填')
    .test(
      'isEmail', '信箱格式錯誤',
      (value) => validator.isEmail(value)
    ),
  password: yup
    .string()
    .required('密碼必填')
    .min(4, '密碼最少 4 個字')
    .max(20, '密碼最多 20 個字'),
  passwordConfirm: yup
    .string()
    .required('密碼必填')
    .min(4, '密碼最少 4 個字')
    .max(20, '密碼最多 20 個字')
    .oneOf([yup.ref('password')], '密碼不一致')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const email = useField('email')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/users', {
      account: values.account,
      email: values.email,
      password: values.password
    })
    createSnackbar({
      text: '註冊成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/login')
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
