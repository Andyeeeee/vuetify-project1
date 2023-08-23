<template>
	<!-- <tite></tite> -->
	<!-- <layout></layout> -->
	<div id="HomeView">
		<!-- <tite></tite> -->
		<swiper style="height: 500px;"></swiper>
		<!-- <section class="section1 main-picture">
			<v-img
				:width="auto"
				aspect-ratio="16/9"
				cover
				src="https://d37w6prdd1grkb.cloudfront.net/buzzdaily/2086_news_banner.jpg?ndt=104032"
			></v-img>
		</section> -->

		<section class="section2">
			<!-- 第一層 大類別 -->
			<h1 class="text-center">MEWU</h1>
			<v-card>
				<v-tabs v-model="tab" bg-color="#004886" class="tab tab-font" fixed-tabs>
					<v-tab value="one">主食</v-tab>
					<v-tab value="two">開胃菜</v-tab>
					<v-tab value="three">飲品</v-tab>
					<v-tab value="four">下午茶</v-tab>
				</v-tabs>

				<!-- 第一層 內框1 -->
				<v-card-text class="p-0">
					<v-window v-model="tab">
						<v-window-item value="one">
							<v-row class="border">
								<v-col cols="12" lg="12">
									<!-- 第二層 第一個 次類別  -->
									<!-- <v-card style="background-color: #004886"> -->
									<v-tabs v-model="tab1" bg-color="#004886" style="height: auto">
										<v-row class="margin-md0" style="margin: -12px -12px 0px -12px">
											<v-col cols="4" lg="2">
												<v-tab value="one1" style="width: 100%">青醬</v-tab></v-col>
											<v-col cols="4" lg="2">
												<v-tab value="two1" style="width: 100%">紅醬</v-tab></v-col>
											<v-col cols="4" lg="2">
												<v-tab value="three1" style="width: 100%">白醬</v-tab></v-col>
											<v-col cols="4" lg="2">
												<v-tab value="foure1" style="width: 100%">清炒</v-tab></v-col>
											<v-col cols="4" lg="2">
												<v-tab value="five1" style="width: 100%">粉紅醬</v-tab></v-col>
											<v-col cols="4" lg="2">
												<v-tab value="six1" style="width: 100%">義式燉飯</v-tab></v-col>
											<!-- <v-col cols="4"><div>1234</div></v-col>
											<v-col cols="4"><div>1234</div></v-col>
											<v-col cols="4"><div>1234</div></v-col>
											<v-col cols="4"><div>1234</div></v-col>
											<v-col cols="4"><div>1234</div></v-col>
											<v-col cols="4"><div>1234</div></v-col> -->
										</v-row>
									</v-tabs>
									<v-container>
										<!-- 第二層內框[青醬.紅醬.白醬]-->
										<v-card-text class="p-0 mtb">
											<v-window v-model="tab1">
												<!-- 餐點1 青醬 -->
												<v-window-item value="one1">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '主食' && product.category2 === '青醬'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>

												<!--餐點2 紅醬 -->
												<v-window-item value="two1">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '主食' && product.category2 === '紅醬'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>

												<!--餐點3 白醬 -->
												<v-window-item value="three1">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '主食' && product.category2 === '白醬'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>

												<!--餐點4 清炒 -->
												<v-window-item value="foure1">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '主食' && product.category2 === '清炒'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>

												<!--餐點5 粉紅醬 -->
												<v-window-item value="five1">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '主食' && product.category2 === '粉紅醬'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>

												<!--餐點6 其他 -->
												<v-window-item value="six1">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '主食' && product.category2 === '義式燉飯'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>
											</v-window>
										</v-card-text>
									</v-container>
									<!-- </v-card> -->
								</v-col>
							</v-row>
						</v-window-item>

						<!-- 第二類別2 -->
						<v-window-item value="two">
							<v-row class="border">
								<v-col cols="12" lg="12">
									<v-card style="background-color: #004886">
										<v-tabs v-model="tab2" bg-color="#004886" class="tab" fixed-tabs>
											<v-tab value="one2">輕鬆點</v-tab>
											<v-tab value="two2">炸物拼盤</v-tab>
											<v-tab value="three2">特色沙拉</v-tab>
											<v-tab value="foure2">薄餅披薩</v-tab>
										</v-tabs>

										<!-- 第二層內框 餐點 -->
										<v-card-text class="p-0 mtb">
											<v-window v-model="tab2">
												<v-window-item value="one2">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '開胃菜' && product.category2 === '輕鬆點'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>

												<v-window-item value="two2">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '開胃菜' && product.category2 === '炸物拼盤'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>

												<v-window-item value="three2">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '開胃菜' && product.category2 === '特色沙拉'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>
												<v-window-item value="foure2">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '開胃菜' && product.category2 === '薄餅披薩'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>
											</v-window>
										</v-card-text>
									</v-card>
								</v-col>
							</v-row>
						</v-window-item>

						<!-- 第一層 內框3 -->

						<v-window-item value="three">
							<v-row class="border">
								<v-col cols="12" lg="12">
									<!-- 第二層 第一個 飲品類次類別[現磨咖啡,壺茶,鮮榨果汁,其他]  -->
									<v-card style="background-color: #004886">
										<v-tabs v-model="tab3" bg-color="#004886" class="tab" fixed-tabs>
											<v-tab value="one3">現磨咖啡</v-tab>
											<v-tab value="two3">壺茶(熱飲)</v-tab>
											<v-tab value="three3">鮮榨果汁</v-tab>
											<v-tab value="foure3">其他</v-tab>
										</v-tabs>

										<!-- 第二層內框[青醬.紅醬.白醬]-->
										<v-card-text class="p-0 mtb">
											<v-window v-model="tab3">
												<!-- 餐點1 青醬 -->
												<v-window-item value="one3">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '飲品' && product.category2 === '現磨咖啡'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>

												<!--餐點2 紅醬 -->
												<v-window-item value="two3">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '飲品' && product.category2 === '茶'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>

												<!--餐點3 白醬 -->
												<v-window-item value="three3">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '飲品' && product.category2 === '鮮榨果汁'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>

												<!--餐點4 清炒 -->
												<v-window-item value="foure3">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '飲品' && product.category2 === '其他'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>
											</v-window>
										</v-card-text>
									</v-card>
								</v-col>
							</v-row>
						</v-window-item>

						<!-- 第一層 內框4 -->
						<v-window-item value="four">
							<v-row class="border">
								<v-col cols="12" lg="12">
									<!-- 第二層 第一個 次類別  -->
									<v-card style="background-color: #004886">
										<v-tabs v-model="tab4" bg-color="#004886" class="tab" fixed-tabs>
											<v-tab value="one4">甜點</v-tab>
											<v-tab value="two4">現烤鬆餅</v-tab>
											<v-tab value="three4">沐沐三明治</v-tab>
											<v-tab value="foure4">磚壓吐司</v-tab>
										</v-tabs>

										<!-- 第二層內框[青醬.紅醬.白醬]-->
										<v-card-text class="p-0 mtb">
											<v-window v-model="tab4">
												<!-- 餐點1 青醬 -->
												<v-window-item value="one4">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '下午茶' && product.category2 === '甜點'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>

												<!--餐點2 紅醬 -->
												<v-window-item value="two4">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '下午茶' && product.category2 === '現烤鬆餅'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>

												<!--餐點3 白醬 -->
												<v-window-item value="three4">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '下午茶' && product.category2 === '沐沐三明治'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>

												<!--餐點4 清炒 -->
												<v-window-item value="foure4">
													<v-container>
														<v-row>
															<template v-for="product in products" :key="product._id">
																<v-col cols="12" md="6" lg="6"
																	v-if="product.category === '下午茶' && product.category2 === '磚壓吐司'">
																	<ProductCard v-bind="product"> </ProductCard>
																</v-col>
															</template>
														</v-row>
													</v-container>
												</v-window-item>
											</v-window>
										</v-card-text>
									</v-card>
								</v-col>
							</v-row>
						</v-window-item>
					</v-window>
				</v-card-text>
			</v-card>
		</section>

		<section id="footer" style="text-align: center; background-color: #003158" class="section3">
			<img src="@/image/icon.jpg" alt="" width="120" style="margin: 50px" />
			<div>114台北市內湖區民權東路六段296巷36號</div>
			<div>訂位專線：(02) 2631 2626</div>
			<div>統編： 31864992</div>
		</section>

	</div>

</template>
<script setup>
import { api } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard.vue'
import layout from '@/components/FrontLayout.vue'
import tite from '@/components/TitlePicture.vue'

import swiper from '@/components/SwiPer.vue'

const createSnackbar = useSnackbar()

const products = ref([])

	; (async () => {
		try {
			const { data } = await api.get('/products')
			products.value.push(...data.result)
		} catch (error) {
			console.log(error)
			console.log(error.response.data.message)
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
<script>
export default {
	data: () => ({
		tab: null,
		tab1: null,
		tab2: null,
		tab3: null,
		tab4: null
	})
}
</script>
