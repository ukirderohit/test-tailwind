import clsx from 'clsx';
import { FunctionComponent, ReactNode } from 'react';

interface TableHeaderColumnProps {
  children: ReactNode;
  className?: string;
}

const TableHeaderColumn: FunctionComponent<TableHeaderColumnProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <th
      scope="col"
      className={clsx(
        'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
        className
      )}
      {...rest}
    >
      {children}
    </th>
  );
};

export { TableHeaderColumn };

export default { TableHeaderColumn };
