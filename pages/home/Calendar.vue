<template>
	<view class="container">
		<view class="year">{{ year }}</view>
		<view class="month">/{{ month }}</view>
		<view class="calendar">
			<view v-for="(item, index) in dateArr" :key="item" class="date" @click="goToPanel(item)">
				<template v-if="item === -1" class="blank">&nbsp;</template>
				<template v-else>
					<view class="date-circle" :class="{'active': item === dayDigit}">{{ item }}</view>
				</template>
			</view>
		</view>
		<image class="frame" src="/static/home/calendar.png"></image>
	</view>
	
	<view v-if="showPanel" class="shadow" @click="hidePanel">
		<view v-if="showPanel" class="panel" @click.stop.prevent>
			<view class="today-date">{{ year }}/{{month}}/{{day}}</view>
			<view class="title">To Do List</view>
			<view class="list-item">Task1</view>
			<image src="/static/home/card-checkin.png" class="card"></image>
		</view>
	</view>
</template>

<script setup lang = "ts">
	import { onMounted, ref } from "vue";
	
	// 日历模块
	const year = ref("");
	const month = ref("");
	const day = ref("");
	const dayDigit = ref(0);
	const dayArr = ["日", "一", "二", "三", "四", "五", "六"];
	const dateArr = ref<number[]>([]);
	
	const addZero = (date : number) : string => {
		return date.toString().padStart(2,'0');
	}
	
	const getDate = (newDate:Date) : void =>{
		const date = newDate;
		year.value = date.getFullYear().toString();
		month.value = addZero(date.getMonth()+1);
		day.value = addZero(date.getDate());
		
		// 获取每月第一天是星期几
		const firstDay = new Date(date.getFullYear(),date.getMonth(),1).getDay();
		const monthNum = new Date(date.getFullYear(),date.getMonth()+1, 0).getDate();
		const dayNum = date.getDate()
		
		dateArr.value = [];
		for(let i = 1; i<= monthNum; i++){
			dateArr.value.push(i);
		}
		for(let i = 0; i<firstDay; i++){
			dateArr.value.unshift(-1);
		}
		
		dayDigit.value = dayNum;
	}
	
	onMounted(()=>{
		getDate(new Date());
	})
	
	// 弹窗模块
	const showPanel = ref(false);
	
	const goToPanel = (selectedData : number) => {
		const date = new Date();
		const today = date.getDate()
		if(selectedData == today){
			showPanel.value = !showPanel.value;
		}
	};
	
	const hidePanel = () => {
		showPanel.value = false;
	};
	
</script>

<style scoped lang="scss">
	.container{
		position: relative;
		.year{
			margin-left: 5vw;
			position: absolute;
			font-size: 14vw;
			letter-spacing: 0.3vw;
			color: #FF4D75;
			margin-top: 12vw;
			z-index: 1;
		}
		.month{
			margin-left: 5vw;
			margin-top: 30vw;
			position: absolute;
			font-size: 14vw;
			letter-spacing: 0.3vw;
			color: #FF4D75;
			z-index: 1;
			
		}
		.frame{
			width: 93vw;
			height: 108vw;
			margin-top: 37vw;
			z-index: 0;
		}
		.calendar{
			position: absolute;
			display: flex;
			flex-wrap: wrap;
			// gap: 2vw;
			margin-left: 5vw;
			width: 85vw;
			margin-top: 59vw;
			z-index: 1;
		}
		.date{
			// color: #FF7474;
			font-weight: 400;
			font-size: 4vw;
			width: calc(100% / 7);
			margin-top: 3.5vw;
			
		}
		.date-circle{
			color: #FF7474;
			background-color: #ffffff;
			width: 9vw;
			height: 9vw; 
			border-radius: 50%; 
			display: flex;
			justify-content: center;
			align-items: center;
			&.active{
				background-color: #FFADAD;
				color: #ffffff;
			}
		}
	}
	.shadow{
		position: fixed;
		top: 0;
		left: 0;
		background-color: #22222244;
		width: 100vw;
		height: 200vw;
		display: flex;
		z-index: 100;
	}
	.panel{
		position: fixed;
		background-color: #FFD2D2;
		border-radius: 4vw;
		top: 0;
		left: 30vw;
		width: 75vw;
		height: 176vw;
		box-shadow: -1.16vw 0 1.16vw rgba(0, 0, 0, 0.1); 
		.today-date{
			color: #FF5858;
			font-size: 7.44vw;
			margin-top: 10vw;
			margin-left: 15vw;
		}
		.title{
			color: #FF5858;
			font-size: 6vw;
			margin-left: 20vw;
			
		}
		.list-item{
			color: #FF5858;
			background-color: #FFEFEF;
			width: 65vw;
			height: 20vw;
			margin-left: 2.5vw;
			margin-top: 3vw;
			border-radius: 2vw;
		}
		.card{
			position: fixed;
			bottom: 10vw;
			left: 44vw;
			width: 45vw;
			height: 47vw;
		}
	}
</style>