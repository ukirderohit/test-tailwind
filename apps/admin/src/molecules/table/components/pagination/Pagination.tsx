import { FunctionComponent, useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
interface PaginationProps {
  totalRows?: any;
  pageChangeHandler: any;
  rowsPerPage: number;
}

const Pagination: FunctionComponent<PaginationProps> = ({
  totalRows,
  pageChangeHandler,
  rowsPerPage,
}) => {
  // Calculating max number of pages
  const noOfPages = Math.ceil(totalRows / rowsPerPage);

  // Creating an array with length equal to no.of pages
  const pagesArr = [...new Array(noOfPages)];

  // State variable to hold the current page. This value is
  // passed to the callback provided by the parent
  const [currentPage, setCurrentPage] = useState(1);

  // Navigation arrows enable/disable state
  const [canPreviousPage, setCanPreviousPage] = useState(false);
  const [canNextPage, setCanNextPage] = useState(true);

  // These variables give the first and last record/row number
  // with respect to the current page
  const [pageFirstRecord, setPageFirstRecord] = useState(1);
  const [pageLastRecord, setPageLastRecord] = useState(rowsPerPage);

  // Onclick handlers for the butons
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const onPageSelect = (pageNo: number) => setCurrentPage(pageNo);

  // Disable previous and next buttons in the first and last page
  // respectively
  useEffect(() => {
    if (noOfPages === currentPage) {
      setCanNextPage(false);
    } else {
      setCanNextPage(true);
    }
    if (currentPage === 1) {
      setCanPreviousPage(false);
    } else {
      setCanPreviousPage(true);
    }
  }, [noOfPages, currentPage]);

  // To set the starting index of the page
  useEffect(() => {
    const skipFactor = (currentPage - 1) * rowsPerPage;
    // Some APIs require skip for paginaiton. If needed use that instead
    // pageChangeHandler(skipFactor);
    pageChangeHandler(currentPage);
    setPageFirstRecord(skipFactor + 1);
  }, [currentPage]);

  // To set the last index of the page
  useEffect(() => {
    const count = pageFirstRecord + rowsPerPage;
    setPageLastRecord(count > totalRows ? totalRows : count - 1);
  }, [pageFirstRecord, rowsPerPage, totalRows]);

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{pageFirstRecord}</span> to{' '}
            <span className="font-medium">{pageLastRecord}</span> of{' '}
            <span className="font-medium">{totalRows}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={() => prevPage()}
              disabled={!canPreviousPage}
              className="relative inline-flex disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              {' Previous'}
            </button>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="relative inline-flex disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              {' Next'}
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export { Pagination };

export default { Pagination };
