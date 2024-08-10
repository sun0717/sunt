---
nav:
  title: Components
  path: /components
---

## Popover

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
