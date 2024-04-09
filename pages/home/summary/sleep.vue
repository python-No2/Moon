<template>
	<view class="background">
		<view class="topbar">
			<view class="go-back">
				<image class="go-back-icon" src="/static/img/goback-icon.png" @click="goBack()"></image>
			</view>
			<view class="title">睡眠记录</view>
			<image class="boundary-line" src="../../../static/img/line.png"></image>
		</view>
		<view class="clock-box">
			<view class="switch-clock1" @click="toggleSwith(1)">
				<image class="check-mark1" :src="switch1Icon"></image>
				<view class="switch-title">按时间</view>
			</view>
			<view class="clock-table">
				<view class="start-time">
					<image class="clock" src="../../../static/home/clock-start.png"></image>
					<view class="start-title">开始时间</view>
					<view class="start-clock">前一天22:00</view>
					<image class="choose-time" src="/static/home/choose-time-icon.png"></image>
				</view>
				<image class="divider-line" src="../../../static/img/line.png"></image>
				<view class="end-time">
					<image class="clock" src="../../../static/home/clock-start.png"></image>
					<view class="end-title">结束时间</view>
					<view class="end-clock">前一天22:00</view>
					<image class="choose-time" src="/static/home/choose-time-icon.png"></image>
				</view>
			</view>
			<view class="switch-clock2" @click="toggleSwith(2)">
				<image class="check-mark2" :src="switch2Icon"></image>
				<view class="switch-title">按时长</view>
			</view>
			<view class="time-table">
				<image class="sleep" src="/static/home/sleep-icon.png"></image>
				<view class="time-title">睡眠时长</view>
				<view class="total-time">8时30分</view>
			</view>
			<image class="divider-line2" src="../../../static/img/line.png"></image>
			<view class="record-date">
				<image class="date" src="/static/home/date-icon.png"></image>
				<view class="date-title">记录日期</view>
				<view class="current-date">2024-04-08(今天)</view>
			</view>
		</view>
		<view class="bottom-bar">
			<view class="save-box">
				<view class="save-title">保存</view>
			</view>
		</view>
	</view>
</template>

<script setup lang = "ts">
	import { ref } from 'vue';
	
	const goBack = () =>{
		uni.navigateBack({
			delta: 1
		})
	}
	
	const switch1Icon = ref("/static/home/check-pink-icon.png");
	const switch2Icon = ref("/static/home/check-gray-icon.png");
	
	const toggleSwith = (index : number)=> {
		if (index === 1) {
			switch1Icon.value = "/static/home/check-pink-icon.png";
			switch2Icon.value = "/static/home/check-gray-icon.png";
		} else if (index === 2) {
			switch1Icon.value = "/static/home/check-gray-icon.png";
			switch2Icon.value = "/static/home/check-pink-icon.png"
		}
	}
</script>

<style scoped lang="scss">
	.background{
		background-color: #FFF4F4;
		height: 216.74vw;
		position: relative;
	}
	.topbar{
		.go-back{
			.go-back-icon{
				position: absolute;
				width: 3.6vw;
				height: 6.04vw;
				left: 3.72vw;
				top: 15vw;
			}
		}
		.title{
			position: absolute;
			left: 40vw;
			top: 14vw;
			font-size: 4.6vw;
			letter-spacing: 0.3vw;
			color: #FF6666;
		}
		.boundary-line{
			position: absolute;
			top: 105px;
			width: 378.01px;
			height: 1.2px;
			left: 6%;
		}
	}
	.clock-box{
		position: absolute;
		top: 35vw;
		.switch-clock1{
			display: flex;
			flex-direction: row;
			.check-mark1{
				width: 3.93vw;
				height: 3.93vw;
				margin-left: 6vw;
			}
			.switch-title{
				color: #E59797;
				margin-left: 3vw;
				font-size: 3.8vw;
			}
		}
		.clock-table{
			margin-left: 13vw;
			margin-top: 5vw;
			background-color: #FFE0E0;
			width: 75.46vw;
			height: 32.83vw;
			border-radius: 3vw;
			box-shadow: 0vw 0.8vw 1.6vw rgba(0, 0, 0, 0.2);
			.start-time{
				display: flex;
				flex-direction: row;
				.clock{
					width: 7.41vw;
					height: 7.41vw;
					margin-top: 4vw;
					margin-left: 5vw;
				}
				.start-title{
					color: #F48A8A;
					margin-top: 5vw;
					margin-left: 4vw;
				}
				.start-clock{
					margin-top: 5vw;
					color: #E7ABAB;
					margin-left: 15vw;
				}
				.choose-time{
					margin-top: 6vw;
					margin-left: 2vw;
					width: 3.5vw;
					height: 5vw;
				}
			}
			.divider-line{
				width: 65vw;
				height: 0.3vw;
				margin-left: 4.5vw;
				margin-top: 5vw;
			}
			.end-time{
				display: flex;
				flex-direction: row;
				.clock{
				width: 7.41vw;
				height: 7.41vw;
				margin-top: 4vw;
				margin-left: 5vw;
				}
				.end-title{
					color: #F48A8A;
					margin-top: 5vw;
					margin-left: 4vw;
				}
				.end-clock{
					margin-top: 5vw;
					color: #E7ABAB;
					margin-left: 15vw;
				}
				.choose-time{
					margin-top: 6vw;
					margin-left: 2vw;
					width: 3.5vw;
					height: 5vw;
				}
			}
		
		}
		.switch-clock2{
			display: flex;
			flex-direction: row;
			margin-top: 10vw;
			.check-mark2{
				width: 3.93vw;
				height: 3.93vw;
				margin-left: 6vw;
			}
			.switch-title{
				color: #E59797;
				margin-left: 3vw;
				font-size: 3.8vw;
			}
		}
		.time-table{
			margin-top: 5vw;
			margin-left: 13vw;
			background-color: #FFE0E0;
			width: 75.46vw;
			height: 17.56vw;
			border-radius: 3vw;
			box-shadow: 0vw 0.8vw 1.6vw rgba(0, 0, 0, 0.2);
			display: flex;
			flex-direction: row;
			.sleep{
				width: 7.20vw;
				height: 7vw;
				margin-top: 5vw;
				margin-left: 5vw;
			}
			.time-title{
				color: #F48A8A;
				margin-top: 6vw;
				margin-left: 5vw;
			}
			.total-time{
				color: #FFA1A1;
				margin-top: 6.5vw;
				margin-left: 25vw;
				font-size: 3.4vw;
			}
		}
		.divider-line2{
			width: 75.92vw;
			height: 0.3vw;
			margin-left: 13vw;
			margin-top: 15vw;
		}
		.record-date{
			margin-top: 8vw;
			margin-left: 13vw;
			background-color: #FFE0E0;
			width: 75.46vw;
			height: 17.56vw;
			border-radius: 3vw;
			box-shadow: 0vw 0.8vw 1.6vw rgba(0, 0, 0, 0.2);
			display: flex;
			flex-direction: row;
			.date{
				width: 7.20vw;
				height: 7vw;
				margin-top: 5vw;
				margin-left: 5vw;
			}
			.date-title{
				color: #F48A8A;
				margin-top: 6vw;
				margin-left: 5vw;
			}
			.current-date{
				color: #FFA1A1;
				margin-top: 6.5vw;
				margin-left: 10vw;
				font-size: 3.4vw;
			}
		}
	}
	.bottom-bar{
		position: absolute;
		bottom: 0;
		background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
		width: 100vw;
		height: 20vw;
;		.save-box{
			background: linear-gradient(180deg, #FFC2C2 0%, rgba(255, 225, 225, 0.58) 100%);
			width: 49.53vw;
			height: 9.77vw;
			margin-top: 4vw;
			margin-left: 25vw;
			border-radius: 3vw;
			box-shadow: 0vw 0.8vw 1.6vw rgba(0, 0, 0, 0.2);
			display: flex;
			align-items: center;
			justify-content: center;
			.save-title{
				color: #FF6868;
			}
		}
	}
</style>