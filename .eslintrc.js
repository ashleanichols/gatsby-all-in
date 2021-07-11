const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'react/jsx-filename-extension': 0
  },
  settings:  {
    react:  {
      version:  'detect'
    },
    'import/resolver': {
      alias: {
        map: [
          ['@src', path.join(__dirname, 'src')],
          ['@components', path.join(__dirname, 'src/components')],
          ['@common', path.join(__dirname, 'src/components/common')],
          ['@containers', path.join(__dirname, 'src/components/containers')],
          ['@layouts', path.join(__dirname, 'src/components/layouts')],
          ['@pages', path.join(__dirname, 'src/pages')],
          ['@styles', path.join(__dirname, 'src/styles')],
          ['@static', path.join(__dirname, 'static')],
          ['@store', path.join(__dirname, 'src/store')],
          ['@providers', path.join(__dirname, 'src/components/providers')]
        ],
      }
    }
  }
}
