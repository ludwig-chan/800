<template>
  <div class="new-page">
    <div class="page-header">
      <h1>欢迎来到新页面</h1>
      <p class="subtitle">这是通过顶部链接访问的新页面</p>
    </div>
    
    <div class="page-content">
      <div class="content-section">
        <h2>关于我们</h2>
        <p>这里可以展示您的内容，比如公司介绍、产品信息、联系方式等。</p>
      </div>
      
      <div class="content-section">
        <h2>功能特点</h2>
        <ul class="feature-list">
          <li>功能特点 1</li>
          <li>功能特点 2</li>
          <li>功能特点 3</li>
          <li>功能特点 4</li>
        </ul>
      </div>
      
      <div class="content-section">
        <h2>联系方式</h2>
        <div class="contact-info">
          <p><strong>电话：</strong>123-4567-8910</p>
          <p><strong>邮箱：</strong>contact@example.com</p>
          <p><strong>地址：</strong>某某市某某区某某路123号</p>
        </div>
      </div>
      
      <div class="back-link">
        <RouterLink to="/" class="btn-back">返回首页</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.new-page {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 64px);
  background-color: #ffffff;
}

.page-header {
  text-align: center;
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 2px solid #e6e6e6;
}

.page-header h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 15px;
  font-weight: 600;
}

.subtitle {
  font-size: 18px;
  color: #666;
  margin: 0;
}

.page-content {
  padding: 20px 0;
}

.content-section {
  margin-bottom: 40px;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.content-section:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.content-section h2 {
  font-size: 24px;
  color: #1890ff;
  margin-bottom: 20px;
  font-weight: 500;
}

.content-section p {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  margin: 10px 0;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.feature-list li {
  padding: 12px 20px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border-left: 4px solid #1890ff;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  transition: all 0.2s ease;
}

.feature-list li:hover {
  background-color: #e6f7ff;
  transform: translateX(5px);
}

.contact-info {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 4px;
}

.contact-info p {
  margin: 15px 0;
  font-size: 16px;
  color: #333;
}

.contact-info strong {
  color: #1890ff;
  margin-right: 10px;
}

.back-link {
  text-align: center;
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid #e6e6e6;
}

.btn-back {
  display: inline-block;
  padding: 12px 40px;
  background-color: #1890ff;
  color: #ffffff;
  text-decoration: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
}

.btn-back:hover {
  background-color: #40a9ff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .new-page {
    padding: 20px;
  }
  
  .page-header h1 {
    font-size: 28px;
  }
  
  .subtitle {
    font-size: 16px;
  }
  
  .content-section {
    padding: 20px;
  }
  
  .content-section h2 {
    font-size: 20px;
  }
}
</style>
