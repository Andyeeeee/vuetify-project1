<template>
  {{ $route.params.id }}
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img :src="product.image"> </v-img>
      </v-col>
      <v-col cols="12">
        <h1 class="text-center">{{ product.name }}</h1>
      </v-col>
      <v-col cols="12">
        <p>${{ product.price }}</p>
        <pre>${{ product.description }}</pre>
        <v-from :disabled="isSubmitting" @submit.prevent="submit">
          <v-text-field v-mode.number="quantity.value.value" type="number" label="數量" min="0"
            :error-messages="quantity.errorMessage.value">
          </v-text-field>
          <v-btn type="submit" color="green">加入購物車</v-btn>

        </v-from>
      </v-col>
    </v-row>
  </v-container>
  <v-overlay :mode-value="!product.sell" persistent class="align-center text-center justify-center">
    <h1 class="text-red">已下架</h1>
    <v-btn>回上頁</v-btn>
  </v-overlay>
</template>

<script setup>
import { ref } from 'vue'
import { api, apiAuth } from '@/plugins/axios'
import { useRoute } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog' // 案出來多/dist  觀察是否可正常運行 (連結會掛到!!)
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useUserStore } from '@/store/user'

// 有r的 跳轉
// 沒r的 取得路由資訊

// const quantity = ref(0)

const schema = yup.object({
  quantity: yup.number().typeError('缺少數量').required('缺少數量').min(1, '最少為 1')
})

const { isSubmitting, handleSubmit } = useForm({
  validationSchema: schema
})
const quantity = useField('quantity')

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await apiAuth.post('/users/cart', {
      product: route.product.value._id,
      quantity: values.quantity
    })
    user.cart = data.result
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

const route = useRoute()
const createSnackbar = useSnackbar()
const user = useUserStore()

const product = ref({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: '',
  category: ''
});

(async () => {
  try { // ---------------------------/ 前後/
    const { data } = await api.get('/products/' + route.params.id)
    product.value._id = data.result._id
    product.value.name = data.result.name
    product.value.price = data.result.price
    product.value.description = data.result.description
    product.value.image = data.result.image
    product.value.sell = data.result.sell
    product.value.category = data.result.category

    document.title = 'KK | ' + product.value.name
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
})()

</script>
