---
group:
  title: 数据展示
  order: 1
nav:
  title: 组件
  path: /components
---

# Calendar 日历

```tsx
/**
 * title: 基本
 * description: 一个通用的日历面板，支持年/月切换。
 */
import dayjs from 'dayjs';
import { Calendar } from '@sunt-ui/components';

export default () => (
  <Calendar
    value={dayjs('2023-09-10')}
    onChange={(date) => {
      alert(date.format('YYYY-MM-DD'));
    }}
    locale="zh-CN"
  />
);
```
