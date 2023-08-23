<template>
	<div id="AboutUss">
		<tite></tite>

		<section class="section2">
			<h1>關於我們</h1>
		</section>

		<section class="section3 text-center">
			<v-container>
				<h2>公告</h2>
				<div class="announcement">
					<div>1.周一公休</div>
					<div>2.限時活動</div>
					<div>3.套餐優惠</div>
					<div>4.分享送好禮</div>
				</div>
			</v-container>
		</section>

		<section>
			<v-container>
				<h2>室內環境</h2>
				<v-row>
					<v-col cols="12" md="6" lg="3"><v-img src="@/image/aboutus/picture1.jpg"></v-img></v-col>
					<v-col cols="12" md="6" lg="3"><v-img src="@/image/aboutus/picture2.jpg"></v-img></v-col>
					<v-col cols="12" md="6" lg="3"><v-img src="@/image/aboutus/picture3.jpg"></v-img></v-col>
					<v-col cols="12" md="6" lg="3"><v-img src="@/image/aboutus/picture4.jpg"></v-img></v-col>
				</v-row>
			</v-container>
		</section>

		<section>
			<v-container>
				<h2>位置</h2>

				<!-- <v-row>
					<v-col
						cols="6"
						ms="12"
						><iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14455.5533402834!2d121.5886185414007!3d25.071773595680554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442acbd0ba9a091%3A0xe8d86c74e7466665!2z5rKQ5bCNIE1vb25EYXkg576p5byP5bCP5bua5oi_!5e0!3m2!1szh-TW!2stw!4v1692256444950!5m2!1szh-TW!2stw"
							width="600"
							height="450"
							style="border: 0"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe
					></v-col>
					<v-col
						cols="6"
						ms="12"
						>0.</v-col
					>
				</v-row> -->

				<div class="flex center">
					<div>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14455.5533402834!2d121.5886185414007!3d25.071773595680554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442acbd0ba9a091%3A0xe8d86c74e7466665!2z5rKQ5bCNIE1vb25EYXkg576p5byP5bCP5bua5oi_!5e0!3m2!1szh-TW!2stw!4v1692256444950!5m2!1szh-TW!2stw"
							width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
					<div class="right">
						<p>地址:114台北市內湖區民權東路六段296巷36號</p>
						<p>地址:電話：(02) 2631 2626</p>
						<p>地址:LINE:123456</p>
					</div>
				</div>
			</v-container>
		</section>

		<section class="footr">
			<!-- <footr></footr> -->
			<section>
  <div id="footer">
    <img src="@/image/icon.jpg" alt="" >
    <div>114台北市內湖區民權東路六段296巷36號</div>
    <div>訂位專線：(02) 2631 2626</div>
    <div>統編： 318649922</div>
  </div>
			</section>

		</section>
	</div>
</template>

<script setup>
import tite from '@/components/TitlePicture.vue'
// import footr from '@/components/FooTer.vue'
// 這邊很詭異
</script>
<style>
h1 {
	text-align: center;
}
</style>
