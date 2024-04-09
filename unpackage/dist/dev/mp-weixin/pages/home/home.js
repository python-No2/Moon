"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (TopBar + Calendar)();
}
const TopBar = () => "./TopBar.js";
const Calendar = () => "./Calendar.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "home",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"], ["__file", "D:/Moon_TiaoZhanBei/Moon-app/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
