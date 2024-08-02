---
nav:
  title: Components
  path: /components
---

## 布局组件

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
