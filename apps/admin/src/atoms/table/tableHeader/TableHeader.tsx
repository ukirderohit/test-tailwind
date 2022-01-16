import clsx from 'clsx';
import { FunctionComponent, ReactNode } from 'react';

interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

const TableHeader: FunctionComponent<TableHeaderProps> = ({
  children,
  className,
}) => {
  return <thead className={clsx('bg-gray-50', className)}>{children}</thead>;
};

export { TableHeader };

export default { TableHeader };
