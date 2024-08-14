---
nav:
  title: Components
  path: /components
---

## Message

```tsx
import { ConfigProvider } from './ConfigProvider';
import { useMessage } from '@sunt-ui/components';

function Aaa() {
  const message = useMessage();

  return (
    <button
      onClick={() => {
        message.add({
          content: '请求成功',
        });
        alert('有bug,正在修复...');
      }}
    >
      成功
    </button>
  );
}

export default () => {
  return (
    <ConfigProvider>
      <div>
        <Aaa />
      </div>
    </ConfigProvider>
  );
};
```
