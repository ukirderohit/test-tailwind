import clsx from 'clsx';
import { FunctionComponent, ReactNode } from 'react';

interface TableBodyColumnProps {
  children: ReactNode;
  className?: string;
}

const TableBodyColumn: FunctionComponent<TableBodyColumnProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <td
      className={clsx('px-6 py-4 whitespace-nowrap text-sm', className)}
      {...rest}
    >
      {children}
    </td>
  );
};

export { TableBodyColumn };

export default { TableBodyColumn };
