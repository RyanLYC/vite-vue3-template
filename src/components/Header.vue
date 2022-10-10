<template>
  <div class="header">
    <div class="title" @click="router.push('/')">
      # Vite + Vue3 + TypeScript + Element Plus + SASS + ESLint + Prettier +
      支持 jsx 支持setup 语法糖
    </div>
    <div>
      <el-dropdown trigger="click">
        <span style="cursor: pointer">
          皮肤
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="(color, index) in themes"
              :key="index"
              @click="selectStyle(color)"
            >
              {{ color.label }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="go-github" @click="goGitHub">
      <i class="icon el-icon-s-promotion"></i>
      GitHub
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'

export default {
  name: 'Header',
  setup() {
    const router = useRouter()

    const goGitHub = () => {
      window.open('https://github.com/RyanLYC/vite-vue3-template')
    }

    const themes = [
      {
        label: '默认',
        value: 'base'
      },
      {
        label: '黑色',
        value: 'black'
      }
    ]
    const htmlElement: any = document.querySelector('html')
    htmlElement.setAttribute(
      'class',
      localStorage.getItem('zg-style') || 'base'
    )
    const selectStyle = (color: { label: string; value: string }) => {
      localStorage.setItem('zg-style', color.value)
      htmlElement.setAttribute('class', color.value)
    }

    return {
      themes,
      router,
      goGitHub,
      selectStyle
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  font-weight: bold;

  .title {
    font-size: 20px;
    cursor: pointer;
  }

  .go-github {
    cursor: pointer;
    font-size: 16px;

    .icon {
      font-size: 20px;
    }
  }
}
</style>
