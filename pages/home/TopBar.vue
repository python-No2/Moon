<template>
	<view class = "container">
		<view class = "goback-button" >
			<image class="goback" src="/static/img/goback-icon.png" />
		</view>
		<view class="toolbar">
			<view class = "start-button">
				<image class = "start-icon" src = "/static/img/start-icon.png"/>
				<text class="tool-name">月子开始</text>
			</view>
			<view class = "state-button">
				<image class = "state-icon" src = "/static/img/start-icon.png"/>
				<text class="tool-name" style="margin-left: 8px;">状态</text>
			</view>
			<view class = "summery-button">
				<image class = "summery-icon" src = "/static/img/start-icon.png"/>
				<text class="tool-name">状态记录</text>
			</view>
		</view>
		<view class= "divider-line">
			<image class="line" src="/static/img/line.png" />
		</view>
	</view>
</template>

<script setup lang="ts">
	// import { Icons } from "@/utils/url"
</script>

<style scoped lang="scss">
	.container{
		position: relative;
		.goback{
			position: absolute;
			width: 14.64px;
			height: 28.21px;
			left: 26px;
			top: 30px;
		}
		.toolbar{
			position: absolute;
			display: flex;
			flex-direction: row;
			top: 16px;
			left: 180px;
			.start-button{
				display: flex;
				flex-direction: column;
				.start-icon{
					width: 33px;
					height: 31px;
					margin-left: 4px;
				}
			}
			.state-button{
				display: flex;
				flex-direction: column;
				.state-icon{
					width: 33px;
					height: 31px;
					margin-left: 4px;
				}
			}
			.summery-button{
				display: flex;
				flex-direction: column;
				.summery-icon{
					width: 33px;
					height: 31px;
					margin-left: 4px;
				}
			}
		}	
	}
	.tool-name{
		color: #E59797;
		font-size: 10px;
	}
	.divider-line{
		.line{
			margin-top: 70px;
			width: 377.01px;
			height: 2px;
		}
	}
</style>