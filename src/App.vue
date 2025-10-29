<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <h1 class="nav-title">Vue 项目 800</h1>
        <ul class="nav-menu">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">首页</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">关于</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    
    <main class="main-content">
      <RouterView />
    </main>
    
    <footer class="footer">
      <p>&copy; 2024 Vue 项目 800. 保留所有权利。</p>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.nav-title {
  margin: 0;
  font-size: 1.5rem;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-left: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: #34495e;
}

.main-content {
  flex: 1;
  padding: 2rem 0;
}

.footer {
  background-color: #ecf0f1;
  text-align: center;
  padding: 1rem;
  border-top: 1px solid #bdc3c7;
}
</style>