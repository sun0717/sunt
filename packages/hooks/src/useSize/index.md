---
nav:
  title: Hooks
  path: /hooks
group:
  title: Dom
  order: 0
---

# useSize

useSize 是用来获取 dom 尺寸的，并且在窗口大小改变的时候会实时返回新的尺寸

```tsx
import { useRef } from 'react';
import { useSize } from '@sunt-ui/hooks';

export default () => {
  const ref = useRef<HTMLDivElement>(null);
  const size = useSize(ref);
  return (
    <div ref={ref}>
      <p>改变窗口大小试试</p>
      width: {size?.width}px, height: {size?.height}px
    </div>
  );
};
```
