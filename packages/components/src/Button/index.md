---
nav:
  title: Components
  path: /components
---

## Button

### 普通按钮

```tsx
import React from 'react';
import { Button } from '@sunt-ui/components';

export default () => <Button text="普通按钮" style={{ width: 200 }} />;
```

### 高亮按钮

```tsx
import React from 'react';
import { Button } from '@sunt-ui/components';

export default () => (
  <Button text="普通按钮" type="highlight" style={{ width: 200 }} />
);
```

### 禁用按钮

```tsx
import React from 'react';
import { Button } from '@sunt-ui/components';

export default () => <Button text="普通按钮" disabled style={{ width: 200 }} />;
```
