---
nav:
  title: Hooks
  path: /hooks
---

## useMountedState

获取组件是否挂载状态

```tsx
import { useEffect, useState } from 'react';
import { useMountedState } from '@sunt-ui/hooks';

export default () => {
  const isMounted = useMountedState();
  const [, setNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setNum(1);
    }, 1000);
  }, []);

  return <div>{isMounted() ? 'mounted' : 'pending'}</div>;
};
```
