import clsx from 'clsx';
import { FunctionComponent, ReactNode } from 'react';

interface TableBodyProps {
  children: ReactNode;
  className?: string;
}

const TableBody: FunctionComponent<TableBodyProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <tbody className={clsx('bg-white divide-y divide-gray-200', className)} {...rest}>
      {children}
    </tbody>
  );
};

export { TableBody };

export default { TableBody };
