<template>
  <div class="shop-info-page">
    <!-- 顶部 Header -->
    <div class="header-image">
      <img src="@/assets/images/smallHeader.png" alt="Header" />
    </div>

    <!-- 页面标题导航 -->
    <div class="page-tabs">
      <div 
        class="tab" 
        :class="{ active: activeTab === 'info' }"
        @click="activeTab = 'info'"
      >
        店铺信息
        <span class="help-icon" @click.stop="showHelp('info')">?</span>
      </div>
      <div 
        class="tab"
        :class="{ active: activeTab === 'settings' }"
        @click="activeTab = 'settings'"
      >
        店铺设置
        <span class="help-icon" @click.stop="showHelp('settings')">?</span>
      </div>
      <div 
        class="tab"
        :class="{ active: activeTab === 'qualification' }"
        @click="activeTab = 'qualification'"
      >
        店铺资质
        <span class="help-icon" @click.stop="showHelp('qualification')">?</span>
      </div>
    </div>

    <!-- 店铺资质内容 -->
    <div v-if="activeTab === 'qualification'" class="qualification-content">
      <img src="@/assets/images/personalInfo.png" alt="个人信息" class="qualification-image" />
    </div>

    <!-- 店铺信息内容 -->
    <div v-if="activeTab === 'info'" class="shop-info-content">
      <!-- 基本信息图片 -->
      <img src="@/assets/images/shopBasicInfo.png" alt="基本信息" class="basic-info-image" />
    </div>

    <!-- 店铺设置内容 -->
    <div v-if="activeTab === 'settings'" class="shop-info-content">
      <!-- 店铺设置暂无内容 -->

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 当前激活的 tab
const activeTab = ref('info')

// 显示帮助信息
const showHelp = (tab) => {
  alert(`${tab === 'info' ? '店铺信息' : tab === 'settings' ? '店铺设置' : '店铺资质'}帮助`)
}
</script>

<style scoped>
.shop-info-page {
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}

/* Header 图片 */
.header-image {
  width: 100%;
  overflow: hidden;
}

.header-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* 页面标签 */
.page-tabs {
  display: flex;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fafafa;
}

.tab {
  padding: 16px 24px;
  cursor: pointer;
  color: #666;
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}

.tab.active {
  color: #1890ff;
  background-color: #ffffff;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #1890ff;
}

/* 小问号图标 */
.help-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #d9d9d9;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}

.help-icon:hover {
  background-color: #1890ff;
  transform: scale(1.1);
}

/* 店铺资质内容 */
.qualification-content {
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.qualification-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

/* 基本信息图片 */
.basic-info-image {
  max-width: 100%;
  height: auto;
  display: block;
}

/* 主要内容 */
.shop-info-content {
  padding: 24px;
}

.info-section {
  margin-bottom: 32px;
}

.section-header {
  margin-bottom: 24px;
}

.section-header h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.shop-id {
  color: #666;
  font-size: 14px;
}

/* 信息网格 */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

.info-row {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.info-label {
  width: 120px;
  color: #666;
  font-size: 14px;
}

.info-value {
  flex: 1;
  color: #333;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* 证件照片 */
.document-section {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
}

.document-item {
  text-align: center;
}

.document-item label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-size: 14px;
}

.document-image {
  width: 150px;
  height: 100px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
}

.document-image img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 4px;
}

.placeholder-img {
  color: #999;
  font-size: 12px;
  text-align: center;
}

/* 个人信息 */
.personal-info {
  background-color: #fafafa;
  padding: 16px;
  border-radius: 8px;
}

/* 工具部分 */
.tools-section, .settings-section {
  margin-bottom: 32px;
}

.tools-section h3, .settings-section h3 {
  color: #333;
  margin-bottom: 16px;
  font-size: 16px;
}

.tools-grid, .settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.tool-item, .setting-item {
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.tool-item:hover, .setting-item:hover {
  border-color: #1890ff;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.1);
}

.tool-icon, .setting-icon {
  font-size: 24px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f9ff;
  border-radius: 8px;
  flex-shrink: 0;
}

.tool-title, .setting-title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}

.tool-desc, .setting-desc {
  font-size: 12px;
  color: #666;
  line-height: 1.4;
}
</style>