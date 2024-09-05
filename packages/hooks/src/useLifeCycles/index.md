---
nav:
  title: Hooks
  path: /hooks
group:
  title: 状态
  order: 3
---

# useLifeCycles

获取组件是否挂载到 dom。

```tsx
import { useLifecycles } from '@sunt-ui/hooks';

export default () => {
  useLifecycles(
    () => console.log('MOUNTED'),
    () => console.log('UNMOUNTED'),
  );

  return null;
};
```
