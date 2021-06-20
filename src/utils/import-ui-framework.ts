import { App } from 'vue'
import {
  locale,
  ElIcon,
  ElLoading,
  ElCard,
  ElButton,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElMessageBox,
  ElContainer,
  ElHeader,
  ElAside
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
locale(lang)

const components: any[] = [
  ElIcon,
  ElLoading,
  ElCard,
  ElButton,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElContainer,
  ElHeader,
  ElAside
]
const plugins: any[] = [ElMessageBox]

export default function importUiFramework(app: App) {
  // 按需载入 Element Plus 组件
  components.forEach((component) => {
    app.component(component.name, component)
  })
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
  return app
}
