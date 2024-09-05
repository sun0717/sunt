---
nav:
  title: Hooks
  path: /hooks
group:
  title: Scene
  order: 0
---

# useCountDown

用于获取年底倒计时的钩子。

```tsx
import { useCountDown } from '@sunt-ui/hooks';

export default () => {
  const [countdown, formattedRes] = useCountDown({
    targetDate: `${new Date().getFullYear()}-12-31 23:59:59`,
  });

  const { days, hours, minutes, seconds, milliseconds } = formattedRes;

  return (
    <p>
      距离今年年底还剩 {days} 天 {hours} 小时 {minutes} 分钟 {seconds} 秒{' '}
      {milliseconds} 毫秒
    </p>
  );
};
```
