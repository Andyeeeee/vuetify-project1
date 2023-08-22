<template>
	<v-card>
		<div style="display: flex; background-color: #b3fff2; border: 5px #fcae11 solid">
			<div>
				<v-img
					:src="image"
					cover
					class="image"
					style="border-right: 5px #2b2b2b solid"
				></v-img>
			</div>
			<div
				class="food-name"
				style="color: #4bc96a"
			>
				<v-card-title>
					<router-link
						style="color: #000000 !important"
						:to="'/products/' + _id"
						class="text-primary text-decoration-none"
					>
						{{ name }}
					</router-link>
				</v-card-title>
				<v-card-text>
					<pre>{{ description }}</pre>
				</v-card-text>
			</div>
			<v-spacer></v-spacer>
			<div
				class="price-shoppimg"
				style="color: #000000"
			>
				<v-card-subtitle>${{ price }}</v-card-subtitle>
				<VBtn
					color="#003c6c"
					prepend-icon="mdi-cart"
					@click="addCart"
				></VBtn>
			</div>
		</div>
	</v-card>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/store/user'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()
const user = useUserStore()

const props = defineProps({
	_id: {
		type: String,
		default: () => ''
	},
	category: {
		type: String,
		default: () => ''
	},
	description: {
		type: String,
		default: () => ''
	},
	image: {
		type: String,
		default: () => ''
	},
	name: {
		type: String,
		default: () => ''
	},
	price: {
		type: Number,
		default: () => 0
	},
	sell: {
		type: Boolean,
		default: () => true
	}
})

const addCart = async () => {
	try {
		const { data } = await apiAuth.post('/users/cart', {
			product: props._id,
			quantity: 1
		})
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
</script>
