---
nav:
  title: Hooks
  path: /hooks
---

## useLifeCycles

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
