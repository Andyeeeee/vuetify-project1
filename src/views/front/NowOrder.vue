<template>
	<h1 style="color: black">訂單進度</h1>
	<div style="display: flex; justify-content: center; width: 80%; height: 500px; margin: auto; background-color: #004886">
		<div style="width: 50%; text-align: center; border: 3px solid black">
			<h2 class="title-box" style="background-color: #fcae11; color: #000">
				目前訂單
			</h2>
			<tr v-for="order in orders" :key="order._id">
				<!-- <td>{{ order.user._id }}</td> -->
				<!-- <td>{{ order.user.account }}</td> -->
				<td>
					<ul>
						<li v-for="item in order.cart" :key="item._id">
							{{ item.product._id }}
						</li>
					</ul>
				</td>
			</tr>
		</div>
		<div style="width: 50%; border: 3px solid black">
			<h2 class="title-box" style="background-color: #fcae11; color: #000">
				已完成訂單
			</h2>

			<!-- 迴圈 -->
		</div>
	</div>
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
</script>
