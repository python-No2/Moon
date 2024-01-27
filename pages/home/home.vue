<template>
	<view class = "background">
		<TopBar></TopBar>
	</view>
</template>

<script setup lang = "ts">
	import TopBar from "@/pages/home/TopBar.vue"
</script>

<style scoped lang="scss">
	.background{
		background-color: #FFF4F4;
		background-image: url(/static/img/background1-picture.png);
		// background-image: url(/static/img/background2-picture.png);
		width: 430px;
		height: 932px;
	}
</style>