import { createApp } from 'vue'
import importUiFramework from '@/utils/import-ui-framework'
import router from '@/router/index'
import { key, store } from '@/store'
import App from './App.vue'

import 'element-plus/packages/theme-chalk/src/base.scss'

import '@/styles/base.css'
import '@/styles/globalColor.scss'

const app = createApp(App)
importUiFramework(app).use(router).use(store, key).mount('#app')
