<template>
  <VCard>
    <VImg :src="image" cover height="200"></VImg>
    <VCardTitle>
      <RouterLink :to="'/products/' + _id" class="text-primary text-decoration-none">
        {{ name }}
      </RouterLink>
    </VCardTitle>
    <VCardSubtitle>${{ price }}</VCardSubtitle>
    <VCardText>
      <pre>{{ description }}</pre>
    </VCardText>
    <VCardActions>
      <VBtn color="primary" prepend-icon="mdi-cart" @click="addCart">加入購物車</VBtn>
    </VCardActions>
  </VCard>
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
