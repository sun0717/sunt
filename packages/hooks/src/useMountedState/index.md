---
nav:
  title: Hooks
  path: /hooks
group:
  title: 状态
  order: 2
---

# useMountedState

获取组件是否挂载到 dom。

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
