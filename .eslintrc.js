module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    quotes: ['warn', 'single', { avoidEscape: true }], // Define aspas simples
    'indent': ['error', 2], // Define o número de espaços para indentação
    'object-curly-spacing': ['error', 'always'], // Adiciona espaços em chaves
  },
}
