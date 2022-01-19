import { Button } from '../atoms/button';
import { Table } from '../molecules/table';
import { useEffect, useState } from 'react';
import { getData, columns, formatRowData, ExampleDataList } from './data';

type PageResultList = {
  rowData?: ExampleDataList | undefined;
  isLoading: boolean;
  totalPages: number;
  totalPassengers: number;
};

export function App() {
  const [pageData, setPageData] = useState<PageResultList>({
    rowData: [],
    isLoading: false,
    totalPages: 0,
    totalPassengers: 150,
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPageData((prevState) => ({
      ...prevState,
      rowData: [],
      isLoading: true,
    }));
    getData(currentPage).then((info) => {
      const { totalPages, totalPassengers, data } = info;
      setPageData({
        isLoading: false,
        rowData: formatRowData(data),
        totalPages,
        totalPassengers: 150,
      });
    });
  }, [currentPage]);

  return (
    <Table
      columns={columns}
      data={pageData.rowData}
      loading={pageData.isLoading}
      totalRows={pageData.totalPassengers}
      pageChangeHandler={setCurrentPage}
      rowsPerPage={10}
    />
  );
}

export default App;
