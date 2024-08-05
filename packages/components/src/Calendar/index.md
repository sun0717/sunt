---
nav:
  title: Components
  path: /components
---

## Calendar

```tsx
import dayjs from 'dayjs';
import { Calendar } from '@sunt-ui/components';

export default () => (
  <Calendar
    value={dayjs('2024-07-10')}
    onChange={(date) => {
      alert(date.format('YYYY-MM-DD'));
    }}
    locale="zh-CN"
  />
);
```
