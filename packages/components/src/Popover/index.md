---
group:
  title: 数据录入
  order: 1
nav:
  title: 组件
  path: /components
---

# Popover 气泡卡片

```tsx
import React from 'react';
import { Popover } from '@sunt-ui/components';

export default () => {
  const popoverContent = (
    <div>
      XiXiXi
      <button
        onClick={() => {
          alert(1);
        }}
      >
        111
      </button>
    </div>
  );

  return (
    <Popover
      content={popoverContent}
      placement="bottom"
      trigger="click"
      style={{ margin: '200px' }}
    >
      <button>Click Me</button>
    </Popover>
  );
};
```
