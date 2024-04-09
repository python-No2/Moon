<template>
	<view class="user-info-box">
	  <view class="info-box">
	    <text class="username">{{ "游客" }}</text>
	    <text class="username" @click="onLogin">/登录</text>
	  </view>
	</view>
</template>
<script>
	export default {
		methods: {
			// 登录按钮触发
		async onLogin() {
			const [, userProfile] = await uni.getUserProfile({
				desc: "获取用户信息",
				lang: "zh_CN",
			});
			
			if (userProfile) {
				const [, loginInfo] = await uni.login({ provider: "weixin" });
				if (loginInfo) {
					const { code } = await loginInfo;
					const {
						userInfo: { avatarUrl, nickName },
					} = userProfile;
					const params = {
						code,
						avatarUrl,
						userName: nickName,
					};
					const { data } =await wxLogin(params);
					this.$api.msg("登录成功");
				}
			}
		}
	},
}
</script>