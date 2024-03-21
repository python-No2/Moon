<template>
    <view class="calender-container">
        <view class="calender-content">
            <!-- 头部 -->
            <view class="calender-title" v-if="isWeek">
                <view class="calender-title-left">{{ checkedDay }}</view>
                <view class="calender-title-morebtn" v-if="isMorebtn" @click="toggleMove">更多</view>
                <view class="calender-title-right" @click="popupShowBtn" v-if="ispopupShow">？</view>
            </view>
            <view class="calender-title" v-if="!isWeek">
                <view class="calender-title-chevronl" @click="changeMonth(-1)">
                    <text class="iconfont icon-back text-[28rpx]"></text>
                </view>
                <view class="calender-title-mouth">{{ MoutnTitle }}</view>
                <view class="calender-title-chevronr calender-title-chevronr-right">
                    <text class="iconfont icon-right text-[28rpx]" @click="changeMonth(1)"></text>
                </view>
            </view>
            <!-- 星期头部 -->
            <view class="calender-week-head">
                <view class="calender-week-head-item" v-for="(item, index) in WEEK_LIST" :key="index">
                    {{ item.text }}
                </view>
            </view>

            <transition name="fade">
                <view class="calender-month-container" :class="{ transition: transition }" :style="{
                    height: isWeek ? '120rpx' : '540rpx'
                }">
                    <view v-for="(month, index) in monthList" :key="index" class="calender-month-item">
                        <view v-for="(week, weekindex) in month" :key="weekindex" class="calender-month-week">
                            <!--   :class="{ ischecked: checkedDay == day.date, istoday: day.istoday }" -->
                            <view v-for="(day, dayindex) in week" :class="{ ischecked: checkedDay == day.date }"
                                @click.stop="chooseDay(day)" :key="dayindex" class="calender-month-week-item">
                                <view class="calender-week-day" :class="{
                                    ischecked: checkedDay == day.date,
                                    othermonth: day.othermonth
                                }">
                                    <span class="calender-one-day">
                                        <i class="day">{{
                                            day.othermonth === -1 || day.othermonth === 1
                                            ? ''
                                            : day.day
                                        }}</i>
                                    </span>

                                    <!-- 有事项标记 -->
                                    <view class="thing" v-if="day.thing.task_time != null">
                                        <i class="dot"></i>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </transition>
        </view>

        <slot></slot>
    </view>
    <!-- 日历问号提示弹出框 -->
    <w-calender-popup :popupShow="popupShow"></w-calender-popup>
</template>
<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'

const props = withDefaults(
    defineProps<{
        isWeek: boolean
        things: Array<any> //日期对应的相关数据 数据格式 一维数组
        ispopupShow: boolean
        isMorebtn: boolean
    }>(),
    {
        isWeek: true, // true周 false 月
        ispopupShow: true, // 是否显示？问号弹窗 默认显示
        isMorebtn: false //是否显示日历更多按钮 默认不显示
    }
)

const emits = defineEmits(['chooseDay', 'toggleMove']) //组件传递数据
const popupShow = ref<boolean>(false) //是否显示日历问号提示
// 打开提示框
const popupShowBtn = () => {
    popupShow.value = !popupShow.value
}

// 头部星期列表
const WEEK_LIST = [
    {
        text: '日'
    },
    {
        text: '一'
    },
    {
        text: '二'
    },
    {
        text: '三'
    },
    {
        text: '四'
    },
    {
        text: '五'
    },
    {
        text: '六'
    }
]
const dateThing: any = ref([]) //某天事项

// const things: any = ref([]) // 全部事项，用来插入到日历中
const dispDate = ref<Date>(new Date()) //当前时间

type DayType = {
    date?: string | number
    istoday?: boolean
    othermonth?: boolean
    thing?: []
}
type MonthList = DayType[]
const monthList: Record<string, any> = ref<MonthList>([])
const today = ref<Date>(new Date()) //当前时间
const MoutnTitle = ref('') //当前月份 x-x格式
const checkedDay = ref('') //选中时间
const currentDay = ref<Date>(new Date()) //当前时间
const transition = ref<boolean>(true) //是否显示动画

const get3FullYear = ref(dispDate.value.getFullYear()) //定义当前年
const get3Monthz = ref(dispDate.value.getMonth()) //定义当前月
onMounted(() => {
    setTimeout(() => {
        todayDate()
        props.isWeek ? get3week() : get3month(get3FullYear.value, get3Monthz.value)
        initCalenderInfo()
    }, 200)
})
watch(
    () => props.things,
    async () => {
        await nextTick()
        todayDate()
        props.isWeek ? get3week() : get3month(get3FullYear.value, get3Monthz.value)
        initCalenderInfo()
    },
    { immediate: true }
)
const selectDay = ref<Date>(new Date())
/**
 * 转换时间格式
 * @param date 标准时间
 */
const formatDateTime = (date: Date): string => {
    const y = date.getFullYear()
    let m: string = date.getMonth() + 1 + ''
    m = Number(m) < 10 ? '0' + m : m
    let d = date.getDate() + ''
    d = Number(d) < 10 ? '0' + d : d
    return y + '-' + m + '-' + d
}

/**
 * 获取今天日期
 */
const todayDate = () => {
    checkedDay.value = formatDateTime(today.value)
    selectDay.value = new Date(checkedDay.value)
    MoutnTitle.value = formatDateTime(today.value).substring(0, 7)
}
/**
 * 初始化当天事项
 */
const initCalenderInfo = () => {
    const todayThing = monthList.value
        .flat(2)
        .find((item: any) => item.date === checkedDay.value)?.thing
    dateThing.value = todayThing || []
}
/**
 * 返回该天事项
 * @param year 年
 * @param month 月
 * @param day 日
 */
const ifOrder = (year: number, month: number, day: number) => {
    const dateTime = format(year, month, day)
    let dateItem = {}
    props.things.map((item: any) => {
        if (dateTime === item.task_time) {
            dateItem = item
        }
    })
    return dateItem
}

/**
 * 转换时间
 * @param year 年
 * @param month 月
 * @param day 日
 */
const format = (year: number, month: number, day: number | string) => {
    month++
    const m = month < 10 ? '0' + month : month
    Number(day) < 10 && (day = '0' + day)
    return year + '-' + m + '-' + day
}

/**
 * 选中某一天
 * @param year 年
 * @param month 月
 * @param day 日
 * @param othermonth 其他月份，当前月前面空值
 * @param mode 类型，'month','week'
 * @param thing 事项
 */
interface chooseDayParams {
    year: number
    month: number
    day: number
    othermonth: number
    mode: string
    thing: Thing[]
}

interface Thing {
    date: string
    infos?: ThingInfo[]
}

interface ThingInfo {
    title: string
    address: string
    dates: string
}

/**
 * @description: 选中日期
 * @param {*} year
 * @param {*} month
 * @param {*} day
 * @param {*} othermonth
 * @param {*} mode
 * @param {*} thing
 * @return {*}
 */
const chooseDay = ({ year, month, day, othermonth, mode, thing }: chooseDayParams): void => {
    currentDay.value = new Date(year, month - 1, day) //标准时间
    checkedDay.value = format(year, month - 1, day) //"2020-11-11"
    if (othermonth && mode === 'month') {
        const tmpDt = new Date(dispDate.value.getFullYear(), dispDate.value.getMonth() - othermonth)
        const maxday = tmpDt.getDate()
        const days = maxday < day ? maxday : day
        dispDate.value = new Date(year, month - othermonth, days)
        changeIndex(othermonth || 0, true)
    } else {
        dispDate.value = currentDay.value
    }
    dateThing.value = thing || []
    emits('chooseDay', checkedDay.value)
}

/**
 * 获取三周
 */
const get3week = () => {
    const year = dispDate.value.getFullYear()
    const month = dispDate.value.getMonth()
    const day = dispDate.value.getDate()
    monthList.value = []
    monthList.value.push(getWeek(year, month, day - 7))
    monthList.value.push(getWeek(year, month, day))
    monthList.value.push(getWeek(year, month, day + 7))
}

/**
 * 获取星期
 * @param year 为选中当天的年
 * @param month 为选中当天的月
 * @param day 为选中当天的日
 */
const getWeek = (year: number, month: number, day: number) => {
    const dt = new Date(year, month, day)
    const weekArr = []
    const dtFirst = new Date(year, month, day - ((dt.getDay() + 7) % 7))
    const week = []
    //循环选中当天所在那一周的每一天
    for (let j = 0; j < 7; j++) {
        const newdt = new Date(dtFirst.getFullYear(), dtFirst.getMonth(), dtFirst.getDate() + j)
        const years = newdt.getFullYear()
        const months = newdt.getMonth()
        const days = newdt.getDate()
        const weekItem: weekParams = {
            mode: 'week',
            day: days,
            year: years,
            month: months + 1,
            date: format(years, months, days),
            //日历要显示的其他内容
            thing: ifOrder(years, months, days),
            istoday:
                today.value.getFullYear() === years &&
                    today.value.getMonth() === months &&
                    today.value.getDate() === days
                    ? true
                    : false,
            ischecked: false,
            othermonth: months !== month
        }
        week.push(weekItem)
    }
    weekArr.push(week)
    return weekArr
}

/**
 * 获取三个月(上月，本月，下月)
 */
const get3month = (year: any, month: any) => {
    monthList.value = []
    monthList.value.push(getMonth(year, month - 1))
    monthList.value.push(getMonth(year, month))
    monthList.value.push(getMonth(year, month + 1))
}
const MonthType = ref(0) //0 当前月 -1上一个月 1下一个月
let Mnum = 1 //计数
let Ynum = 0

// 点击上一个月 或者下一个月
const changeMonth = (type: number) => {
    MonthType.value = type
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    let nextYear = year - Ynum
    let chMonth = month + Mnum
    if (type === -1) {
        // 上一个月
        Mnum -= 1
        chMonth = month + Mnum
        Ynum = chMonth <= 0 ? Ynum - 1 : Ynum
        chMonth = chMonth <= 0 ? 12 + chMonth : chMonth
    }
    if (type === 1) {
        // 下一个月
        Mnum += 1
        chMonth = month + Mnum
        Ynum = chMonth > 12 ? Ynum + 1 : Ynum
        chMonth = chMonth > 12 ? chMonth - 12 : chMonth
    }

    nextYear = year + Ynum
    get3FullYear.value = nextYear //修改当前年
    get3Monthz.value = chMonth - 1 //修改当前月
    get3month(get3FullYear.value, get3Monthz.value)
    const newMonthTitle = `${nextYear}-${chMonth < 10 ? '0' + chMonth : chMonth}`
    MoutnTitle.value = newMonthTitle
}

interface weekParams {
    mode: string
    day: number
    year: number
    month: number
    date: string
    //日历要显示的其他内容
    thing: ReturnType<typeof ifOrder>
    istoday: boolean
    ischecked: boolean
    othermonth?: number | boolean
}

/**
 * 创建单月历 顺序是从周日到周六
 * @param year 年
 * @param month 月
 */
const getMonth = (year: number, month: number): DayType => {
    const monthArr = [] as any
    const dtFirst = new Date(year, month, 1) // 每个月第一天
    const dtLast = new Date(year, month + 1, 0) // 每个月最后一天
    const monthLength = dtLast.getDate() // 月份天数
    const firstDayOfWeek = dtFirst.getDay() // 第一天是星期几
    const rows = Math.ceil((monthLength + firstDayOfWeek) / 7) // 表格显示行数
    for (let i = 0; i < rows; i++) {
        const week = []
        for (let j = 0; j < 7; j++) {
            const day = i * 7 + j + 1 - firstDayOfWeek
            if (day > 0 && day <= monthLength) {
                const weekItem: weekParams = {
                    mode: 'month',
                    day: day,
                    year: year,
                    month: month + 1,
                    date: format(year, month, day),
                    // 日历要显示的其他内容
                    thing: ifOrder(year, month, day),
                    istoday:
                        today.value.getFullYear() === year &&
                            today.value.getMonth() === month &&
                            today.value.getDate() === day
                            ? true
                            : false,
                    ischecked: false,
                    othermonth: 0
                }
                week.push(weekItem)
            } else {
                // 其它月份
                const newDt = new Date(year, month, day)
                const years = newDt.getFullYear()
                const months = newDt.getMonth()
                const days = newDt.getDate()
                const weeksItem: weekParams = {
                    mode: 'month',
                    day: days,
                    year: years,
                    month: months,
                    date: format(year, month, day),
                    thing: ifOrder(year, month, day),
                    istoday:
                        today.value.getFullYear() === years &&
                            today.value.getMonth() === months &&
                            today.value.getDate() === days
                            ? true
                            : false,
                    ischecked: false,
                    othermonth: day <= 0 ? -1 : 1
                }
                week.push(weeksItem)
            }
        }
        monthArr.push(week)
    }
    return monthArr
}
/**
 * 左右移动
 * @param index 月的index
 * @param isWeek 是否显示周
 * @param isClick 移动不可点击
 */
const changeIndex = (index: number, isClick = false) => {
    if (props.isWeek) {
        dispDate.value = new Date(
            dispDate.value.getFullYear(),
            dispDate.value.getMonth(),
            dispDate.value.getDate() + 7 * index
        )
        currentDay.value = dispDate.value
        get3week()
    } else {
        const tmpDt = new Date(dispDate.value.getFullYear(), dispDate.value.getMonth() + index, 0)
        const maxday = tmpDt.getDate()
        const days = maxday < dispDate.value.getDate() ? maxday : dispDate.value.getDate()
        dispDate.value = new Date(
            dispDate.value.getFullYear(),
            dispDate.value.getMonth() + index,
            days
        )
        if (!isClick) {
            checkedDay.value = format(
                dispDate.value.getFullYear(),
                dispDate.value.getMonth(),
                dispDate.value.getDate()
            )
        }
        get3month(get3FullYear.value, get3Monthz.value)
    }
    initCalenderInfo()
}

/**
 * 切换月或周
 * @param e event
 */
const toggleMove = () => {
    emits('toggleMove')
}
</script>
<style scoped lang="scss">
.calender {
    &-container {
        width: 100%;
    }

    &-content {
        color: #666666;
    }

    &-title {
        display: flex;

        &-left {
            width: 70%;
        }

        &-right {
            position: absolute;
            right: 60rpx;
            width: 50rpx;
            height: 50rpx;
            border: 1px solid #e51c15;
            color: #e51c15;
            line-height: 44rpx;
            text-align: center;
            border-radius: 50%;
            font-size: 32rpx;
            padding-left: 14rpx;
        }

        &-morebtn {
            border: 2rpx solid #e51c15;
            // padding: 10rpx 40rpx;
            width: 120rpx;
            height: 46rpx;
            line-height: 46rpx;
            text-align: center;
            color: #e51c15;
            box-sizing: border-box;
            font-size: 24rpx;
            margin-right: 20rpx;
            border-radius: 10rpx;
        }

        &-chevronl text,
        &-chevronr text {
            color: #e51c15;
            font-size: 28rpx;
            font-weight: 400;

            &-right {
                text-align: right;
            }
        }

        &-mouth {
            width: 92%;
            text-align: center;
            font-size: 32rpx;
            color: #666666;
        }
    }

    &-week-head {
        width: 100%;
        display: flex;
        align-items: center;
        padding-top: 20px;
        font-size: 24rpx;
        font-weight: bold;

        &-item {
            // width: 14.2%;
            flex: 1;
            text-align: center;
        }
    }

    &-month {
        &-container {
            display: flex;
            position: relative;
            height: 460rpx;
        }

        &-item {
            position: absolute;
            width: 100%;
            min-height: 128rpx;
            padding: 30rpx 0;
            box-sizing: border-box;
        }

        &-item:nth-child(1) {
            left: -110%;
        }

        &-item:nth-child(2) {
            left: 0;
        }

        &-item:nth-child(3) {
            left: 110%;
        }

        &-week {
            display: flex;
            align-items: center;

            &-item {
                // width: 14.2%;
                flex: 1;
                text-align: center;
                position: relative;
            }
        }
    }

    &-week-day {
        display: block;
        text-align: center;
        font-style: normal;
        padding: 2rpx;
        line-height: 60rpx;
        height: 80rpx;
        width: 80rpx;
    }

    &-one-day {
        font-size: 24rpx;
    }
}

.istoday .day,
.ischecked .day {
    width: 60rpx;
    height: 60rpx;
    color: #fff;
    background: #e51c15;
    border-radius: 50%;
    line-height: 60rpx;
    text-align: center;
}

// .ischecked {
//     border-radius: 50px;
//     color: #fff !important;
//     background: #7687e9;
// }
.thing {
    position: absolute;
    left: 34%;
    // bottom: 2px;
    transform: translateX(-50%);
    color: #e51c15;
}

.thing .dot {
    display: block;
    width: 12rpx;
    height: 12rpx;
    word-break: break-all;
    line-height: 12rpx;
    color: #e51c15;
    background: #e51c15;
    border-radius: 50%;
    margin-top: 6rpx;
}
</style>

