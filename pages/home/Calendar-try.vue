<template>
<calendar-week-mouth :things="things" @chooseDay.stop="chooseDay" :isMorebtn="true" @toggleMove="toggleMove" ispopupShow :isWeek="isWeek">
</calendar-week-mouth>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, shallowRef } from 'vue'
import { onLoad, onShow } from '@dcloudio/uni-app'
onLoad(async (options) => {
    tag.value = Number(options.tag) || 1
    isWeek.value = tag.value === 1 || false
})
const tag = ref(1) //tag 1是周日历显示 2是月日历显示
const isWeek = ref(true)

/**
 * @description: 点击单个日期获取选中的日期
 * @param {*} date：选中的日期 xxxx-xx-xx
 * @return {*}
 */
const chooseDay = (date: string) => {
    checkedDay.value = date
}

// 点击更多
const toggleMove = () => {
    uni.navigateTo({ url: '/package-legal/task-list/task-list?tag=2' })
}
/**
things数据结构
重要的是task_time字段
[{
id: 4,
status: 3,
task_time: "2023-07-26",
task_title: "",
time: "222",
}]
*/
</script>
