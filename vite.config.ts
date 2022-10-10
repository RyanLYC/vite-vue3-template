import { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
// import styleImport from 'vite-plugin-style-import'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'
import vuejsx from '@vitejs/plugin-vue-jsx'
// import viteSvgIcons from 'vite-plugin-svg-icons'
// import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'
// import { viteMockServe } from 'vite-plugin-mock'
// import viteCompression from 'vite-plugin-compression'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import topLevelAwait from 'vite-plugin-top-level-await'

// https://vitejs.dev/config/
export default (): UserConfigExport => {
  return {
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: "import { h } from 'vue';"
    },
    plugins: [
      vue(),
      vuejsx()
      // 不用这个插件了 svg 用 iconfont，其他渐变图片使用png，暂时都没有压缩。
      // viteSvgIcons({
      //   // 指定需要缓存的图标文件夹
      //   iconDirs: [resolve(process.cwd(), 'src/icons')],
      //   // 指定symbolId格式
      //   symbolId: 'icon-[dir]-[name]'
      // }),
      // topLevelAwait({
      //   // The export name of top-level await promise for each chunk module
      //   promiseExportName: '__tla',
      //   // The function to generate import names of top-level await promise in each chunk module
      //   promiseImportName: (i) => `__tla_${i}`
      // })

      // importToCDN({
      //   modules: [autoComplete('lodash')]
      // }),
      // mock 模拟 接口返回数据
      // viteMockServe({ supportTs: true })
      // 打包压缩，主要是本地gzip，如果服务器配置压缩也可以
      // viteCompression()
      // 按需载入 Element Plus
      // AutoImport({
      //   resolvers: [ElementPlusResolver()]
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver()]
      // })
    ],
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       // example : additionalData: `@import "./src/design/styles/variables";`
    //       // dont need include file extend .scss
    //       additionalData: `@import "./src/styles/global.scss";`
    //     }
    //   }
    // },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目
      }
    },
    build: {
      // target: 'es2019',
      assetsDir: './statics',
      chunkSizeWarningLimit: 1000,
      minify: 'terser',
      cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      terserOptions: {
        compress: {
          // warnings: false,
          drop_console: true, // 打包时删除console
          drop_debugger: true, // 打包时删除 debugger
          pure_funcs: ['console.log']
        },
        output: {
          // 去掉注释内容
          comments: true
        }
      }
      // rollupOptions: {
      //  external: ['lodash']
      // output: {
      //   manualChunks: {
      //     // 拆分代码，这个就是分包，配置完后自动按需加载，现在还比不上webpack的splitchunk，不过也能用了。
      //     // vue: ['vue', 'vue-router', 'vuex'],
      //     // vue: ['vue', 'vue-router']
      //     // vant: ['vant'],
      //     // echarts: ['echarts']
      //   }
      // }
      // },
      // brotliSize: false
    },
    base: './', // 设置打包路径
    server: {
      host: '0.0.0.0',
      port: 3500, // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
      hmr: true
      // cors: true, // 允许跨域
      // proxy: null
    }
  }
}
