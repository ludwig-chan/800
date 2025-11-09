<template>
  <div class="main-layout-wrapper">
    <!-- 顶部导航栏 -->
    <header class="top-header">
      <RouterLink to="/" class="header-link">
        <img src="@/assets/images/header.png" alt="Header Placeholder" class="header-placeholder" />
      </RouterLink>
      <!-- 顶部文字链接 -->
      <div class="header-links">
        <a href="#" class="header-text-link">巨量千川</a>
        <a href="#" class="header-text-link">精选联盟</a>
        <a href="/new-page" target="_blank" class="header-text-link">电商罗盘</a>
        <a href="#" class="header-text-link">服务市场</a>
        <a href="#" class="header-text-link">学习中心</a>
      </div>
      <!-- 可编辑文字链接 -->
      <div class="editable-text-wrapper" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <a href="#" class="header-text-link editable-link" @click.prevent="openEditDialog">{{ editableText }}</a>
        <!-- 悬浮图片 -->
        <div v-if="showHoverImage" class="hover-image-container">
          <img src="@/assets/images/righttop-dialog.png" alt="预览图" class="hover-image" />
          <div class="image-overlay-text">{{ editableText }}</div>
        </div>
      </div>
    </header>

    <!-- 编辑弹窗 -->
    <div v-if="showEditDialog" class="dialog-overlay" @click="closeEditDialog">
      <div class="dialog-content" @click.stop>
        <h3>修改文字</h3>
        <p class="dialog-tip">最多输入4个字</p>
        <input 
          v-model="tempText" 
          type="text" 
          maxlength="4" 
          class="dialog-input"
          placeholder="请输入文字"
          @keyup.enter="saveText"
        />
        <div class="dialog-buttons">
          <button @click="closeEditDialog" class="btn-cancel">取消</button>
          <button @click="saveText" class="btn-confirm">确定</button>
        </div>
      </div>
    </div>

    <div class="main-layout">
      <!-- 侧边栏 -->
      <aside class="sidebar">
        <!-- 常用 -->
        <div class="sidebar-section">
          <div class="section-title-no-arrow">
            <span>常用</span>
            <a href="#" class="manage-btn">管理</a>
          </div>
          <div class="submenu-grid">
            <a href="#" class="submenu-link">商品管理</a>
            <a href="#" class="submenu-link">订单管理</a>
            <a href="#" class="submenu-link">售后工作台</a>
            <a href="#" class="submenu-link">账户中心</a>
          </div>
        </div>
        
        <!-- 流量 -->
        <div class="sidebar-section">
          <div class="section-title" @click="toggleMenu('流量')">
            <span>流量</span>
            <svg class="arrow" :class="{ expanded: menuExpanded.流量 }" width="12" height="12" viewBox="0 0 12 12">
              <polyline points="3,4 6,7 9,4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        
        <!-- 订单 -->
        <div class="sidebar-section">
          <div class="section-title" @click="toggleMenu('订单')">
            <span>订单</span>
            <svg class="arrow" :class="{ expanded: menuExpanded.订单 }" width="12" height="12" viewBox="0 0 12 12">
              <polyline points="3,4 6,7 9,4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="submenu-grid" v-show="menuExpanded.订单">
            <a href="#" class="submenu-link">订单管理</a>
            <a href="#" class="submenu-link">卡券管理</a>
            <a href="#" class="submenu-link">订单工具</a>
            <a href="#" class="submenu-link">发货中心</a>
            <a href="#" class="submenu-link">订单报备</a>
            <a href="#" class="submenu-link">包裹中心</a>
            <a href="#" class="submenu-link">物流工具</a>
            <a href="#" class="submenu-link">电子面单</a>
            <a href="#" class="submenu-link">物流服务</a>
            <a href="#" class="submenu-link">物流诊断</a>
          </div>
        </div>
        
        <!-- 售后 -->
        <div class="sidebar-section">
          <div class="section-title" @click="toggleMenu('售后')">
            <span>售后</span>
            <svg class="arrow" :class="{ expanded: menuExpanded.售后 }" width="12" height="12" viewBox="0 0 12 12">
              <polyline points="3,4 6,7 9,4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        
        <!-- 商品 -->
        <div class="sidebar-section">
          <div class="section-title" @click="toggleMenu('商品')">
            <span>商品</span>
            <svg class="arrow" :class="{ expanded: menuExpanded.商品 }" width="12" height="12" viewBox="0 0 12 12">
              <polyline points="3,4 6,7 9,4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="submenu-grid" v-show="menuExpanded.商品">
            <a href="#" class="submenu-link">商品创建</a>
            <a href="#" class="submenu-link">商品管理</a>
            <a href="#" class="submenu-link">评价管理</a>
            <a href="#" class="submenu-link">库存管理</a>
            <a href="#" class="submenu-link">渠道品管理</a>
            <a href="#" class="submenu-link">商品诊断</a>
            <a href="#" class="submenu-link">商机中心</a>
            <a href="#" class="submenu-link">商品成长</a>
            <a href="#" class="submenu-link">商品工具</a>
            <a href="#" class="submenu-link">商品素材</a>
          </div>
        </div>
        
        <!-- 店铺 -->
        <div class="sidebar-section">
          <div class="section-title" @click="toggleMenu('店铺')">
            <span>店铺</span>
            <svg class="arrow" :class="{ expanded: menuExpanded.店铺 }" width="12" height="12" viewBox="0 0 12 12">
              <polyline points="3,4 6,7 9,4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="submenu-grid" v-show="menuExpanded.店铺">
            <RouterLink to="/shop-info" class="submenu-link">店铺信息设置</RouterLink>
            <a href="#" class="submenu-link">商家体验分</a>
            <a href="#" class="submenu-link">经营账号管理</a>
            <a href="#" class="submenu-link">子账号管理</a>
            <a href="#" class="submenu-link">违规管理</a>
            <a href="#" class="submenu-link">店铺保障</a>
            <a href="#" class="submenu-link">店铺装修</a>
            <a href="#" class="submenu-link">店铺诊断</a>
            <a href="#" class="submenu-link">商家权益</a>
            <a href="#" class="submenu-link">保险服务</a>
          </div>
        </div>
        
        <!-- 用户 -->
        <div class="sidebar-section">
          <div class="section-title" @click="toggleMenu('用户')">
            <span>用户</span>
            <svg class="arrow" :class="{ expanded: menuExpanded.用户 }" width="12" height="12" viewBox="0 0 12 12">
              <polyline points="3,4 6,7 9,4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        
        <!-- 资金 -->
        <div class="sidebar-section">
          <div class="section-title" @click="toggleMenu('资金')">
            <span>资金</span>
            <svg class="arrow" :class="{ expanded: menuExpanded.资金 }" width="12" height="12" viewBox="0 0 12 12">
              <polyline points="3,4 6,7 9,4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        
        <!-- 应用 -->
        <div class="sidebar-section">
          <div class="section-title" @click="toggleMenu('应用')">
            <span>应用</span>
            <svg class="arrow" :class="{ expanded: menuExpanded.应用 }" width="12" height="12" viewBox="0 0 12 12">
              <polyline points="3,4 6,7 9,4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </aside>

      <!-- 主要内容区域 -->
      <main class="main-content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const showUserDropdown = ref(false)
const userInfoRef = ref(null)

// 可编辑文字相关
const editableText = ref('店铺名称')
const tempText = ref('')
const showEditDialog = ref(false)
const showHoverImage = ref(false)
let hoverTimer = null

// 显示悬浮图片
const handleMouseEnter = () => {
  if (hoverTimer) {
    clearTimeout(hoverTimer)
    hoverTimer = null
  }
  showHoverImage.value = true
}

// 隐藏悬浮图片（延迟）
const handleMouseLeave = () => {
  hoverTimer = setTimeout(() => {
    showHoverImage.value = false
  }, 200) // 200毫秒延迟
}

// 从 localStorage 加载文字
const loadText = () => {
  const saved = localStorage.getItem('headerEditableText')
  if (saved) {
    editableText.value = saved
  }
}

// 打开编辑弹窗
const openEditDialog = () => {
  tempText.value = editableText.value
  showEditDialog.value = true
}

// 关闭编辑弹窗
const closeEditDialog = () => {
  showEditDialog.value = false
  tempText.value = ''
}

// 保存文字
const saveText = () => {
  if (tempText.value.trim()) {
    editableText.value = tempText.value.trim()
    localStorage.setItem('headerEditableText', editableText.value)
  }
  closeEditDialog()
}

// 菜单展开状态
const menuExpanded = ref({
  常用: false,
  流量: false,
  订单: true,  // 默认展开
  售后: false,
  商品: true,  // 默认展开
  店铺: false,
  用户: false,
  资金: false,
  应用: false
})

const toggleUserDropdown = () => {
  showUserDropdown.value = !showUserDropdown.value
}

const toggleMenu = (menuName) => {
  menuExpanded.value[menuName] = !menuExpanded.value[menuName]
}

const handleClickOutside = (event) => {
  if (userInfoRef.value && !userInfoRef.value.contains(event.target)) {
    showUserDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  loadText()
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  if (hoverTimer) {
    clearTimeout(hoverTimer)
  }
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-layout-wrapper {
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow: hidden;
}

/* 顶部导航栏 */
.top-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 64px;
  background-color: #ffffff;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-link {
  width: 100%;
  height: 100%;
  display: block;
}

.header-placeholder {
  width: 100%;
  height: 64px;
  object-fit: cover;
  display: block;
  cursor: pointer;
  transition: opacity 0.2s;
}

.header-placeholder:hover {
  opacity: 0.9;
}

/* 顶部文字链接 */
.header-links {
  position: absolute;
  top: 50%;
  left: 680px;
  transform: translateY(-50%);
  display: flex;
  gap: 24px;
  z-index: 10;
}

.header-text-link {
  color: #333;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  transition: color 0.2s ease;
}

.header-text-link:hover {
  color: #1890ff;
}

/* 可编辑文字链接 */
.editable-text-wrapper {
  position: absolute;
  top: 50%;
  right: 45px;
  transform: translateY(-50%);
  z-index: 10;
}

.editable-link {
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
}

/* 悬浮图片容器 */
.hover-image-container {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 10px;
  z-index: 1001;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: visible;
  background: #fff;
  padding: 8px;
}

.hover-image {
  width: auto;
  height: auto;
  max-width: none;
  display: block;
  border-radius: 4px;
  position: relative;
}

.image-overlay-text {
  position: absolute;
  top: 30px;
  left: 40%;
  transform: translateX(-50%);
  font-size: 14px;
  font-weight: 600;
  color: #333;
  background: transparent;
  padding: 0;
  border-radius: 0;
  white-space: nowrap;
  box-shadow: none;
  pointer-events: none;
}

/* 弹窗遮罩 */
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

/* 弹窗内容 */
.dialog-content {
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.dialog-content h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #333;
}

.dialog-tip {
  margin: 0 0 16px 0;
  font-size: 12px;
  color: #999;
}

.dialog-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

.dialog-input:focus {
  border-color: #1890ff;
}

.dialog-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
}

.dialog-buttons button {
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-cancel {
  background: #fff;
  border: 1px solid #d9d9d9;
  color: #666;
}

.btn-cancel:hover {
  border-color: #1890ff;
  color: #1890ff;
}

.btn-confirm {
  background: #1890ff;
  color: #fff;
}

.btn-confirm:hover {
  background: #40a9ff;
}

/* 主要布局 */
.main-layout {
  display: flex;
  margin-top: 64px;
  min-height: calc(100vh - 64px);
}

/* 侧边栏 */
.sidebar {
  width: 208px;
  margin-left: 16px;
  margin-right: 140px;
  margin-top: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px 0;
  overflow-y: auto;
  position: fixed;
  top: 64px;
  bottom: 0;
  left: 0;
  z-index: 100;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.sidebar::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.sidebar-section {
  margin-bottom: 8px;
}

.section-title {
  padding: 10px 16px;
  height: 36px;
  font-size: 14px;
  color: #333;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title:hover {
  background-color: #f8f9fa;
  color: #1890ff;
}

.arrow {
  transition: transform 0.2s ease;
  color: #666;
}

.arrow.expanded {
  transform: rotate(180deg);
}

/* 无箭头的一级菜单样式 */
.section-title-no-arrow {
  padding: 10px 16px;
  height: 36px;
  font-size: 14px;
  color: #333;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 管理按钮样式 */
.manage-btn {
  display: inline-block;
  padding: 8px 12px;
  color: #666;
  text-decoration: none;
  font-size: 12px;
  border-radius: 4px;
  transition: all 0.2s;
  background-color: #fff;
  white-space: nowrap;
}

.manage-btn:hover {
  background-color: #e6f7ff;
  color: #1890ff;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(24, 144, 255, 0.1);
}

/* 二级菜单网格布局 */
.submenu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 8px 16px;
  background-color: #f8f9fa;
}

.submenu-link {
  display: inline-block;
  padding: 8px 12px;
  color: #666;
  text-decoration: none;
  font-size: 12px;
  border-radius: 4px;
  transition: all 0.2s;
  text-align: left;
  white-space: nowrap;
}

.submenu-link:hover {
  color: #1890ff;
}

.submenu-link.router-link-active {
  color: #1890ff;
}

/* 主要内容区域 */
.main-content {
  flex: 1;
  background-color: #f5f5f5;
  overflow-y: auto;
  padding: 0;
  margin-left: 224px;
}
</style>
