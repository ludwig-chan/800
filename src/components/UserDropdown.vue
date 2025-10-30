<template>
  <div class="user-dropdown" v-if="visible" @click.stop>
    <div class="user-profile">
      <div class="user-avatar">👤</div>
      <div class="user-details">
        <div class="user-name">时尚生活精致小铺XUq</div>
        <div class="user-id">ID:14538676856729</div>
      </div>
    </div>
    
    <div class="user-info-section">
      <div class="info-title">个人档案信息</div>
      <div class="info-items">
        <div class="info-item">管理员</div>
        <div class="info-item">商务</div>
        <div class="info-item">主权务</div>
      </div>
      <div class="phone-number">手机号 158****9995</div>
    </div>
    
    <div class="logout-section">
      <button class="logout-btn">退出</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])
</script>

<style scoped>
.user-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 280px;
  z-index: 1001;
  padding: 16px;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 16px;
}

.user-avatar {
  width: 48px;
  height: 48px;
  background-color: #1890ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
}

.user-details {
  flex: 1;
}

.user-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.user-id {
  font-size: 12px;
  color: #666;
}

.user-info-section {
  margin-bottom: 16px;
}

.info-title {
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
  font-weight: 500;
}

.info-items {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.info-item {
  background-color: #f0f9ff;
  color: #1890ff;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
}

.phone-number {
  font-size: 12px;
  color: #666;
}

.logout-section {
  border-top: 1px solid #f0f0f0;
  padding-top: 16px;
}

.logout-btn {
  width: 100%;
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.logout-btn:hover {
  background-color: #ff7875;
}
</style>