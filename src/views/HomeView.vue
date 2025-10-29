<template>
  <div class="home">
    <div class="container">
      <div class="hero-section">
        <h1 class="hero-title">欢迎来到 Vue 项目 800!</h1>
        <p class="hero-description">
          这是一个使用 Vue 3 + Vite + Vue Router + Pinia 构建的现代化单页应用程序。
        </p>
        <div class="hero-buttons">
          <button @click="incrementCounter" class="btn btn-primary">
            点击次数: {{ counter }}
          </button>
          <RouterLink to="/about" class="btn btn-secondary">
            了解更多
          </RouterLink>
        </div>
      </div>
      
      <div class="features-section">
        <h2>项目特性</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>⚡ Vite</h3>
            <p>极速的开发服务器和构建工具</p>
          </div>
          <div class="feature-card">
            <h3>🎯 Vue 3</h3>
            <p>最新版本的 Vue.js 框架</p>
          </div>
          <div class="feature-card">
            <h3>🛣️ Vue Router</h3>
            <p>官方路由管理器</p>
          </div>
          <div class="feature-card">
            <h3>🍍 Pinia</h3>
            <p>现代化的状态管理库</p>
          </div>
        </div>
      </div>
      
      <!-- 添加示例组件 -->
      <HelloWorld msg="欢迎使用 Vue 3!" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

const counter = ref(0)

const incrementCounter = () => {
  counter.value++
}
</script>

<style scoped>
.home {
  min-height: calc(100vh - 200px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-section {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: -2rem -1rem 4rem;
  color: white;
  border-radius: 8px;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background-color: white;
  color: #667eea;
  transform: translateY(-2px);
}

.features-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.feature-card p {
  color: #7f8c8d;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>