<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <header class="top-header">
      <div class="header-left">
        <div class="logo">
          <span class="logo-icon">📱</span>
          <span class="logo-text">抖店</span>
        </div>
        <div class="location">
          <span>🗺️ 返回商家版</span>
        </div>
        <div class="search-box">
          <input type="text" placeholder="智能检索-让工作更高效">
          <button class="search-btn">🔍</button>
        </div>
      </div>
      <div class="header-right">
        <div class="header-icons">
          <span class="icon">🔔</span>
          <span class="icon">👤</span>
          <span class="icon">📋</span>
          <span class="icon">🎯</span>
        </div>
        <div class="user-info" @click="toggleUserDropdown" ref="userInfoRef">
          <span class="user-name">时尚生活精致小铺XUq</span>
          <span class="dropdown-arrow">▼</span>
          <UserDropdown :visible="showUserDropdown" @close="showUserDropdown = false" />
        </div>
      </div>
    </header>

    <div class="main-layout">
      <!-- 侧边栏 -->
      <aside class="sidebar">
        <div class="sidebar-section">
          <div class="section-title">💼 常用</div>
          <ul class="menu-list">
            <li class="menu-item">
              <RouterLink to="/" class="menu-link">🏠 首页</RouterLink>
            </li>
          </ul>
        </div>
        
        <div class="sidebar-section">
          <div class="section-title">🛍️ 店铺</div>
          <ul class="menu-list">
            <li class="menu-item">
              <RouterLink to="/shop-info" class="menu-link">🏪 店铺信息</RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/shop-settings" class="menu-link">⚙️ 店铺设置</RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/activity" class="menu-link">🎉 活动中心</RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/marketing" class="menu-link">📢 营销管理</RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/tools" class="menu-link">🔧 营销工具</RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/products" class="menu-link">📦 商品管理</RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/xiaopu" class="menu-link">🏪 小铺产品</RouterLink>
            </li>
          </ul>
        </div>
        
        <div class="sidebar-section">
          <div class="section-title">📋 订单</div>
        </div>
        
        <div class="sidebar-section">
          <div class="section-title">🏪 售后</div>
        </div>
        
        <div class="sidebar-section">
          <div class="section-title">📦 商品</div>
        </div>
        
        <div class="sidebar-section">
          <div class="section-title">🏬 店铺</div>
          <ul class="menu-list">
            <li class="menu-item">
              <RouterLink to="/business-analysis" class="menu-link">📊 商家经营分析</RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/experience" class="menu-link">💡 经营体验</RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/violation" class="menu-link">⚖️ 经营管理</RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/data-center" class="menu-link">📊 数据中心</RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/cooperation" class="menu-link">🤝 保障服务</RouterLink>
            </li>
          </ul>
        </div>
        
        <div class="sidebar-section">
          <div class="section-title">👥 用户</div>
        </div>
        
        <div class="sidebar-section">
          <div class="section-title">💰 资金</div>
        </div>
        
        <div class="sidebar-section">
          <div class="section-title">📱 应用</div>
        </div>
      </aside>

      <!-- 主要内容区域 -->
      <main class="main-content">
        <RouterView />
      </main>
    </div>

    <!-- 智能助手浮动按钮 -->
    <div class="chat-float-btn" @click="toggleChatAssistant" v-if="!showChatAssistant">
      🤖
    </div>

    <!-- 智能助手聊天界面 -->
    <ChatAssistant :visible="showChatAssistant" @close="showChatAssistant = false" />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import UserDropdown from './components/UserDropdown.vue'
import ChatAssistant from './components/ChatAssistant.vue'

const showUserDropdown = ref(false)
const showChatAssistant = ref(false)
const userInfoRef = ref(null)

const toggleUserDropdown = () => {
  showUserDropdown.value = !showUserDropdown.value
}

const toggleChatAssistant = () => {
  showChatAssistant.value = !showChatAssistant.value
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
}

/* 顶部导航栏 */
.top-header {
  background-color: #ffffff;
  border-bottom: 1px solid #e6e6e6;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 60px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #1890ff;
}

.logo-icon {
  font-size: 24px;
}

.location {
  color: #666;
  font-size: 14px;
  cursor: pointer;
}

.search-box {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 6px 12px;
  width: 300px;
}

.search-box input {
  background: none;
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  color: #333;
}

.search-box input::placeholder {
  color: #999;
}

.search-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header-icons {
  display: flex;
  gap: 15px;
}

.icon {
  font-size: 18px;
  cursor: pointer;
  color: #666;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  position: relative;
}

.dropdown-arrow {
  color: #999;
  font-size: 12px;
}

/* 主要布局 */
.main-layout {
  display: flex;
  margin-top: 60px;
  min-height: calc(100vh - 60px);
}

/* 侧边栏 */
.sidebar {
  width: 240px;
  background-color: #ffffff;
  border-right: 1px solid #e6e6e6;
  padding: 20px 0;
  overflow-y: auto;
}

.sidebar-section {
  margin-bottom: 20px;
}

.section-title {
  padding: 8px 20px;
  font-size: 14px;
  color: #666;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
}

.menu-list {
  list-style: none;
}

.menu-item {
  margin: 2px 0;
}

.menu-link {
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.menu-link:hover {
  background-color: #f0f9ff;
  color: #1890ff;
}

.menu-link.router-link-active {
  background-color: #e6f7ff;
  color: #1890ff;
  border-right: 3px solid #1890ff;
}

/* 主要内容区域 */
.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
  overflow-y: auto;
}

/* 智能助手浮动按钮 */
.chat-float-btn {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #4A90E2 0%, #7B68EE 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.4);
  transition: all 0.3s ease;
  z-index: 999;
}

.chat-float-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(74, 144, 226, 0.6);
}
</style>