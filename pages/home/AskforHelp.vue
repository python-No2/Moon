<template>
	<view class="frame">
		<image class="help-icon" src="/static/img/help-icon.png"></image>
		<image class="help-title" src="/static/img/help-title.png"></image>
		<text class="help">在线问诊</text>
	</view>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
	.frame{
		position: relative;
		.help-icon{
			width: 67px;
			height: 67px;
			margin-left: 300px;
			margin-top: 30px;
			
		}
		.help-title{
			position: absolute;
			width: 121px;
			height: 40px;
			top: 80px;
			left: 273px;
		}
		.help{
			position: absolute;
			top: 80px;
			left: 293px;
			font-size: 20px;
			color: #ffffff;
		}
	}
</style>