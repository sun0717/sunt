---
nav:
  title: Hooks
  path: /hooks
---

## useWhyDidYouUpdate

```tsx
import { useState } from 'react';
import { useWhyDidYouUpdate } from '@sunt-ui/hooks';

export default function Demo(props): React.FC<{ count: number }> {
  const [randomNum, setRandomNum] = useState(Math.random());

  useWhyDidYouUpdate('Demo', { ...props, randomNum });

  return (
    <div>
      <div>
        <span>number: {props.count}</span>
      </div>
      <div>
        randomNum: {randomNum}
        <button onClick={() => setRandomNum(Math.random)}>
          设置随机 state
        </button>
      </div>
    </div>
  );
}
```
