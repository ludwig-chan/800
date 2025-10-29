<template>
  <div class="hello-world">
    <h2>{{ msg }}</h2>
    <p>这是一个示例组件，展示了 Vue 3 的组合式 API。</p>
    
    <div class="counter-demo">
      <p>计数器示例:</p>
      <button @click="increment" class="counter-btn">
        点击次数: {{ count }}
      </button>
    </div>
    
    <div class="input-demo">
      <p>双向绑定示例:</p>
      <input 
        v-model="message" 
        placeholder="输入一些文字..." 
        class="demo-input"
      />
      <p v-if="message" class="echo">你输入的是: {{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 定义 props
defineProps({
  msg: {
    type: String,
    default: 'Hello World!'
  }
})

// 响应式数据
const count = ref(0)
const message = ref('')

// 方法
const increment = () => {
  count.value++
}
</script>

<style scoped>
.hello-world {
  padding: 2rem;
  text-align: center;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
}

.hello-world h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.counter-demo,
.input-demo {
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid #ecf0f1;
  border-radius: 6px;
}

.counter-btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.counter-btn:hover {
  background-color: #2980b9;
}

.demo-input {
  padding: 0.8rem;
  border: 2px solid #ecf0f1;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;
  margin: 0.5rem 0;
}

.demo-input:focus {
  outline: none;
  border-color: #3498db;
}

.echo {
  color: #27ae60;
  font-weight: 600;
  margin-top: 0.5rem;
}
</style>