<template>
  <div class="new-page">
    <img src="../assets/images/second-page.png" alt="Second Page" class="full-page-image" />
    <!-- 顶部罗盘链接 -->
    <div class="compass-link-wrapper">
      <a href="#" class="compass-link" :class="{ active: isCompassActive }" @click.prevent="handleCompassClick">交易</a>
    </div>
    <!-- 右上角店铺名称 -->
    <div class="shop-name-wrapper">
      <span class="shop-name-text">{{ editableText }}</span>
    </div>

    <!-- 日期选择组件 - 常驻显示 -->
    <div class="date-selector-wrapper">
      <div class="date-selector-container">
        <!-- 左侧日期范围选择器 -->
        <div class="date-range-picker">
          <div class="date-range-input-group">
            <input type="date" v-model="startDate" class="date-input date-input-start" />
            <span class="date-separator">-</span>
            <input type="date" v-model="endDate" class="date-input date-input-end" />
          </div>
        </div>

        <!-- 右侧按钮组 -->
        <div class="date-buttons">
          <button 
            v-for="btn in quickButtons" 
            :key="btn.value"
            :class="['date-btn', { active: selectedQuick === btn.value }]"
            @click="handleQuickSelect(btn.value)"
          >
            {{ btn.label }}
          </button>
          <button 
            class="date-btn" 
            :class="{ active: showMorePopup }"
            @click="toggleMorePopup"
          >
            更多
          </button>
        </div>
      </div>

      <!-- 更多选项悬浮窗 -->
      <div v-if="showMorePopup" class="more-popup">
        <div class="more-popup-left">
          <div 
            v-for="option in moreOptions" 
            :key="option.value"
            :class="['more-option', { disabled: !option.enabled, active: selectedMoreOption === option.value }]"
            @click="handleMoreOptionClick(option)"
          >
            {{ option.label }}
          </div>
        </div>
        <div class="more-popup-right">
          <!-- 自然月选择器 -->
          <div v-if="selectedMoreOption === 'natural-month'" class="month-selector">
            <div class="month-year-header">
              <span class="year-arrow" @click="previousYear">‹</span>
              <span class="year-display">{{ selectedYear }}年</span>
              <span class="year-arrow" @click="nextYear">›</span>
            </div>
            <div class="month-grid">
              <div 
                v-for="month in 12" 
                :key="month"
                :class="['month-item', { disabled: !isMonthSelectable(month) }]"
                @click="isMonthSelectable(month) && selectMonth(month)"
              >
                {{ month }}月
              </div>
            </div>
          </div>
          <!-- 默认显示当前日期范围 -->
          <div v-else class="date-range-display">
            {{ formatDateRange(startDate, endDate) }}
          </div>
        </div>
      </div>
    </div>

    <!-- 中间的 default-data 图片 -->
    <div v-if="!hideDefaultImage" class="center-image-wrapper">
      <img src="../assets/images/default-data.png" alt="Default Data" class="center-image" />
    </div>

    <!-- 图片区域 Loading 组件 -->
    <div v-if="isImageLoading" class="image-loading-wrapper">
      <LoadingSpinner />
    </div>

    <!-- 全页面 Loading 组件 -->
    <div v-if="isLoading" class="loading-wrapper">
      <LoadingSpinner />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'

// 罗盘点击状态
const isCompassActive = ref(false)

// 罗盘点击事件处理函数
const handleCompassClick = () => {
  isCompassActive.value = true
  isLoading.value = true
  
  // 模拟加载，0.5秒后隐藏 loading
  setTimeout(() => {
    isLoading.value = false
  }, 500)
  
  // 具体动作待实现
  console.log('罗盘被点击')
}

// 店铺名称
const editableText = ref('店铺名称')

// 从 localStorage 加载文字
const loadText = () => {
  const saved = localStorage.getItem('headerEditableText')
  if (saved) {
    editableText.value = saved
  }
}

// 日期选择相关
const startDate = ref('')
const endDate = ref('')
const selectedQuick = ref('30days')
const showMorePopup = ref(false)
const selectedMoreOption = ref('')
const selectedYear = ref(new Date().getFullYear())
const selectedMonth = ref(new Date().getMonth() + 1)
const hideDefaultImage = ref(false) // 控制图片显示隐藏
const isLoading = ref(false) // 控制全页面 loading 显示
const isImageLoading = ref(false) // 控制图片区域 loading 显示

// 快捷按钮
const quickButtons = [
  { label: '实时', value: 'realtime' },
  { label: '近1天', value: '1day' },
  { label: '近7天', value: '7days' },
  { label: '近30天', value: '30days' },
  { label: '自定义', value: 'custom' }
]

// 更多选项
const moreOptions = [
  { label: '实时', value: 'realtime', enabled: true },
  { label: '近1天', value: '1day', enabled: true },
  { label: '近7天', value: '7days', enabled: true },
  { label: '近30天', value: '30days', enabled: true },
  { label: '自然日', value: 'natural-day', enabled: true },
  { label: '自然周', value: 'natural-week', enabled: true },
  { label: '自然月', value: 'natural-month', enabled: true },
  { label: '大促', value: 'promotion', enabled: true }
]

// 生成年份列表（最近10年）
const years = computed(() => {
  const currentYear = new Date().getFullYear()
  return Array.from({ length: 10 }, (_, i) => currentYear - i)
})

// 初始化默认日期（近30天）
const initDefaultDates = () => {
  const end = new Date()
  const start = new Date()
  start.setDate(start.getDate() - 30)
  
  endDate.value = end.toISOString().split('T')[0]
  startDate.value = start.toISOString().split('T')[0]
}

// 处理快捷按钮点击
const handleQuickSelect = (value) => {
  selectedQuick.value = value
  showMorePopup.value = false
  
  const end = new Date()
  const start = new Date()
  
  switch(value) {
    case 'realtime':
      // 实时数据
      break
    case '1day':
      start.setDate(start.getDate() - 1)
      break
    case '7days':
      start.setDate(start.getDate() - 7)
      break
    case '30days':
      start.setDate(start.getDate() - 30)
      break
    case 'custom':
      // 自定义，不自动设置日期
      return
  }
  
  if (value !== 'custom') {
    endDate.value = end.toISOString().split('T')[0]
    startDate.value = start.toISOString().split('T')[0]
  }
}

// 切换更多弹窗
const toggleMorePopup = () => {
  showMorePopup.value = !showMorePopup.value
  // 打开弹窗时，如果没有选中自然月，则默认显示当前选中的快捷选项
  if (showMorePopup.value && selectedMoreOption.value !== 'natural-month') {
    selectedMoreOption.value = selectedQuick.value
  }
}

// 处理更多选项点击
const handleMoreOptionClick = (option) => {
  // 所有选项都可以点击，但只有自然月会切换到月份选择器
  if (option.value === 'natural-month') {
    selectedMoreOption.value = option.value
  } else {
    selectedMoreOption.value = option.value
  }
}

// 格式化日期显示
const formatDate = (dateStr) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}年${month}月${day}日`
}

// 格式化日期范围显示（YYYY/MM/DD - YYYY/MM/DD）
const formatDateRange = (start, end) => {
  if (!start || !end) return ''
  const formatSimple = (dateStr) => {
    const date = new Date(dateStr)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}/${month}/${day}`
  }
  return `${formatSimple(start)} - ${formatSimple(end)}`
}

// 上一年
const previousYear = () => {
  selectedYear.value--
}

// 下一年
const nextYear = () => {
  selectedYear.value++
}

// 判断月份是否可选（不能选择未来月份）
const isMonthSelectable = (month) => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1
  
  // 如果选择的年份小于当前年份，所有月份都可选
  if (selectedYear.value < currentYear) {
    return true
  }
  // 如果是当前年份，只能选择当前月份及之前的月份
  if (selectedYear.value === currentYear) {
    return month <= currentMonth
  }
  // 未来年份的月份都不可选
  return false
}

// 选择月份
const selectMonth = (month) => {
  selectedMonth.value = month
  handleMonthSelect()
}

// 处理月份选择
const handleMonthSelect = () => {
  // 显示图片区域 loading
  isImageLoading.value = true
  hideDefaultImage.value = true
  showMorePopup.value = false
  
  // 模拟数据加载，0.5秒后隐藏 loading
  setTimeout(() => {
    isImageLoading.value = false
  }, 500)
  
  // 设置该月的日期范围
  const year = selectedYear.value
  const month = selectedMonth.value
  const firstDay = new Date(year, month - 1, 1)
  const lastDay = new Date(year, month, 0)
  
  startDate.value = firstDay.toISOString().split('T')[0]
  endDate.value = lastDay.toISOString().split('T')[0]
}

onMounted(() => {
  loadText()
  initDefaultDates()
})
</script>

<style scoped>
.new-page {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

.full-page-image {
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
}

/* 罗盘链接样式 */
.compass-link-wrapper {
  position: absolute;
  top: 20px;
  left: 46.5%;
  z-index: 10;
}

.compass-link {
  color: #999;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  transition: color 0.2s ease;
  cursor: pointer;
}

.compass-link:hover {
  color: #1890ff;
}

.compass-link.active {
  color: #333;
}

/* 右上角店铺名称样式 */
.shop-name-wrapper {
  position: absolute;
  top: 20px;
  right: 100px;
  z-index: 10;
}

.shop-name-text {
  color: #999;
  font-size: 13px;
  font-weight: 500;
}

/* 中间图片样式 */
.center-image-wrapper {
  position: absolute;
  top: 48%;
  left: 11.7%;
  z-index: 10;
  width: 1612px;
  height: 368px;
}

.center-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: fill;
}

/* 图片区域 Loading 样式 */
.image-loading-wrapper {
  position: absolute;
  top: 48%;
  left: 11.7%;
  z-index: 11;
  width: 1612px;
  height: 368px;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 全页面 Loading 样式 */
.loading-wrapper {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 日期选择器样式 */
.date-selector-wrapper {
  position: absolute;
  top: 224px;
  left: 53.5%;
  z-index: 999;
}

.date-selector-container {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  padding: 12px 16px;
  border-radius: 4px;
}

.date-range-picker {
  display: flex;
  align-items: center;
  padding-right: 16px;
  border-right: 1px solid #e8e8e8;
}

.date-range-input-group {
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  overflow: hidden;
  background: white;
  transition: all 0.3s;
}

.date-range-input-group:hover {
  border-color: #40a9ff;
}

.date-range-input-group:focus-within {
  border-color: #40a9ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.date-input {
  padding: 6px 12px;
  border: none;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  background: transparent;
}

.date-input-start {
  text-align: right;
}

.date-input-end {
  text-align: left;
}

/* 隐藏日期输入框的日历图标 */
.date-input::-webkit-calendar-picker-indicator {
  display: none;
}

.date-input::-webkit-inner-spin-button,
.date-input::-webkit-outer-spin-button {
  display: none;
}

.date-separator {
  color: #999;
  font-size: 14px;
  padding: 0 4px;
  user-select: none;
}

.date-buttons {
  display: flex;
  gap: 0;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  overflow: hidden;
}

.date-btn {
  padding: 6px 16px;
  background: white;
  border: none;
  border-right: 1px solid #d9d9d9;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;
}

.date-btn:last-child {
  border-right: none;
}

.date-btn:hover {
  color: #1890ff;
}

.date-btn.active {
  color: #1890ff;
}

/* 更多选项弹窗 */
.more-popup {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  min-height: 300px;
  z-index: 100;
}

.more-popup-left {
  min-width: 120px;
  border-right: 1px solid #e8e8e8;
  padding: 8px 0;
}

.more-option {
  padding: 10px 20px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: background 0.3s;
}

.more-option:hover {
  background: #f5f5f5;
}

.more-option.active {
  background: #e6f7ff;
  color: #1890ff;
}

.more-popup-right {
  width: 320px;
  padding: 0;
}

.month-selector {
  width: 100%;
  padding: 16px 0 16px;
}

.month-year-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 0 24px 16px;
  border-bottom: 1px solid #e8e8e8;
}

.year-display {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.year-arrow {
  font-size: 24px;
  color: #666;
  cursor: pointer;
  user-select: none;
  padding: 0 8px;
  transition: color 0.3s;
}

.year-arrow:hover {
  color: #1890ff;
}

.month-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 0 16px;
}

.month-item {
  padding: 6px 0;
  text-align: center;
  font-size: 14px;
  color: #333;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  background: white;
}

.month-item:hover:not(.disabled) {
  background: #f5f5f5;
}

.month-item.disabled {
  color: #d9d9d9;
  cursor: not-allowed;
  background: white;
}

/* 日期范围显示 */
.date-range-display {
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  padding: 20px;
}
</style>
