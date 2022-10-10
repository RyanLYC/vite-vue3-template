# Vite + Vue3 + TypeScript + Element Plus + SASS + ESLint + Prettier + 支持 jsx  支持setup 语法糖

修改 Vite 配置文件

# 规范目录结构

├── publish/
└── src/
├── api/ // 接口文件
├── assets/ // 静态资源目录
├── common/ // 通用类库目录
├── components/ // 公共组件目录
├── router/ // 路由配置目录
├── store/ // 状态管理目录
├── style/ // 通用 CSS 目录
├── utils/ // 工具函数目录
├── views/ // 页面组件目录
├── App.vue
├── main.ts
├── shims-vue.d.ts
├── tests/ // 单元测试目录
├── index.html
├── tsconfig.json // TypeScript 配置文件
├── vite.config.ts // Vite 配置文件
└── package.json

# 集成 UI 框架 Element Plus

# npm i sass -D 安装 sass

# 集成 EditorConfig 配置

EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。

官网：editorconfig.org

在项目根目录下增加 .editorconfig 文件：

注意：
VSCode 使用 EditorConfig 需要去插件市场下载插件 EditorConfig for VS Code 。
JetBrains 系列（WebStorm、IntelliJ IDEA 等）则不用额外安装插件，可直接使用 EditorConfig 配置。

# 集成 Prettier 配置

npm i prettier -D

配置 .prettierrc

注意：
VSCode 编辑器使用 Prettier 配置需要下载插件 Prettier - Code formatter 。
JetBrains 系列编辑器（WebStorm、IntelliJ IDEA 等）则不用额外安装插件，可直接使用 Prettier 配置。

# 集成 ESLint 配置

VSCode 在 settings.json 设置文件中，增加以下代码：
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
}

# 集成 husky 和 lint-staged

# 集成 Commitizen 实现规范提交 git cz 提交

# 单元测试 jest

## 技术栈

- 编程语言：[TypeScript 4.x](https://www.typescriptlang.org/zh/) + [JavaScript](https://www.javascript.com/)
- 构建工具：[Vite 2.x](https://cn.vitejs.dev/)
- 前端框架：[Vue 3.x](https://v3.cn.vuejs.org/)
- 路由工具：[Vue Router 4.x](https://next.router.vuejs.org/zh/index.html)
- 状态管理：[Vuex 4.x](https://next.vuex.vuejs.org/)
- UI 框架：[Element Plus](https://element-plus.org/#/zh-CN)
- CSS 预编译：[Stylus](https://stylus-lang.com/) / [Sass](https://sass.bootcss.com/documentation) / [Less](http://lesscss.cn/)
- HTTP 工具：[Axios](https://axios-http.com/)
- Git Hook 工具：[husky](https://typicode.github.io/husky/#/) + [lint-staged](https://github.com/okonet/lint-staged)
- 代码规范：[EditorConfig](http://editorconfig.org) + [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/) + [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#translation)
- 提交规范：[Commitizen](http://commitizen.github.io/cz-cli/) + [Commitlint](https://commitlint.js.org/#/)
- 单元测试：[vue-test-utils](https://next.vue-test-utils.vuejs.org/) + [jest](https://jestjs.io/) + [vue-jest](https://github.com/vuejs/vue-jest) + [ts-jest](https://kulshekhar.github.io/ts-jest/)
- 自动部署：[GitHub Actions](https://docs.github.com/cn/actions/learn-github-actions)

## 快速开始

### 安装依赖

```sh
npm install
# or
yarn add
```

### 启动项目

```sh
npm run dev
```

### 项目打包

```sh
npm run build
```

## 许可

MIT Copyright © 2021 RyanLYC
