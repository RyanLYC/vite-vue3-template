import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from '@/router/index'
import { key, store } from '@/store'
import App from './App.vue'
import 'element-plus/dist/index.css'

import '@/styles/base.css'
import '@/styles/globalColor.scss'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store, key).mount('#app')
