<template>
  <div class="chat-assistant" v-if="visible">
    <div class="chat-header">
      <div class="assistant-info">
        <div class="assistant-avatar">🤖</div>
        <div class="assistant-name">试试智能助手为您解答～</div>
      </div>
      <button class="close-btn" @click="$emit('close')">✕</button>
    </div>
    
    <div class="chat-content">
      <div class="suggestion-items">
        <div class="suggestion-item">
          🏪 店铺主体(营业执照)更改有什么要求
        </div>
        <div class="suggestion-item">
          📦 如何新增品牌资质
        </div>
        <div class="suggestion-item">
          🔄 如何新增/修改行业资质
        </div>
        <div class="suggestion-item">
          ⚖️ 怎么选择资证
        </div>
        <div class="suggestion-item">
          🔍 如何修改活动标签
        </div>
        <div class="suggestion-item">
          🏪 如何操作关店
        </div>
        <div class="suggestion-item">
          📊 申请店铺评级需要满足哪些条件
        </div>
        <div class="suggestion-item">
          🏢 企业店能投放推广信息/专卖店/专营店…
        </div>
      </div>
    </div>
    
    <div class="chat-input-section">
      <div class="input-wrapper">
        <input 
          type="text" 
          placeholder="请输入您的问题..." 
          v-model="inputMessage"
          @keyup.enter="sendMessage"
        />
        <button class="send-btn" @click="sendMessage">发送</button>
      </div>
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

const inputMessage = ref('')

const sendMessage = () => {
  if (inputMessage.value.trim()) {
    // 这里可以添加发送消息的逻辑
    console.log('发送消息:', inputMessage.value)
    inputMessage.value = ''
  }
}
</script>

<style scoped>
.chat-assistant {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 320px;
  height: 500px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  overflow: hidden;
}

.chat-header {
  background: linear-gradient(135deg, #4A90E2 0%, #7B68EE 100%);
  color: white;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.assistant-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.assistant-avatar {
  width: 32px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.assistant-name {
  font-size: 14px;
  font-weight: 500;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
}

.close-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.chat-content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
}

.suggestion-items {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.suggestion-item {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 12px;
  font-size: 13px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
  line-height: 1.4;
}

.suggestion-item:hover {
  background-color: #e6f7ff;
  border-color: #1890ff;
  color: #1890ff;
}

.chat-input-section {
  padding: 16px;
  border-top: 1px solid #e9ecef;
  background-color: #fafafa;
}

.input-wrapper {
  display: flex;
  gap: 8px;
}

.input-wrapper input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
}

.input-wrapper input:focus {
  border-color: #1890ff;
}

.send-btn {
  background-color: #1890ff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
}

.send-btn:hover {
  background-color: #40a9ff;
}

.send-btn:active {
  background-color: #096dd9;
}
</style>