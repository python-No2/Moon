<template>
	<view class = "background">
		<TopBar class="topbar"></TopBar>
		<Calendar class="calendar"></Calendar>
		<AskforHelp class="askforhelp"></AskforHelp>
		<TabBar class="tabbar"></TabBar>
	</view>
</template>

<script setup lang = "ts">
	import TopBar from "@/pages/home/TopBar.vue";
	import Calendar from "@/pages/home/Calendar.vue";
	import AskforHelp from "@/pages/home/AskforHelp.vue";
	import TabBar from "@/pages/home/TabBar.vue"
</script>

<style scoped lang="scss">
	.background{
		display: flex;
		flex-direction: column;
		background-color: #FFF4F4;
		background-image: url(/static/img/background1-picture.png);
		// background-image: url(/static/img/background2-picture.png);
		width: 430px;
		height: 932px;
		.calendar{
			display: flex;
			justify-content: center;
			margin-top: 50px;
		}
		.tabbar{
			position: absolute;
			bottom: -50px;
		}
	}
</style>