---
nav:
  title: Hooks
  path: /hooks
group:
  title: 状态
  order: 1
---

# useScrolling

封装滚动的状态

```tsx
import { useRef } from 'react';
import { useScrolling } from '@sunt-ui/hooks';

export default () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrolling = useScrolling(scrollRef);

  return (
    <>
      {<div>{scrolling ? '滚动中..' : '没有滚动'}</div>}

      <div ref={scrollRef} style={{ height: '200px', overflow: 'auto' }}>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
        <div>yl</div>
      </div>
    </>
  );
};
```
