<template>
  <div>
    <!-- userInfo如果为空证明没有登录 -->
    <button v-if="!userInfo" @click="login">获取头像昵称</button>
    <div v-else class="userInfo">
      <img :src="userInfo.avatarUrl" alt="avatar">
      <span>{{userInfo.nickName}}</span>
      <button type="button" @click="loginOut">退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: '' // 用于存放获取的用户信息
    };
  },
  mounted() {
    let user = wx.getStorageSync('user');
    if (user) {
      this.userInfo = user;
    }
  },
  methods: {
    // 授权登录
    login() {
      wx.getUserProfile({
        desc: '必须授权才能继续使用',
        success: (res) => {
          console.log('授权成功', res);
          wx.setStorageSync('user', res.userInfo);
          this.userInfo = res.userInfo;
        },
        fail: (err) => {
          console.log('授权失败', err);
        }
      });
    },
    // 退出登录
    loginOut() {
      this.userInfo = '';
      // 清空缓存
      wx.setStorageSync('user', null);
    }
  }
};
</script>

<style scoped>
.userInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userInfo img {
  width: 200rpx;
  height: 200rpx;
  border-radius: 200rpx;
}
</style>
