import React, { ReactNode } from 'react';

import cs from 'classnames';
import './index.less';

interface ButtonProps {
  type?: 'highlight' | 'default';
  disabled?: boolean;
  icon?: ReactNode;
  text?: string;
  children?: ReactNode;
  className?: string;
  style?: object;
  onClick?: () => void;
}

export default (props: ButtonProps) => {
  const {
    type = 'default',
    disabled,
    icon,
    text,
    children,
    className,
    style,
    onClick,
  } = props;

  const prefix = 'sunt-';
  const btnPrefix = prefix + 'btn';

  const classes = cs(
    btnPrefix,
    {
      [`${btnPrefix}-highlight`]: type === 'highlight',
      [`${btnPrefix}-disabled`]: disabled,
    },
    className,
  );

  return (
    <div className={classes} style={style} onClick={onClick}>
      {icon}
      {text}
      {children}
    </div>
  );
};
