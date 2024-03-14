"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_url = require("../../utils/url.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "TopBar",
  setup(__props) {
    const goToSummery = () => {
      common_vendor.index.navigateTo({
        url: utils_url.Pages.Summery
      });
    };
    const goToState = () => {
      common_vendor.index.navigateTo({
        url: utils_url.Pages.record_status
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => goToState()),
        b: common_vendor.o(($event) => goToSummery())
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0d5084df"], ["__file", "E:/挑战杯temp/Moon/pages/home/TopBar.vue"]]);
wx.createComponent(Component);
