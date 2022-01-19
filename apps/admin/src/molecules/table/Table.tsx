import _map from 'lodash/map';
import { useSortBy, useTable, useGlobalFilter } from 'react-table';
import { FunctionComponent, useMemo } from 'react';

import {
  TableContainer,
  TableHeaderColumn,
  TableHeader,
  TableBody,
  TableBodyColumn,
} from './components';
import { Loader } from '../../atoms/loader';
import { Pagination } from './components/pagination';
import { SearchInput } from './components/searchInput';

interface TableProps {
  columns: any;
  data?: any;
  loading?: boolean;
  totalRows?: number;
  pageChangeHandler: any;
  rowsPerPage: number;
}

const renderHeaderGroup = (column: any) => {
  return (
    <TableHeaderColumn
      {...column.getHeaderProps(column.getSortByToggleProps())}
    >
      {column.render('Header')}
      <span>
        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
      </span>
    </TableHeaderColumn>
  );
};

const renderRowsList = (row: any, prepareRow: any) => {
  prepareRow(row);
  return <tr {...row.getRowProps()}>{_map(row.cells, renderRowCells)}</tr>;
};

const renderRowCells = (cell: any) => {
  return (
    <TableBodyColumn className="text-gray-500" {...cell.getCellProps()}>
      {cell.render('Cell')}
    </TableBodyColumn>
  );
};

const Table: FunctionComponent<TableProps> = ({
  columns,
  data,
  loading,
  totalRows,
  pageChangeHandler,
  rowsPerPage,
}) => {
  const columnData = useMemo(() => columns, [columns]);
  const rowData = useMemo(() => data, [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns: columnData,
      data: rowData,
      manualPagination: false,
    },

    useGlobalFilter,
    useSortBy
  );

  return (
    <>
      <div className="flex justify-end mb-4">
        <SearchInput
          globalFilter={state.globalFilter}
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      <TableContainer {...getTableProps()}>
        <TableHeader>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {_map(headerGroup.headers, renderHeaderGroup)}
            </tr>
          ))}
        </TableHeader>
        <TableBody {...getTableBodyProps()}>
          {_map(rows, (row) => renderRowsList(row, prepareRow))}
        </TableBody>
        {loading && (
          <tr>
            <td className="pt-3 pb-3" colSpan={3}>
              <Loader />
            </td>
          </tr>
        )}
      </TableContainer>
      <Pagination
        totalRows={totalRows}
        pageChangeHandler={pageChangeHandler}
        rowsPerPage={rowsPerPage}
      />
    </>
  );
};

export { Table };

export default { Table };
