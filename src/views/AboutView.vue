<template>
  <div class="about">
    <div class="container">
      <div class="about-header">
        <h1>关于项目</h1>
        <p class="subtitle">Vue 项目 800 的详细信息</p>
      </div>
      
      <div class="about-content">
        <div class="about-section">
          <h2>项目简介</h2>
          <p>
            这个项目是一个现代化的 Vue.js 单页应用程序，展示了当前最佳的前端开发实践。
            它使用了最新的技术栈，包括 Vue 3 的组合式 API、Vite 构建工具、
            Vue Router 路由管理和 Pinia 状态管理。
          </p>
        </div>
        
        <div class="about-section">
          <h2>技术栈</h2>
          <ul class="tech-list">
            <li><strong>Vue 3:</strong> 渐进式 JavaScript 框架</li>
            <li><strong>Vite:</strong> 下一代前端构建工具</li>
            <li><strong>Vue Router:</strong> Vue.js 的官方路由管理器</li>
            <li><strong>Pinia:</strong> Vue.js 的状态管理库</li>
            <li><strong>ESLint & Prettier:</strong> 代码质量和格式化工具</li>
          </ul>
        </div>
        
        <div class="about-section">
          <h2>项目特点</h2>
          <div class="features">
            <div class="feature">
              <h3>🚀 高性能</h3>
              <p>使用 Vite 提供极速的开发体验和优化的生产构建</p>
            </div>
            <div class="feature">
              <h3>📱 响应式设计</h3>
              <p>完全适配移动设备和桌面设备</p>
            </div>
            <div class="feature">
              <h3>🎨 现代化 UI</h3>
              <p>简洁美观的用户界面设计</p>
            </div>
            <div class="feature">
              <h3>🔧 可维护性</h3>
              <p>清晰的代码结构和最佳实践</p>
            </div>
          </div>
        </div>
        
        <div class="about-section">
          <h2>开发团队</h2>
          <p>
            这个项目由经验丰富的开发团队创建，致力于提供高质量的前端解决方案。
            我们相信使用现代化的工具和最佳实践能够创造出优秀的用户体验。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 组合式 API - 这里可以添加响应式数据和方法
</script>

<style scoped>
.about {
  min-height: calc(100vh - 200px);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}

.about-header {
  text-align: center;
  padding: 2rem 0 3rem;
}

.about-header h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.25rem;
  color: #7f8c8d;
  margin: 0;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.about-section h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

.about-section p {
  line-height: 1.8;
  color: #555;
  font-size: 1.1rem;
}

.tech-list {
  list-style: none;
  padding: 0;
}

.tech-list li {
  padding: 0.8rem 0;
  border-bottom: 1px solid #ecf0f1;
  color: #555;
  font-size: 1.1rem;
}

.tech-list li:last-child {
  border-bottom: none;
}

.tech-list strong {
  color: #2c3e50;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.feature {
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #3498db;
}

.feature h3 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
  font-size: 1.2rem;
}

.feature p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-header h1 {
    font-size: 2rem;
  }
  
  .about-section {
    padding: 1.5rem;
  }
  
  .features {
    grid-template-columns: 1fr;
  }
}
</style>