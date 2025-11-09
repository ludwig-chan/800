<template>
  <div class="loading-spinner">
    <div class="dot-container">
      <div class="dot dot-1"></div>
      <div class="dot dot-2"></div>
      <div class="dot dot-3"></div>
      <div class="dot dot-4"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.dot-container {
  position: relative;
  width: 20px;
  height: 20px;
  animation: rotate 1.5s linear infinite;
}

.dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #1890ff;
}

.dot-1 {
  top: 0;
  left: 0;
  opacity: 1;
}

.dot-2 {
  top: 0;
  right: 0;
  opacity: 0.7;
}

.dot-3 {
  bottom: 0;
  right: 0;
  opacity: 0.4;
}

.dot-4 {
  bottom: 0;
  left: 0;
  opacity: 0.2;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
