"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  methods: {
    goBack() {
      common_vendor.wx$1.navigateBack({
        delta: 1
        // 返回上一页面
      });
    },
    // 添加方法来处理选项卡的点击事件
    selectTab(event) {
      console.log(event.currentTarget.dataset.name);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goBack && $options.goBack(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Moon_TiaoZhanBei/Moon-app/pages/home/summary/summary.vue"]]);
wx.createPage(MiniProgramPage);
