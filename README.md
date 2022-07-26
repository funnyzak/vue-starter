# Vue Starter

[![action][ci-image]][ci-url] [![Release Date][rle-image]][rle-url] [![GitHub last commit][last-commit-image]][repository-url] [![tag][tag-image]][rle-url] [![license][license-image]][repository-url]

基于 ` Vue3 + TypeScript + Vite` ，及众多开源整合，构建 `Vue` 开发脚手架。帮助你进行 `Vue` 项目开发。使用 `Vitest` 进行单元测试。

[在线预览](https://vuestarter2.vercel.app/)

 <!-- [![Sourcegraph][sg-image]][sg-url]  -->
<!-- [![GitHub repo size][repo-size-image]][repository-url]
 -->
[ci-image]: https://github.com/funnyzak/vue-starter/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/funnyzak/vue-starter/actions
[license-image]: https://img.shields.io/github/license/funnyzak/vue-starter.svg?style=flat-square
[repository-url]: https://github.com/funnyzak/vue-starter
[repo-size-image]: https://img.shields.io/github/repo-size/funnyzak/vue-starter
[commit-activity-image]: https://img.shields.io/github/commit-activity/m/funnyzak/vue-starter?style=flat-square
[last-commit-image]: https://img.shields.io/github/last-commit/funnyzak/vue-starter?style=flat-square&lable=commit
[rle-image]: https://img.shields.io/github/release-date/funnyzak/vue-starter.svg?label=release
[rle-url]: https://github.com/funnyzak/vue-starter/releases/latest
[sg-url]: https://sourcegraph.com/github.com/funnyzak/vue-starter
[sg-image]: https://img.shields.io/badge/view%20on-Sourcegraph-brightgreen.svg?style=flat-square
[tag-image]: https://img.shields.io/github/tag/funnyzak/vue-starter.svg

## Features

- Typescript 支持
- CSS 预处理 less、sass、stylus、WindiCSS
- Locale 国际化
- 多页面应用模式
- Plop 支持
- 定义常用脚本命令
- Eslint Support
- Lint Staged Hook
- 使用 Pinia 来管理状态
- 自定义权限指令
- 使用 Axios 进行 Http API 请求
- 支持 JSX 语法
- 引入 Animite.css
- 使用 vue-Router
- 实现了一套根据权限 Code 控制路由的逻辑
- 使用 keepAlive, 实现页面缓存
- 使用 Vitest 进行单元测试
- Utils 通用工具函数

## Environment

`Node` 建议使用 `Node 16` 或更高版本。开发工具建议使用 [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)。

## Usage

```bash
# 安装依赖
yarn

# 默认启动
yarn dev

# 预览
yarn preview

# 全部构建（所有）
yarn build

# 删除 node_modules
yarn clean

# EsLint 检查
yarn eslint:check

# ESLint 修复
yarn eslint:fix

# 使用 prettier 代码格式检查
yarn style:check

# 使用 prettier 代码格式化
yarn style:fix

# lint staged hook 检查
yarn lint:staged

# 模板新建
yarn p

# test
yarn test
yarn test-ui

# coverage report
yarn cov

# dev server
yarn serve:dev
yarn serve:prod
yarn serve:test

# windicss-analysis
yarn windicss-analysis

# build your mode
npx vite build --mode your-mode

# dev your mode
npx vite --mode your-mode
```

## Structure

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
    ├── index.html                               // 主项目入口文件
    ├── nested.html                              // 次/嵌套页面入口文件
    ├── package-lock.json                        // 包依赖配置文件
    ├── package.json                             // 包配置文件
    ├── plop                                     // plop 配置
    ├── plopfile.cjs                             // plop 配置文件
    ├── postcss.config.js                        // postcss 配置文件
    ├── prettier.config.cjs                      // prettier 配置文件
    ├── public                                   // 项目公共目录
    ├── src                                      // 项目源码目录
    ├── router
    │   ├── index.ts                             // 路由入口
    │   ├── modules                              // 业务路由模块，用户登陆后的根据用户权限进行动态路由添加
    │   │   ├── index.ts
    │   │   └── user.ts
    │   └── remaining.ts                         // 其他路由，用户登陆后，不需要权限即可访问的路由
    │   ├── assets                               // 静态资源目录
    │   |── api                                  // api 接口目录
    │   ├── components                           // 组件目录
    │   ├── config                               // 配置目录
    │   ├── directives                           // 指令目录
    │   ├── hooks                                // 钩子目录
    │   ├── locales                              // 国际化目录
    │   ├── views                                // 默认视图目录
    │   ├── pages                                // 次页面目录（备用，构建多页应用）
    │   ├── plugins                              // 插件目录
    │   ├── store                                // 状态管理
    │   ├── styles                               // 样式目录
    │   ├── utils                                // 工具函数目录
    │   ├── main.ts                              // 项目入口文件
    │   ├── App.vue                              // 项目入口组件
    │   └── vite-env.d.ts                        // vite 环境配置文件
    ├── tsconfig.json                            // TypeScript 配置文件
    ├── windi.config.ts                          // Windi 配置文件
    ├── tsconfig.node.json
    ├── types                                    // 类型文件目录
    └── vite.config.ts                           // vite 配置文件

## Q&A

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Use Take Over Mode instead of TS Plugin

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## Reference

- [Vitest](https://cn.vitest.dev/guide/features.html)
- [vite](https://cn.vitejs.dev/guide/features.htm)
- [vite plugin](https://cn.vitejs.dev/plugins/)
- [awesome vite plugin](https://github.com/vitejs/awesome-vite#plugins)
- [Babel Config](https://babel.docschina.org/docs/en/7.0.0/configuration/)
- [eslintignore-file](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file)
- [TSconfig](https://www.typescriptlang.org/tsconfig/)
- [npmrc](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc)
- [gitignore](https://git-scm.com/docs/gitignore)
- [prettier](https://prettier.io/docs/en/index.html)
- [ruoyi](https://github.dev/YunaiV/ruoyi-vue-pro/)
- [EsLint](https://eslint.org/docs/user-guide/configuring/)
- [SFC](https://v3.vuejs.org/guide/single-file-component.html)
- [SFC setup](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)

## Contribution

如果你有任何的想法或者意见，欢迎提 Issue 或者 PR。

<a href="https://github.com/funnyzak/vue-starter/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=funnyzak/vue-starter" />
</a>

## License

MIT License © 2022 [funnyzak](https://github.com/funnyzak)
