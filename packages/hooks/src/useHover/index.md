---
nav:
  title: Hooks
  path: /hooks
group:
  title: 状态
  order: 4
---

# useHover

一个钩子，用于跟踪元素是否被悬停。

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
