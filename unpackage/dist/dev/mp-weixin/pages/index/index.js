"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      hasUserInfo: true,
      //是否授权登录
      userInfo: null
    };
  },
  onLoad() {
    this.userAuthorized();
  },
  methods: {
    userAuthorized() {
      let that = this;
      common_vendor.index.getSetting({
        success: (data) => {
          if (data.authSetting["scope.userInfo"]) {
            common_vendor.index.getUserInfo({
              success: (data2) => {
                that.hasUserInfo = true, that.userInfo = data2.userInfo, that.onGetUserInfo(data2.userInfo);
              }
            });
          } else {
            that.hasUserInfo = false;
          }
        },
        fail: function(error) {
          console.log(error);
        }
      });
    },
    onGetUserInfo(userInfo) {
      let that = this;
      if (userInfo) {
        common_vendor.index.login({
          success: function(login_res) {
            common_vendor.index.getUserInfo({
              success: function(info_res) {
                common_vendor.index.request({
                  url: "http://localhost:8081/login",
                  method: "POST",
                  header: {
                    "content-type": "application/x-www-form-urlencoded"
                  },
                  data: {
                    code: login_res.code,
                    //临时登录凭证
                    rawData: info_res.rawData,
                    //用户非敏感信息
                    signature: info_res.signature,
                    //签名
                    encrypteData: info_res.encryptedData,
                    //用户敏感信息
                    iv: info_res.iv
                    //解密算法的向量
                  },
                  success: function(res) {
                    that.$store.state.userInfo = userInfo;
                    that.$store.state.hasLogin = true;
                    common_vendor.index.reLaunch({ url: "/pages/index/index" });
                  },
                  fail: function(error) {
                    console.log(error);
                  }
                });
                that.hasUserInfo = true, that.userInfo = userInfo;
              },
              fail: function(error) {
                common_vendor.index.reLaunch({ url: "/pages/first-pages/first-page" });
              }
            });
          }
        });
      } else {
        common_vendor.index.login({
          success: function(login_res) {
            common_vendor.index.getUserInfo({
              success: function(info_res) {
                common_vendor.index.request({
                  url: "http://localhost:8081/login",
                  method: "POST",
                  header: {
                    "content-type": "application/x-www-form-urlencoded"
                  },
                  data: {
                    code: login_res.code,
                    //临时登录凭证
                    rawData: info_res.rawData,
                    //用户非敏感信息
                    signature: info_res.signature,
                    //签名
                    encrypteData: info_res.encryptedData,
                    //用户敏感信息
                    iv: info_res.iv
                    //解密算法的向量
                  },
                  success: function(res) {
                    that.$store.state.userInfo = info_res.userInfo;
                    that.$store.state.hasLogin = true;
                    common_vendor.index.reLaunch({ url: "/pages/index/index" });
                  },
                  fail: function(error) {
                    console.log(error);
                  }
                });
                that.userInfo = info_res.userInfo;
                that.hasUserInfo = true;
              },
              fail: function(error) {
                common_vendor.index.reLaunch({ url: "/pages/index/index" });
              }
            });
          }
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.hasUserInfo
  }, !$data.hasUserInfo ? {
    b: common_vendor.o(($event) => $options.onGetUserInfo($data.userInfo))
  } : {
    c: $data.userInfo.avatarUrl
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/TechMoon-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
