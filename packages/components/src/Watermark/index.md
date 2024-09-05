---
group:
  title: 反馈
  order: 0
nav:
  title: 组件
  path: /components
---

# Watermark 水印

给页面的某个区域加上水印。

## 何时使用

页面需要添加水印标识版权时使用。
适用于防止信息盗用。

```tsx
/**
 * title: 多行水印
 * description: 通过 content 设置 字符串数组 指定多行文字水印内容。
 */
import React from 'react';
import { Watermark } from '@sunt-ui/components';

export default () => {
  return (
    <Watermark
      content={['测试水印', 'sunt-7']}
      gap={[0, 0]}
      offset={[50, 100]}
      fontStyle={{
        color: 'green',
      }}
    >
      <div style={{ height: 800 }}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
          deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
          recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet,
          id provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
          deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
          recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet,
          id provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
          deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
          recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet,
          id provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
          deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
          recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet,
          id provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
          deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
          recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet,
          id provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
          deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
          recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet,
          id provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
          deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
          recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet,
          id provident!
        </p>
      </div>
    </Watermark>
  );
};
```

## API

| Name      | Description                              | Type                | Default                |
| --------- | ---------------------------------------- | ------------------- | ---------------------- |
| content   | 水印文字内容                             | `string / string[]` | `--`                   |
| gap       | 水印之间间距                             | `[number, number]`  | `[100, 100]`           |
| offset    | 水印距离容器左上角的偏移量，默认为 gap/2 | `[number, number]`  | `[gap[0]/2, gap[1]/2]` |
| fontStyle | 文字样式                                 | `Font`              | `Font`                 |
