import React, { FunctionComponent, ReactNode } from 'react';
import styles from './button.module.scss';
import clsx from 'clsx';
interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled,
  ...rest
}) => {
  const classes = clsx(styles.base, styles[size], styles[variant]);

  return (
    <button className={classes} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export { Button };

export default { Button };
