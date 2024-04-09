"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "sleep",
  setup(__props) {
    const goBack = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    const switch1Icon = common_vendor.ref("/static/home/check-pink-icon.png");
    const switch2Icon = common_vendor.ref("/static/home/check-gray-icon.png");
    const toggleSwith = (index) => {
      if (index === 1) {
        switch1Icon.value = "/static/home/check-pink-icon.png";
        switch2Icon.value = "/static/home/check-gray-icon.png";
      } else if (index === 2) {
        switch1Icon.value = "/static/home/check-gray-icon.png";
        switch2Icon.value = "/static/home/check-pink-icon.png";
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => goBack()),
        b: switch1Icon.value,
        c: common_vendor.o(($event) => toggleSwith(1)),
        d: switch2Icon.value,
        e: common_vendor.o(($event) => toggleSwith(2))
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8d49d028"], ["__file", "D:/TechMoon-app/pages/home/summary/sleep.vue"]]);
wx.createPage(MiniProgramPage);
