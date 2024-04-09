"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_url = require("../../../utils/url.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "summary",
  setup(__props) {
    const goToAddRecord1 = () => {
      common_vendor.index.navigateTo({
        url: utils_url.Pages.Temperature
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(
          //@ts-ignore
          (...args) => _ctx.goBack && _ctx.goBack(...args)
        ),
        b: common_vendor.o(($event) => goToAddRecord1())
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Moon_TiaoZhanBei/Moon-app/pages/home/summary/summary.vue"]]);
wx.createPage(MiniProgramPage);
