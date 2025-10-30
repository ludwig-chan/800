<template>
  <div class="shop-info-page">
    <!-- 页面标题导航 -->
    <div class="page-tabs">
      <div class="tab active">店铺信息</div>
      <div class="tab">店铺设置</div>
      <div class="tab">店铺动态</div>
    </div>

    <!-- 基本信息标签页 -->
    <div class="content-tabs">
      <div class="content-tab active">基本信息</div>
      <div class="content-tab">合同信息</div>
      <div class="content-tab">信营等级</div>
    </div>

    <div class="shop-info-content">
      <!-- 店铺基本信息 -->
      <div class="info-section">
        <div class="section-header">
          <h3>⭐ 时尚生活精致小铺XUq</h3>
          <div class="shop-id">个体店 · 店铺ID:251600090</div>
        </div>

        <div class="info-grid">
          <div class="info-row">
            <div class="info-label">管理人姓名</div>
            <div class="info-value">徐建 ✏️</div>
          </div>
          <div class="info-row">
            <div class="info-label">管理人手机号</div>
            <div class="info-value">158****8799 ✏️</div>
          </div>
          <div class="info-row">
            <div class="info-label">小微查验证名</div>
            <div class="info-value">是</div>
          </div>
          <div class="info-row">
            <div class="info-label">店铺版本</div>
            <div class="info-value">21天 蓝营许牌</div>
          </div>
          <div class="info-row">
            <div class="info-label">经营地址</div>
            <div class="info-value">广东·深圳·福田新村三区65栋1303</div>
          </div>
        </div>

        <!-- 证件照片 -->
        <div class="document-section">
          <div class="document-item">
            <label>身份证</label>
            <div class="document-image">
              <div class="placeholder-img">身份证照片</div>
            </div>
          </div>
          <div class="document-item">
            <label>营业证营业照</label>
            <div class="document-image">
              <div class="placeholder-img">营业执照照片</div>
            </div>
          </div>
        </div>

        <!-- 个人信息 -->
        <div class="personal-info">
          <div class="info-row">
            <div class="info-label">姓名</div>
            <div class="info-value">徐***</div>
          </div>
          <div class="info-row">
            <div class="info-label">证件号码</div>
            <div class="info-value">4405****432</div>
          </div>
          <div class="info-row">
            <div class="info-label">证件开始日期</div>
            <div class="info-value">2023-03-30</div>
          </div>
          <div class="info-row">
            <div class="info-label">证件截止日期</div>
            <div class="info-value">2043-03-30</div>
          </div>
          <div class="info-row">
            <div class="info-label">证件签发地</div>
            <div class="info-value">广东省深圳市福田区龙山大道1155号110室</div>
          </div>
        </div>
      </div>

      <!-- 店铺资质工具 -->
      <div class="tools-section">
        <h3>店铺资质工具</h3>
        <div class="tools-grid">
          <div class="tool-item">
            <div class="tool-icon">🏪</div>
            <div class="tool-title">店铺资质</div>
            <div class="tool-desc">管理主体资质信息以及小店、达人等资质管理等、编辑、更新</div>
          </div>
          <div class="tool-item">
            <div class="tool-icon">👤</div>
            <div class="tool-title">主体/社会信用代码变更</div>
            <div class="tool-desc">个体经营变更主体信息、企业经营主体变更、统一社会信用代码变更</div>
          </div>
          <div class="tool-item">
            <div class="tool-icon">🏢</div>
            <div class="tool-title">行业资质</div>
            <div class="tool-desc">管理行业资质信息管理、编辑、更新等</div>
          </div>
          <div class="tool-item">
            <div class="tool-icon">✅</div>
            <div class="tool-title">商品资质</div>
            <div class="tool-desc">管理商品资质信息管理、编辑、更新等</div>
          </div>
          <div class="tool-item">
            <div class="tool-icon">📋</div>
            <div class="tool-title">经营证明</div>
            <div class="tool-desc">管理证明申请资质、工单（仅交易性平台需展示项）</div>
          </div>
        </div>
      </div>

      <!-- 店铺设置工具 -->
      <div class="settings-section">
        <h3>店铺设置工具</h3>
        <div class="settings-grid">
          <div class="setting-item">
            <div class="setting-icon">🏪</div>
            <div class="setting-title">关店</div>
            <div class="setting-desc">暂停关闭店铺</div>
          </div>
          <div class="setting-item">
            <div class="setting-icon">⬆️</div>
            <div class="setting-title">店铺升级</div>
            <div class="setting-desc">暂停升级社区</div>
          </div>
          <div class="setting-item">
            <div class="setting-icon">💳</div>
            <div class="setting-title">支付方式设置</div>
            <div class="setting-desc">商原付费支付设置、微原支付等支付方式设置并开启自营</div>
          </div>
          <div class="setting-item">
            <div class="setting-icon">📊</div>
            <div class="setting-title">整务提效</div>
            <div class="setting-desc">整务整善条资以工作看营效情况</div>
          </div>
          <div class="setting-item">
            <div class="setting-icon">📈</div>
            <div class="setting-title">数据增效</div>
            <div class="setting-desc">提效数据看经营的指标发情况</div>
          </div>
          <div class="setting-item">
            <div class="setting-icon">👥</div>
            <div class="setting-title">联系运营小二</div>
            <div class="setting-desc">联系运营小二沟通经营问题</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 这里可以添加响应式数据和方法
</script>

<style scoped>
.shop-info-page {
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
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

/* 内容标签 */
.content-tabs {
  display: flex;
  padding: 16px 24px;
  border-bottom: 1px solid #e6e6e6;
  background-color: #ffffff;
}

.content-tab {
  padding: 8px 16px;
  margin-right: 24px;
  cursor: pointer;
  color: #666;
  border-radius: 4px;
}

.content-tab.active {
  color: #1890ff;
  background-color: #e6f7ff;
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