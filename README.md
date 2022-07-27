# Vite Vue Starter

[![action][ci-image]][ci-url] [![Sourcegraph][sg-image]][sg-url] [![GitHub repo size][repo-size-image]][repository-url] [![Release Date][rle-image]][rle-url] [![GitHub last commit][last-commit-image]][repository-url] [![license][license-image]][repository-url]

[ci-image]: https://img.shields.io/github/workflow/status/funnyzak/vite-vue-starter/Release
[ci-url]: https://github.com/funnyzak/vite-vue-starter/actions
[license-image]: https://img.shields.io/github/license/funnyzak/vite-vue-starter.svg?style=flat-square
[repository-url]: https://github.com/funnyzak/vite-vue-starter
[repo-size-image]: https://img.shields.io/github/repo-size/funnyzak/vite-vue-starter
[commit-activity-image]: https://img.shields.io/github/commit-activity/m/funnyzak/vite-vue-starter?style=flat-square
[last-commit-image]: https://img.shields.io/github/last-commit/funnyzak/vite-vue-starter?style=flat-square
[rle-image]: https://img.shields.io/github/release-date/funnyzak/vite-vue-starter.svg
[rle-url]: https://github.com/funnyzak/vite-vue-starter/releases/latest
[sg-url]: https://sourcegraph.com/github.com/funnyzak/vite-vue-starter
[sg-image]: https://img.shields.io/badge/view%20on-Sourcegraph-brightgreen.svg?style=flat-square

Vue **3.0.0** 脚手架，构建基于 Vite。用于快速开启一个 Vue 项目。[预览](https://funnyzak.github.io/vite-vue-starter/)。

## 特性

- Typescript 支持
- CSS 预处理 less、sass、stylus
- Locale 国际化
- 多页面应用模式
- Plop 支持
- 定义常用脚本命令
- Eslint Support
- Lint Staged Hook
- 使用 Pinia 来管理状态
- 自定义权限指令
- 使用 Axios 进行 Http API 请求
- Utils 通用工具函数

## 使用

使用的 Node 的构建版本为 **v16.16.0**，为避免冲突，建议使用此版本。可以使用 **_nvm_** 管理 Node 版本。

```bash
# 切换node版本
nvm use 16.16.0

# 安装依赖
npm ci

# 默认启动（所有）
npm run dev

# 预览
npm run preview

# 全部构建（所有）
npm run build

# Lint 格式化/检查
npm run lint:eslint

# 运行 jest 测试
npm run test:unit

# 删除node_modules
npm run clean

# 代码格式化
npm run lint:format

# lint staged
npm run lint:staged

# 模板新建
npm run p

# 更多请看 package.json
npm run serve:dev
npm run serve:prod
npm run serve:test
```

## 目录

    ├── .editorconfig                            // 编辑器配置文件
    ├── .env.development                         // 环境配置文件（开发环境）
    ├── .env.production                          // 环境配置文件（生产环境）
    ├── .eslintignore                            // eslint 忽略文件
    ├── .eslintrc.cjs                            // eslint 配置文件
    ├── .github                                  // github 配置文件
    ├── .gitignore                               // git 忽略文件
    ├── .husky                                   // husky 配置文件
    ├── .npmrc                                   // npm 配置文件
    ├── .vscode                                  // vscode 配置文件
    ├── LICENSE                                  // 许可证文件
    ├── README.md                                // 项目介绍文件
    ├── dist                                     // 打包输出目录
    ├── index.html                               // 项目入口文件
    ├── nested.html                              // 嵌套页面入口文件
    ├── package-lock.json                        // 包依赖配置文件
    ├── package.json                             // 包配置文件
    ├── plop                                     // plop 配置
    ├── plopfile.cjs                             // plop 配置文件
    ├── postcss.config.js                        // postcss 配置文件
    ├── prettier.config.cjs                      // prettier 配置文件
    ├── public                                   // 项目公共目录
    ├── src                                      // 项目源码目录
    │  ├── assets                                // 静态资源目录
    │  |── api                                   // api 接口目录
    │  ├── components                            // 组件目录
    │  ├── config                                // 配置目录
    │  ├── directives                            // 指令目录
    │  ├── hooks                                 // 钩子目录
    │  ├── locales                               // 国际化目录
    │  ├── pages                                 // 页面目录
    │  ├── plugins                               // 插件目录
    │  ├── store                                 // 状态管理
    │  ├── styles                                // 样式目录
    │  ├── utils                                 // 工具函数目录
    │  └── vite-env.d.ts                         // vite 环境配置文件
    ├── tsconfig.json                            // TypeScript 配置文件
    ├── tsconfig.node.json
    ├── types                                    // 类型文件目录
    └── vite.config.ts                           // vite 配置文件

## template

Base On **Vue 3 + TypeScript + Vite** Template. This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## 参考

- [vite](https://cn.vitejs.dev/guide/features.htm)
- [vite plugin](https://cn.vitejs.dev/plugins/)
- [awesome vite plugin](https://github.com/vitejs/awesome-vite#plugins)
- [Babel Config](https://babel.docschina.org/docs/en/7.0.0/configuration/)
- [EsLint](https://eslint.org/docs/user-guide/configuring/)
- [eslintignore-file](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file)
- [TSconfig](https://www.typescriptlang.org/tsconfig/)
- [npmrc](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc)
- [gitignore](https://git-scm.com/docs/gitignore)
- [webpack](https://webpack.docschina.org/guides/getting-started/)
- [prettier](https://prettier.io/docs/en/index.html)
- [ruoyi](https://github.dev/YunaiV/ruoyi-vue-pro/)

## Contribution

如果你有任何的想法或者意见，欢迎提 Issue 或者 PR。

<a href="https://github.com/funnyzak/vite-vue-starter/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=funnyzak/vite-vue-starter" />
</a>

## License

MIT License © 2022 [funnyzak](https://github.com/funnyzak)
