---
group:
  title: 布局
  order: 0
nav:
  title: 组件
  path: /components
---

# Space 间距

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。

## 与 Flex 组件的区别

- Space 为内联元素提供间距，其本身会为每一个子元素添加包裹元素用于内联对齐。适用于行、列中多个子元素的等距排列。
- Flex 为块级元素提供间距，其本身不会添加包裹元素。适用于垂直或水平方向上的子元素布局，并提供了更多的灵活性和控制能力。

```tsx
import React from 'react';
import { Space } from '@sunt-ui/components';

export default () => {
  return (
    <Space
      className="container"
      direction="horizontal"
      align="end"
      wrap={true}
      size={['large', 'small']}
    >
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </Space>
  );
};
```

```tsx
/**
 * title: 配置Size
 * description: 无需单独设置 size
 */
import React from 'react';
import { Space } from '@sunt-ui/components';
import { ConfigProvider } from './ConfigProvider';

export default () => {
  return (
    <div>
      <ConfigProvider space={{ size: 20 }}>
        <Space direction="horizontal">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </Space>
        <Space direction="vertical">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </Space>
      </ConfigProvider>
    </div>
  );
};
```

## API

| Name      | Description                          | Type                              | Default      |
| --------- | ------------------------------------ | --------------------------------- | ------------ |
| className | 语义化 className                     | `string`                          | `--`         |
| style     | CSSProperties 类型                   | `React.CSSProperties`             | `--`         |
| split     | 设置拆分                             | `ReactNode`                       | `--`         |
| size      | 间距大小                             | `SizeType / [SizeType, SizeType]` | `small`      |
| direction | 间距方向                             | `vertical / horizontal`           | `horizontal` |
| align     | 对齐方式                             | `start / end / center / baseline` | `--`         |
| wrap      | 是否自动换行，仅在 horizontal 时有效 | `boolean`                         | `false`      |
