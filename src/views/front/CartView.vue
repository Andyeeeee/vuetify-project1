<template>
  <!-- <section>
    <v-img :width="auto" aspect-ratio="16/9" cover
      src="https://d37w6prdd1grkb.cloudfront.net/buzzdaily/2086_news_banner.jpg?ndt=104032"></v-img>
  </section> -->
  <section id="CartView">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h3 class="text-center">點餐清單</h3>
        </v-col>
        <v-col cols="12">
          <v-table>
            <thead>
              <tr class="text-center tr">
                <th style="color: black;">圖片</th>
                <th style="color: black;">名稱</th>
                <th style="color: black;">單價</th>
                <th style="color: black;">數量</th>
                <th style="color: black;">小計</th>
                <th style="color: black;">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item._id" :class="{ 'dg-red-lightrn-4': !item.product.sell }">
                <td>
                  <v-img :src="item.product.image" cover width="200" aspect-ratio="1" style="padding: 20px;"
                    class="img"></v-img>
                </td>
                <td>{{ item.product.name }}</td>
                <td>{{ item.product.price }}</td>
                <td>
                  <v-btn variant="text" icon="mdi-plus" @click="updateCart(item.product._id, 1)"></v-btn>
                  {{ item.quantity }}
                  <v-btn variant="text" icon="mdi-minus" @click="updateCart(item.product._id, -1)"></v-btn>
                </td>
                <td>{{ item.quantity * item.product.price }}</td>
                <td>
                  <v-btn variant="icon" icon="mdi-delete" @click="updateCart(item.product._id, item.product._id * -1)">
                  </v-btn>
                </td>
              </tr>
              <tr v-if="cart.length === 0">
                <td colspan="6" class="text-center">沒有商品</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
        <v-col cols="12" class="text-center">
          <p>總金額:{{ total }}</p>
          <v-btn @click="submit" :disabled="!canCheckout" class="vbtn">結帳</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

const createSnackbar = useSnackbar()
const user = useUserStore()
const router = useRouter()

const cart = ref([])

const updateCart = async (product, quantity) => {
  try {
    const { data } = await apiAuth.post('/users/cart', {
      product,
      quantity
    })
    const idx = cart.value.findIndex(item => item.product._id === product)
    console.log(data)
    cart.value[idx].quantity += quantity
    if (cart.value[idx].quantity <= 0) {
      cart.value.splice(idx, 1)
    }

    user.cart = data.result
  } catch (error) {
    console.log(error)
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

const total = computed(() => {
  return cart.value.reduce((total, current) => total + (current.quantity * current.product.price), 0)
})

const canCheckout = computed(() => {
  return cart.value.length > 0 && !cart.value.some(item => !item.product.sell)
})

const submit = async (req, res) => {
  try {
    await apiAuth.post('/orders')
    user.cart = 0
    router.push('/orders')
  } catch (error) {
    // if(error instanceof Axioserror)來判斷是否是aiox的錯誤
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

(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.value.push(...data.result)
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
