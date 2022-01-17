import { useTable } from 'react-table';
import { FunctionComponent } from 'react';

import {
  TableContainer,
  TableHeaderColumn,
  TableHeader,
  TableBody,
  TableBodyColumn,
} from '../../atoms/table';
import { SearchInput } from '../../atoms/searchInput';

interface ReactTableProps {
  columns?: any;
  data?: any;
  className?: string;
}

const ReactTable: FunctionComponent<ReactTableProps> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <div className="flex justify-end mb-4">
        <SearchInput />
      </div>
      <TableContainer {...getTableProps()}>
        <TableHeader>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableHeaderColumn {...column.getHeaderProps()}>
                  {column.render('Header')}
                </TableHeaderColumn>
              ))}
            </tr>
          ))}
        </TableHeader>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableBodyColumn
                      className="text-gray-500"
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </TableBodyColumn>
                  );
                })}
              </tr>
            );
          })}
        </TableBody>
      </TableContainer>
    </>
  );
};

export { ReactTable };

export default { ReactTable };
