import { resolve } from 'path';

import EslintPlugin from 'vite-plugin-eslint';

import legacy from '@vitejs/plugin-legacy';
import { vueI18n } from '@intlify/vite-plugin-vue-i18n';
import DefineOptions from 'unplugin-vue-define-options/vite';
import WindiCSS from 'vite-plugin-windicss';

import { loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';

import vue from '@vitejs/plugin-vue';

// 当前执行node命令时文件夹的地址（工作目录）
const rootPath = process.cwd();

// 路径查找
function pathResolve(dir: string) {
  return resolve(rootPath, '.', dir);
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  let env = {} as any;
  // const isBuild = command === 'build';

  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  env = loadEnv(mode, rootPath, '');

  // console.log(command, mode, JSON.stringify(env), ssrBuild);
  // console.log(env.APP_ENV, process.env.APP_ENV);

  const viteConfig = {
    // 项目根目录（index.html 文件所在的位置）。可以是一个绝对路径，或者一个相对于该配置文件本身的相对路径。
    root: './',
    // 开发或生产环境服务的公共基础路径。
    base: env.VITE_BASE_PATH,
    // 作为静态资源服务的文件夹。该目录中的文件在开发期间在 / 处提供，并在构建期间复制到 outDir 的根目录，并且始终按原样提供或复制而无需进行转换。该值可以是文件系统的绝对路径，也可以是相对于项目的根目录的相对路径。
    publicDir: 'public',
    resolve: {
      // 导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会影响 IDE 和类型支持。
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
      alias: [
        {
          find: /\@\//,
          replacement: `${pathResolve('src')}/`
        },
        {
          find: 'components',
          replacement: pathResolve('src/components')
        }
      ]
    },
    build: {
      target: 'es2015',
      outDir: env.VITE_OUT_DIR || 'dist',
      // 指定生成静态资源的存放路径（相对于 build.outDir）。
      assetsDir: 'static',
      // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
      assetsInlineLimit: 4096,
      // 启用/禁用 CSS 代码拆分。当启用时，在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在其被加载时插入。
      cssCodeSplit: true,
      // 多页面应用模式
      rollupOptions: {
        input: {
          main: pathResolve('index.html'),
          nested: pathResolve('nested.html')
        }
      },
      sourcemap: env.VITE_SOURCEMAP === 'true',
      terserOptions: {
        compress: {
          drop_debugger: env.VITE_DROP_DEBUGGER === 'true',
          drop_console: env.VITE_DROP_CONSOLE === 'true'
        }
      }
    },
    // vite 配置(环境变量)
    define: {
      // __APP_ENV__: env.APP_ENV
    },
    server: {
      host: '0.0.0.0',
      port: 1703,
      open: false,
      cors: true,
      // 代理配置
      proxy: {
        // 字符串简写写法
        '/foo': 'http://localhost:4567',
        // 选项写法
        '/api': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        // 正则表达式写法
        '^/fallback/.*': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/fallback/, '')
        },
        // 使用 proxy 实例
        '/api2': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          configure: (_proxy, _options) => {
            console.log(_proxy, _options);
            // proxy 是 'http-proxy' 的实例
          }
        },
        // Proxying websockets or socket.io
        '/socket.io': {
          target: 'ws://localhost:3000',
          ws: true
        }
      }
    },
    preview: {
      open: false,
      // 跨域配置
      cors: true
    },
    plugins: [
      vue(),
      WindiCSS(),
      DefineOptions(),
      legacy({
        polyfills: true,
        targets: ['defaults', 'not IE 11']
      }),
      vueI18n({
        runtimeOnly: false,
        compositionOnly: true,
        include: [pathResolve('src/locales/**')]
      }),
      EslintPlugin({
        cache: false,
        include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx'] // 检查的文件
      })
    ]
  };

  if (command === 'serve') {
    // dev 独有配置
    viteConfig.server.open = false;
  } else {
    // command === 'build'
    // build 独有配置
  }

  return viteConfig;
};
