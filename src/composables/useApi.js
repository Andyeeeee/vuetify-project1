
// 在這邊打包function  範例來自 02: 54: 00

import { api } from '@/plugins/axios'

export const useApi = () => {
  const getUser = async () => {
    const reponse = await axios.get('/user')
    return reponse
  }

  return {
    getUser
  }
}


// 在前端葉面使用(productview.vue)

const api = getApi()
api.getUser