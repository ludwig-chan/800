import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // 状态 (state)
  const count = ref(0)
  const name = ref('Vue 项目 800')

  // 计算属性 (getters)
  const doubleCount = computed(() => count.value * 2)
  const isEven = computed(() => count.value % 2 === 0)

  // 动作 (actions)
  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function reset() {
    count.value = 0
  }

  function setCount(newCount) {
    count.value = newCount
  }

  return {
    // 状态
    count,
    name,
    // 计算属性
    doubleCount,
    isEven,
    // 动作
    increment,
    decrement,
    reset,
    setCount
  }
})