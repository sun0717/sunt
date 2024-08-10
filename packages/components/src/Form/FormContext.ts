import { createContext } from 'react';

/**
 * values 是 Store 的值
 * setValues 修改 values
 * onValueChange 监听 value 变化
 * validateRegister 用于注册表单校验
 */
export interface FormContextProps {
  values?: Record<string, any>;
  setValues?: (values: Record<string, any>) => void;
  onValueChange?: (key: string, value: any) => void;
  validateRegister?: (name: string, cb: Function) => void;
}

export default createContext<FormContextProps>({});
