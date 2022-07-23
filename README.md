# Vite Vue Starter

[![action][ci-image]][ci-url]
[![GitHub repo size][repo-size-image]][repository-url]
[![Release Date][rle-image]][rle-url]
[![GitHub last commit][last-commit-image]][repository-url]
[![license][license-image]][repository-url]

[ci-image]: https://img.shields.io/github/workflow/status/funnyzak/vite-vue-starter/Release
[ci-url]: https://github.com/funnyzak/vite-vue-starter/actions
[license-image]: https://img.shields.io/github/license/funnyzak/vite-vue-starter.svg?style=flat-square
[repository-url]: https://github.com/funnyzak/vite-vue-starter
[repo-size-image]: https://img.shields.io/github/repo-size/funnyzak/vite-vue-starter
[commit-activity-image]: https://img.shields.io/github/commit-activity/m/funnyzak/vite-vue-starter?style=flat-square
[last-commit-image]: https://img.shields.io/github/last-commit/funnyzak/vite-vue-starter?style=flat-square
[rle-image]: https://img.shields.io/github/release-date/funnyzak/vite-vue-starter.svg
[rle-url]: https://github.com/funnyzak/vite-vue-starter/releases/latest

Vue **3.0.0** 脚手架项目，构建基于 Vue-Cli。用于快速开始一个 Vue 项目开发。[预览](https://funnyzak.github.io/vite-vue-starter/)。

## 特性

- typescript 支持
- css预处理 less、sass、stylus
- 多页面应用模式
- plop 支持
- 定义常用脚本命令

## 使用

使用的 Node 的构建版本为 **v16.16.0**，为避免冲突，建议使用此版本。可以使用 **_nvm_** 管理 Node 版本。

```bash
# 切换node版本
nvm use 16.16.0

# 安装依赖
npm ci

# 默认启动（所有）
npm run dev

# 全部构建（所有）
npm run build

# Lint 格式化/检查
npm run eslint

# 运行 jest 测试
npm run test:unit
```

## 目录

    ├── dist                            // 构建输出
    ├── public                          // 静态资源
    ├── src                             // 前端源码
    ├── tests                           // 测试
    ├── tsconfig.json                   // typescript 配置
    └── vite.config.js                  // vite配置

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
