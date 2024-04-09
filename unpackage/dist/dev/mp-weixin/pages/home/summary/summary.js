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
    const goToAddRecord4 = () => {
      common_vendor.index.navigateTo({
        url: utils_url.Pages.Sleep
      });
    };
    const goBack = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.o(($event) => goToAddRecord1()),
        c: common_vendor.o(($event) => goToAddRecord4())
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/TechMoon-app/pages/home/summary/summary.vue"]]);
wx.createPage(MiniProgramPage);
