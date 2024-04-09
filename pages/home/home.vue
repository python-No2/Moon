<template>
	<div class = "background">
		<TopBar class="topbar"></TopBar>
		<Calendar class="calendar"></Calendar>
		<!-- <AskforHelp class="askforhelp"></AskforHelp> -->
		<!-- <TabBar class="tabbar"></TabBar> -->
	</div>
</template>

<script setup lang = "ts">
	import TopBar from "@/pages/home/TopBar.vue";
	import Calendar from "@/pages/home/Calendar.vue";
	// import AskforHelp from "@/pages/home/AskforHelp.vue";
	// import TabBar from "@/pages/home/TabBar.vue"
</script>

<style scoped lang="scss">
	.basic-background{
		background-color: #FFF4F4;
	}
	.background{
		display: flex;
		flex-direction: column;
		background-color: #FFF4F4;
		background-image: url(/static/img/background2-picture.png);
		height: 216.74vw;
		.calendar{
			display: flex;
			justify-content: center;
			margin-top: 15vw;
		}
		.tabbar{
			position: absolute;
			bottom: -50px;
		}
		.topbar{
			margin-top: 20vw;
		}
	}
</style>