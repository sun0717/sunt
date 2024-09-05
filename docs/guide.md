---
nav:
  title: 快速上手
  order: 1
---

# 快速上手

## 安装

**使用 npm / yarn / pnpm 安装**

```shell
npm install @sunt-ui/components
npm install @sunt-ui/hooks
```

```shell
yarn add @sunt-ui/components
yarn add @sunt-ui/hooks
```

```shell
pnpm add @sunt-ui/components
pnpm add @sunt-ui/hooks
```

### 自动按需加载

使用 [babel-plugin-import ](https://www.npmjs.com/package/babel-plugin-import) 优化引入方式，如下：

```js
import { Button } from '@sunt-ui/components'; // 与上述示例等价

ReactDOM.render(<Button text="普通按钮" style={{ width: 200 }} />, mountNode);
```

安装 `babel-plugin-import`

```
npm install babel-plugin-import --save-dev
yarn add babel-plugin-import --dev
pnpm add babel-plugin-import --D
```

配置`.babelrc` 或 `babel-loader`

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "@sunt-ui/components",
        "libraryDirectory": "esm", // default: lib
        "style": true // or 'css'
      }
    ]
  ]
}
```
