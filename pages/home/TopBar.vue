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
			<view class = "state-button" @click="goToState()">
				<image class = "state-icon" src = "/static/img/start-icon.png"/>
				<text class="tool-name" style="margin-left: 8px;">状态</text>
			</view>
			<view class = "summery-button" @click="goToSummery()">
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
	import { Pages } from "@/utils/url"
	const goToSummery = () => {
		uni.navigateTo({
			url:Pages.Summery
		})
	}
	const goToState = () =>  {
		uni.navigateTo({
			url:Pages.State
		})
	}
</script>

<style scoped lang="scss">
	.container{
		position: relative;
		.goback{
			position: absolute;
			width: 3.40vw;
			height: 6.04vw;
			left: 3.72vw;
			top: 5.81vw;
		}
		.toolbar{
			position: absolute;
			display: flex;
			flex-direction: row;
			top: 16px;
			left: 290px;
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
			position: absolute;
			top: 70px;
			width: 377.01px;
			height: 1px;
			left: 6%;
		}
	}
</style>