<template>
  <div id="OrdersView">

    <v-container>
      <v-row>
        <v-col cols="12">
          <h3 class="text-center">訂單管理</h3>
        </v-col>
        <v-col cols="12">
          <v-table>
            <thead style="color: black;">
              <tr>
                <td>ID</td>
                <td>日期</td>
                <td>使用者訂單</td>
                <td>金額</td>
                <td>商品</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order._id">
                <td>{{ order._id }}</td>
                <td>{{ new Date(order.date).toLocaleString() }}</td>
                <td>{{ order.user.account }}</td>
                <td>{{ order.total }}</td>
                <td>
                  <ul>
                    <li v-for="item in order.cart" :key="item._id">
                      {{ item.product.name }} * {{ item.quantity }}
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

const orders = ref([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    orders.value.push(...data.result.map(order => {
      order.total = order.cart.reduce((total, current) => total + (current.product.price * current.quantity), 0)
      return order
    }))
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
