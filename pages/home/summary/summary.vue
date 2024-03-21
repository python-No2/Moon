<template>
    <view class="navigation-bar">
        <!-- 返回按钮 -->
        <view class="back-button" @click="goBack">
            <image class="goback" src="/static/img/goback-icon.png" />
        </view>
        <!-- 中间标题 -->
        <view class="title">记录状态</view>
        <!-- 右侧操作按钮 -->
        <view class="operation">管理</view>
    </view>
    <!-- 边界线 -->
    <view class="border"></view>
    <!-- 选项卡 -->
    <view class="tabs">
        <view class="tab active">状态</view>
        <view class="tab">症状</view>
        <view class="tab">药物</view>
        <view class="tab">饮食</view>
        <view class="tab">运动</view>
    </view>
	
	    <view class="date-bar">2024/1/18</view>
		
	    <view class="info-container">
			<view class="info-bar-1">
				<view class="top-content">
					<view class="image-container">
						<image class="icon-1" src="/static/img/tiwenji.png" />
					</view>
					<text class="edit-title">编辑</text>
				</view>
				<view class="border_new"></view>
				<text class="add-record-1">添加体温记录</text>
				</view>
			<view class="info-bar-2">
				<view class="top-content">
					<view class="image-container">
						<image class="icon-2-1" src="/static/img/tizhong1.png" />
<!-- 						<image class="icon-2-2" src="/static/img/tizhong2.png" />
						<image class="icon-2-3" src="/static/img/tizhong3.png" /> -->
					</view>
					<text class="edit-title">编辑</text>
				</view>
				<view class="border_new"></view>
				<text class="add-record-2">添加体重记录</text>
			</view>
			<view class="info-bar-3">
				<view class="top-content">
					<view class="image-container">
						<image class="icon-3" src="/static/img/shengao.png" />
					</view>
					<text class="edit-title">编辑</text>
				</view>
				<view class="border_new"></view>
				<text class="add-record-3">添加身高记录</text>
			</view>
			<view class="info-bar-4">
				<view class="top-content">
					<view class="image-container">
						<image class="icon-4" src="/static/img/yueliang.png" />
					</view>
					<text class="edit-title">编辑</text>
				</view>
				<view class="border_new"></view>
				<text class="add-record-4">添加睡眠记录</text>
			</view>
	    </view>
	
    <!-- 页面内容 -->
    <view class="page-content">
        <!-- 页面其他内容 -->
    </view>
</template>

<script>
export default {
    methods: {
        goBack() {
            wx.navigateBack({
                delta: 1 // 返回上一页面
            });
        },
        // 添加方法来处理选项卡的点击事件
        selectTab(event) {
            console.log(event.currentTarget.dataset.name);
        }
    }
}
</script>

<style>
    .navigation-bar {
		margin-top:40px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 84px;
        background-color: rgba(255, 240, 240, 1);
    }

    .back-button,
    .title,
    .operation {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .goback {
        width: 14.64px;
        height: 26px;
    }

    .title {
        width: 136px;
        height: 38px;
        border-radius: 15px;
        background: rgba(255, 209, 209, 1);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 24px;
        font-weight: 400;
        color: rgba(255, 102, 102, 1);
        text-align: center;
        margin-bottom: 8px;
    }

    .operation {
        font-size: 24px;
        font-weight: 400;
        color: rgba(255, 102, 102, 1);
    }

    .border {
        margin-left: 25.99px;
        width: 377.01px;
        height: 0px;
        border: 1px solid rgba(244, 175, 175, 1);
    }
	.border_new {
		left: 74px;
		width: 275px;
		height: 0px;
		opacity: 1;
		margin-top: 20px;
		border: 1px solid rgba(244, 175, 175, 1);


	}

    .tabs {
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        margin-top: 10px; /* 调整为所需的值 */
    }

    .tab {
        padding: 5px;
        font-size: 16px;
        color: rgba(229, 151, 151, 1);
        /* 根据需要调整选项卡的样式 */
    }

    .active {
        color: rgba(255, 75, 75, 1); /* 活动选项卡的颜色 */
        border-bottom: 2px solid rgba(255, 102, 102, 1); /* 活动选项卡的下划线 */
		text-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);


    }
	.date-bar {
		width: 189px;
		height: 32px;
		border-radius: 15px;
		background: rgba(255, 227, 227, 1);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		font-size: 20px;
		font-weight: 400;
		color: rgba(255, 113, 113, 1);
		text-align: center;
		line-height: 32px; /* Adjust line height to the height of the bar for vertical centering */
		margin: 10px auto; /* Center the date bar horizontally */
	}
	.info-container {
		display: flex;
		flex-direction: column;
		align-items: center; /* Center the info bars horizontally */
		margin: auto; /* Center the container itself horizontally */
	}

	.info-content {
		flex-direction: column;
	}
	.info-bar-1 {
		width: 326px;
		height: 125px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: rgba(255, 235, 235, 1);
		margin-bottom: 37px;
		padding: 10px;
		border-radius: 20px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
	.info-bar-2 {
		width: 326px;
		height: 125px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: rgba(255, 224, 224, 1);
		margin-bottom: 37px;
		padding: 10px;
		border-radius: 20px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
	.info-bar-3 {
		width: 326px;
		height: 125px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: rgba(255, 214, 214, 1);
		margin-bottom: 37px;
		padding: 10px;
		border-radius: 20px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
	.info-bar-4 {
		width: 326px;
		height: 125px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: rgba(255, 201, 201, 1);
		margin-bottom: 37px;
		padding: 10px;
		border-radius: 20px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
	.top-content {
		width: 100%;
		display: flex;
	}

	.image-container {
		margin-top:20px;
		margin-left:24px;
		width: 40px; /* Adjust size as needed */
		height: 38px; /* Adjust size as needed */
		background: rgba(255, 173, 173, 1); /* Icon background color */
		border-radius: 10px; /* Adjust as needed */
		display: flex;
		justify-content: center;
		align-items: center; /* Space between icon and title */
	}
	.icon-1 {
		width: 8px;
		height: 28px;
		opacity: 1;
	}
	.icon-2-1 {
		margin-top: -10px;
		margin-left: 0px;
		width: 12px;
		height: 12px;
		opacity: 1;

	}
	.icon-2-2 {
		margin-top: -14px;
		margin-left: 8px;
		width: 5px;
		height: 0px;
		opacity: 1;
		transform: rotate(-90deg);

		border: 0.3px solid rgba(255, 173, 173, 1);


	}
	.icon-2-3 {
		margin-top: -14px;
		margin-left: 8px;
		width: 2px;
		height: 2px;
		opacity: 1;

	}
	.icon-3 {
		width: 9px;
		height: 28.46px;
		opacity: 1;

	}
	.icon-4 {

	width: 18px;
	height: 18.4px;
	opacity: 1;

	}

	.info-text {
		color: rgba(255, 75, 75, 1);
		font-size: 16px;
	}
	.edit-title {
		margin-top: -2px;
		margin-left: 198px;
		width:40px;
		height: 24px;
		opacity: 1;
		/** 文本1 */
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 23.17px;
		color: rgba(231, 171, 171, 1);
		text-align: left;
		vertical-align: top;

	}
	.add-record-1 {
		margin-top: 11px;
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 23.17px;
		color: rgba(231, 171, 171, 1);
		text-align: left;
		vertical-align: top;
	}
	.add-record-2 {
		margin-top: 11px;
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 23.17px;
		color: rgba(231, 157, 157, 1);
		text-align: left;
		vertical-align: top;
	}
	.add-record-3 {
		margin-top: 11px;
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 23.17px;
		color: rgba(231, 138, 138, 1);
		text-align: left;
		vertical-align: top;
	}
	.add-record-4 {
		margin-top: 11px;
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 23.17px;
		color: rgba(231, 115, 115, 1);
		text-align: left;
		vertical-align: top;
	}
    page {
        background-color: rgba(255, 240, 240, 1);
    }
</style>
