import React, {
  CSSProperties,
  ChangeEvent,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import Schema from 'async-validator';
import classNames from 'classnames';

import FormContext from './FormContext';

export interface ItemProps {
  className?: string;
  style?: CSSProperties;
  label?: ReactNode;
  name?: string;
  valuePropName?: string;
  rules?: Array<Record<string, any>>;
  children?: ReactElement;
}

const getValueFromEvent = (e: ChangeEvent<HTMLInputElement>) => {
  const { target } = e;
  if (target.type === 'checkbox') {
    return target.checked;
  } else if (target.type === 'radio') {
    return target.value;
  }

  return target.value;
};

const Item = (props: ItemProps) => {
  const { className, label, children, style, name, valuePropName, rules } =
    props;

  const [shouldRenderChildren, setShouldRenderChildren] = useState(!name);

  const [value, setValue] = useState<string | number | boolean>();
  const [error, setError] = useState('');

  const { onValueChange, values, validateRegister } = useContext(FormContext);

  // if (!name) {
  //     return children;
  // }

  useEffect(() => {
    // if (value !== values?.[name]) {
    //     setValue(values?.[name]);
    // }
    if (name && values?.[name] !== undefined) {
      setValue(values[name]);
      setShouldRenderChildren(false); // name 存在，不渲染 children
    }
    // }, [values, values?.[name]])
  }, [name, values]);

  useEffect(() => {
    if (name && values?.[name] !== undefined) {
      validateRegister?.(name, () => handleValidate(value));
    }
    // }, [value, validateRegister]);
  }, [value, name, shouldRenderChildren, validateRegister]);

  const handleValidate = (value: any) => {
    let errorMsg = null;
    if (Array.isArray(rules) && rules.length && name) {
      const validator = new Schema({
        [name]: rules.map((rule) => {
          return {
            type: 'string',
            ...rule,
          };
        }),
      });

      validator.validate({ [name]: value }, (errors) => {
        if (errors) {
          if (errors?.length) {
            setError(errors[0].message!);
            errorMsg = errors[0].message;
          }
        } else {
          setError('');
          errorMsg = null;
        }
      });
    }

    return errorMsg;
  };

  const propsName: Record<string, any> = {};
  if (valuePropName) {
    propsName[valuePropName] = value;
  } else {
    propsName.value = value;
  }

  const childEle =
    React.Children.toArray(children).length > 1
      ? children
      : React.cloneElement(children!, {
          ...propsName,
          onChange: (e: ChangeEvent<HTMLInputElement>) => {
            const value = getValueFromEvent(e);
            setValue(value);
            onValueChange?.(name!, value);

            handleValidate(value);
          },
        });

  const cls = classNames('ant-form-item', className);

  return (
    <div className={cls} style={style}>
      <div>{label && <label>{label}</label>}</div>
      <div>
        {shouldRenderChildren ? (
          <React.Fragment>{children}</React.Fragment>
        ) : (
          <>
            {childEle}
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </>
        )}
      </div>
    </div>
  );
};

export default Item;