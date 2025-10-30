<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <header class="top-header">
      <img src="@/assets/images/header.png" alt="Header Placeholder" class="header-placeholder" />
    </header>

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
import UserDropdown from './components/UserDropdown.vue'

const showUserDropdown = ref(false)
const userInfoRef = ref(null)

// 菜单展开状态
const menuExpanded = ref({
  常用: false,
  流量: false,
  订单: false,
  售后: false,
  商品: false,
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
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
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

.header-placeholder {
  width: 100%;
  height: 64px;
  object-fit: cover;
  display: block;
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
  background-color: #ffffff;
  border-right: 1px solid #e6e6e6;
  padding: 20px 0;
  overflow-y: auto;
  position: fixed;
  top: 64px;
  bottom: 0;
  left: 0;
  z-index: 100;
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
  background-color: #fff;
  white-space: nowrap;
}

.submenu-link:hover {
  color: #1890ff;
}

.submenu-link.router-link-active {
  color: #1890ff;
  background-color: #e6f7ff;
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