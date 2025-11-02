<template>
  <div class="home-page">
    <!-- 主页背景图片 -->
    <div class="mainpage-container">
      <img src="@/assets/images/mainpage.png" alt="主页背景" class="mainpage-image" />
    </div>
  </div>
</template>

<script setup>
// 页面逻辑
</script>

<style scoped>
.home-page {
  padding: 0;
  margin: 0;
  height: calc(100vh - 64px);
  width: 100%;
  overflow: hidden;
}

/* 主页背景图片容器 */
.mainpage-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.mainpage-image {
  width: 100%;
  height: 100%;
  object-fit: fill; /* 拉伸图片填充整个容器 */
  display: block;
  margin-left: 8px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .mainpage-container {
    height: calc(100vh - 64px);
  }
}
</style>