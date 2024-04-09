<template>
	<view class="login">
		<button @click="wxLogin">微信登录</button>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			wxLogin(){
				uni.login({
					desc: "登录的数据",
					success: function(lres) {
						console.log(lres, "返回的登录信息")
						uni.getUserInfo({
							success: function(ures) {
								console.log(ures, "返回的用户信息");
								console.log("siga",ures.signature);
								uni.request({
									url: 'http://47.116.167.84:8081/login',
									method: 'POST',
									data: {
										code: lres.code,
										rawData: ures.rawData,
										signature: ures.signature,
										encrypteData: ures.encryptedData,
										iv: ures.iv	
									},
									header: {
										'content-type': 'application/json'
									},
									success: (res) =>{
										console.log('请求成功', res);
									},
									fail: (err) => {
										console.log('请求失败', err);
									}
								})
							}
						})
					}
				})
			}
		}
	}

</script>

<style scoped>

</style>
