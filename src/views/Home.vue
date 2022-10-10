<template>
  <div class="home-container page-container">
    <img
      class="vue-element-plus-logo"
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <div class="page-title">
      # Vite + Vue3 + TypeScript + Element Plus + SASS + ESLint + Prettier +
      支持 jsx 支持setup 语法糖
    </div>
    <el-button type="primary">el-btn</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style scoped lang="scss">
.home-container {
  .vue-element-plus-logo {
    width: 50%;
  }
}
</style>
