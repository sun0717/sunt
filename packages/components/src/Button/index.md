---
group:
  title: 通用
  order: 0
nav:
  title: 组件
  path: /components
---

# Button 按钮

## 普通按钮

```tsx
import React from 'react';
import { Button } from '@sunt-ui/components';

export default () => <Button text="普通按钮" style={{ width: 200 }} />;
```

## 高亮按钮

```tsx
import React from 'react';
import { Button } from '@sunt-ui/components';

export default () => (
  <Button text="高亮按钮" type="highlight" style={{ width: 200 }} />
);
```

## 禁用按钮

```tsx
import React from 'react';
import { Button } from '@sunt-ui/components';

export default () => <Button text="禁用按钮" disabled style={{ width: 200 }} />;
```

## API

| Name      | Description        | Type                                                         | Default   |
| --------- | ------------------ | ------------------------------------------------------------ | --------- |
| type      | 设置按钮类型       | `highlight / default`                                        | `default` |
| disabled  | 设置按钮失效状态   | `boolean`                                                    | `false`   |
| icon      | 设置按钮的图标组件 | `ReactNode`                                                  | `--`      |
| text      | 显示标题           | `string`                                                     | `''`      |
| className | 语义化结构 class   | `string`                                                     | `--`      |
| style     | 语义化结构 style   | `object`                                                     | `--`      |
| onClick   | 点击按钮时的回调   | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | `--`      |
