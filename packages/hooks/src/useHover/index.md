---
nav:
  title: Hooks
  path: /hooks
---

## useHover

```tsx
import { useHover } from '@sunt-ui/hooks';

export default () => {
  const element = (hovered: boolean) => (
    <div>Hover me! {hovered && 'Thanks'}</div>
  );

  const [hoverable, hovered] = useHover(element);

  return (
    <div>
      {hoverable}
      <div>{hovered ? 'HOVERED' : ''}</div>
    </div>
  );
};
```
