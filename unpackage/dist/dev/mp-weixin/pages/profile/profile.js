"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    wxLogin() {
      common_vendor.index.login({
        desc: "登录的数据",
        success: function(lres) {
          console.log(lres, "返回的登录信息");
          common_vendor.index.getUserInfo({
            success: function(ures) {
              console.log(ures, "返回的用户信息");
              console.log("siga", ures.signature);
              common_vendor.index.request({
                url: "http://47.116.167.84:8081/login",
                method: "POST",
                data: {
                  code: lres.code,
                  rawData: ures.rawData,
                  signature: ures.signature,
                  encrypteData: ures.encryptedData,
                  iv: ures.iv
                },
                header: {
                  "content-type": "application/json"
                },
                success: (res) => {
                  console.log("请求成功", res);
                },
                fail: (err) => {
                  console.log("请求失败", err);
                }
              });
            }
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.wxLogin && $options.wxLogin(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/TechMoon-app/pages/profile/profile.vue"]]);
wx.createPage(MiniProgramPage);
