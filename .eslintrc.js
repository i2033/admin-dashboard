module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  globals: {
    AMap: true,
    AMapUI: true,
  },
  extends: [
    'plugin:vue/essential',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'camelcase': 'off',
    'eqeqeq': 'warn', // 不强制全等
    'array-bracket-spacing': 'off', // 数组左右空格
    'prefer-const': 'off', // 推荐const
    'space-before-function-paren': 'off', // 方法前空格
    'no-unused-vars': 'off', // 定义但未使用
    'no-alert': 'warn', // alert提醒
    'dot-notation': 'off', // a['b'] => a.b
    'no-empty': 'warn', // 空白块
    'jsdoc/require-param': 'off', // 非标准文档
    'prefer-promise-reject-errors': 'off', // reject必须返回error类型
    'no-else-return': 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 'off',
    'no-irregular-whitespace': 'off',
    'vue/no-template-key': 'off',
    'vue/valid-template-root': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
