module.exports = {
  printWidth: 100, //单行长度
  tabWidth: 2, //缩进长度
  useTabs: false,
  semi: true, //句末使用分号
  vueIndentScriptAndStyle: false, //不对vue中的script及style标签缩进

  singleQuote: true, //使用单引号

  // Change when properties in objects are quoted.
  quoteProps: 'consistent',
  bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
  trailingComma: 'none', //多行时尽可能打印尾随逗号
  jsxSingleQuote: false,
  arrowParens: 'always', //单参数箭头函数参数周围使用圆括号-eg: (x) => x
  insertPragma: false,
  requirePragma: false, //无需顶部注释即可格式化
  requirePragma: false,
  proseWrap: 'never',
  singleQuote: true,
  htmlWhitespaceSensitivity: 'strict', //对HTML全局空白不敏感
  endOfLine: 'auto',
  rangeStart: 0
};