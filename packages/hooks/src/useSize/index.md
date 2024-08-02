---
nav:
  title: Hooks
  path: /hooks
---

## useSize

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
