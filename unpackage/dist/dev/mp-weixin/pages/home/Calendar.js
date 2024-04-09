"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Calendar",
  setup(__props) {
    const year = common_vendor.ref("");
    const month = common_vendor.ref("");
    const day = common_vendor.ref("");
    const dayDigit = common_vendor.ref(0);
    const dateArr = common_vendor.ref([]);
    const addZero = (date) => {
      return date.toString().padStart(2, "0");
    };
    const getDate = (newDate) => {
      const date = newDate;
      year.value = date.getFullYear().toString();
      month.value = addZero(date.getMonth() + 1);
      day.value = addZero(date.getDate());
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
      const monthNum = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
      const dayNum = date.getDate();
      dateArr.value = [];
      for (let i = 1; i <= monthNum; i++) {
        dateArr.value.push(i);
      }
      for (let i = 0; i < firstDay; i++) {
        dateArr.value.unshift(-1);
      }
      dayDigit.value = dayNum;
    };
    common_vendor.onMounted(() => {
      getDate(/* @__PURE__ */ new Date());
    });
    const showPanel = common_vendor.ref(false);
    const goToPanel = (selectedData) => {
      const date = /* @__PURE__ */ new Date();
      const today = date.getDate();
      if (selectedData == today) {
        showPanel.value = !showPanel.value;
      }
    };
    const hidePanel = () => {
      showPanel.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(year.value),
        b: common_vendor.t(month.value),
        c: common_vendor.f(dateArr.value, (item, index, i0) => {
          return common_vendor.e({
            a: item === -1
          }, item === -1 ? {} : {
            b: common_vendor.t(item),
            c: item === dayDigit.value ? 1 : ""
          }, {
            d: item,
            e: common_vendor.o(($event) => goToPanel(item), item)
          });
        }),
        d: showPanel.value
      }, showPanel.value ? common_vendor.e({
        e: showPanel.value
      }, showPanel.value ? {
        f: common_vendor.t(year.value),
        g: common_vendor.t(month.value),
        h: common_vendor.t(day.value),
        i: common_vendor.o(() => {
        })
      } : {}, {
        j: common_vendor.o(hidePanel)
      }) : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9fe07f7e"], ["__file", "D:/Moon_TiaoZhanBei/Moon-app/pages/home/Calendar.vue"]]);
wx.createComponent(Component);
