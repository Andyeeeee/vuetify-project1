<template>
	<TitlePicture style="height: 350px"></TitlePicture>
	<h1 style="color: black">會員編輯</h1>
	<div style="display: flex; justify-content: center; width: 80%; margin: auto; line-height: 100px">
		<div style="width: 50%; text-align: center">
			<img
				src="@/image/DataSeeting/head.jpg"
				alt=""
				height="300"
			/>
		</div>
		<div style="width: 50%; margin-left: 10px">
			<h2 style="text-align: left">ID:</h2>
			<h2 style="text-align: left">電話:09123456879</h2>
			<h2 style="text-align: left">信箱:</h2>
		</div>
	</div>
</template>
<script setup>
import TitlePicture from '@/components/TitlePicture.vue'
</script>
