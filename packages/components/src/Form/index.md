---
group:
  title: 数据录入
  order: 0
nav:
  title: 组件
  path: /components
---

# Form 表单

## 何时使用

- 用于创建一个实体或收集信息。
- 需要对输入的数据类型进行校验时。

## 代码演示

```tsx
/**
 * title: 基本使用
 * description: 基本的表单数据域控制展示，包含布局、初始化、验证、提交。
 */
import React from 'react';
import { Button, Checkbox, Input } from 'antd';
import { Form } from '@sunt-ui/components';

export default function Basic() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      initialValues={{ remember: true, username: 'sunt' }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          { required: true, message: '请输入用户名!' },
          { max: 6, message: '长度不能大于 6' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>记住我</Checkbox>
      </Form.Item>

      <Form.Item>
        <div>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => alert('submit')}
          >
            登录
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
```
