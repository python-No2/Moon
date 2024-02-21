<template>
	<view class="tabbar">
		<image class="background" src="/static/img/tabBar-picture.png"></image>
		<image class="home-icon" src="/static/img/home-icon.png"></image>
	</view>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
	.tabbar{
		position: relative;
		.background{
			width: 431px;
			height: 78px;
			z-index: 0;
			
		}
		.home-icon{
			position: absolute;
			width: 23px;
			height: 26px;
			z-index: 1;
			
		}
	}
</style>