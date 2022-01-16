import clsx from 'clsx';
import { FunctionComponent, ReactNode } from 'react';

interface TableBodyProps {
  children: ReactNode;
  className?: string;
}

const TableBody: FunctionComponent<TableBodyProps> = ({
  children,
  className,
}) => {
  return (
    <tbody className={clsx('bg-white divide-y divide-gray-200', className)}>
      {children}
    </tbody>
  );
};

export { TableBody };

export default { TableBody };
