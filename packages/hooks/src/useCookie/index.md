---
nav:
  title: Hooks
  path: /hooks
---

## useCookie

```tsx
import { useEffect } from 'react';
import { useCookie } from '@sunt-ui/hooks';

export default () => {
  const [value, updateCookie, deleteCookie] = useCookie('MyCookie');

  useEffect(() => {
    deleteCookie();
  }, []);

  const updateCookieHandler = () => {
    updateCookie('666');
  };

  return (
    <div>
      <p>cookie 值: {value}</p>
      <button onClick={updateCookieHandler}>更新 Cookie</button>
      <br />
      <button onClick={deleteCookie}>删除 Cookie</button>
    </div>
  );
};
```