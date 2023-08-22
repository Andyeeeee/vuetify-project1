<template>
  <!-- <section style="background-color:#004886;"> -->
	<h1 style="color: black">訂單進度</h1>
	<div style="display: flex; justify-content: center; width: 80%; height: 500px; margin: auto; background-color: #004886">
		<div style="width: 50%; text-align: center; border: 3px solid black">
			<h2 class="title-box" style="background-color: #fcae11; color: #000">
				目前訂單
			</h2>
      <v-table>
          <!-- <thead style="background-color: #fcae11; color: black;">
            <tr>
              <td>使用者訂單</td>
            </tr>
          </thead> -->
          <!-- <tbody> -->
            <tr v-for="order in orders" :key="order._id">
           <td v-if="!order.status"> <v-btn width="100%" @click="ChangeStatus(order._id)">{{ order.user.account }}</v-btn></td>
            </tr>
          <!-- </tbody> -->
        </v-table>
		</div>
		<div style="width: 50%; border: 3px solid black">
			<h2 class="title-box" style="background-color: #fcae11; color: #000">
				已完成訂單
			</h2>
    <v-table>
      <tr v-for="(order, i) in orders" :key="order._id">
            <td v-if="order.status"><v-btn width="100%" @click="orders.splice(i,1)">{{ order.user.account }}</v-btn></td>
            </tr>
    </v-table>
		</div>
	</div>
  <!-- </section> -->
</template>
<script setup>
import { ref } from 'vue'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import TitlePicture from '@/components/TitlePicture.vue'

const createSnackbar = useSnackbar()

const orders = ref([])

	; (async () => {
		try {
			const { data } = await apiAuth.get('/orders/all')
			console.log(orders)
			orders.value.push(
				...data.result.map((order) => {
					order.total = order.cart.reduce((total, current) => total + current.product.price * current.quantity, 0)
					return order
				})
			)
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

  const ChangeStatus = async(value) => {
try {
  const { data } = await apiAuth.patch('/orders/' + value, {
    status: true
  })
  console.log(orders)
  const idx = orders.value.findIndex(item => item._id === value)
  orders.value[idx].status = true
} catch (error) {

}
  }
</script>
