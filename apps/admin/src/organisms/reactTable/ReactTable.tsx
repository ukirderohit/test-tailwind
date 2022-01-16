// TODO Complete component
import clsx from 'clsx';
import { useTable } from 'react-table';
import { FunctionComponent, ReactNode } from 'react';

import {
  TableContainer,
  TableHeaderColumn,
  TableHeader,
  TableBody,
  TableBodyColumn,
} from '../../atoms/table';

interface ReactTableProps {
  columns?: any; // TODO
  data?: any; // TODO
  className?: string;
}

const ReactTable: FunctionComponent<ReactTableProps> = ({
  children,
  columns,
  data,
  className,
}) => {
  //   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //     useTable({
  //       columns,
  //       data,
  //     });

  const people = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      role: 'Admin',
      email: 'jane.cooper@example.com',
    },
    // More people...
  ];
  return (
    <TableContainer>
      <TableHeader>
        <tr>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Title</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn>Role</TableHeaderColumn>
        </tr>
      </TableHeader>
      <TableBody>
        {people?.map((person) => (
          <tr key={person.email}>
            <TableBodyColumn className="font-medium text-gray-900">
              {person.name}
            </TableBodyColumn>
            <TableBodyColumn className="text-gray-500">
              {person.title}
            </TableBodyColumn>
            <TableBodyColumn className="text-gray-500">
              {person.email}
            </TableBodyColumn>
            <TableBodyColumn className="text-gray-500">
              {person.role}
            </TableBodyColumn>
            <TableBodyColumn className="font-medium">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                Edit
              </a>
            </TableBodyColumn>
          </tr>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export { ReactTable };

export default { ReactTable };
