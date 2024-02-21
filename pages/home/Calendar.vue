<template>
	<view class="container">
		<view class="year">2024</view>
		<view class="month">/01</view>
		<image class="frame" src="/static/img/calender-picture.png"></image>
	</view>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
	.container{
		position: relative;
		.year{
			position: absolute;
			font-size: 64px;
			color: #FF4D75;
			margin-top: 70px;
			z-index: 1;
		}
		.month{
			margin-top: 140px;
			position: absolute;
			font-size: 64px;
			color: #FF4D75;
			z-index: 1;
			
		}
		.frame{
			width: 380px;
			height: 430px;
			margin-top: 170px;
			z-index: 0;
		}
	}
</style>