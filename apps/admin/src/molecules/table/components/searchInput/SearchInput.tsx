import { FunctionComponent, useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
interface SearchInputProps {
  preGlobalFilteredRows: any;
  globalFilter: any;
  setGlobalFilter: any;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = (value: string) => {
    setGlobalFilter(value || undefined);
  };

  return (
    <div>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            value={value || ''}
            onChange={(e) => {
              setValue(e.target.value);
              onChange(e.target.value);
            }}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-l-md pl-10 sm:text-sm border border-r-0 border-gray-300 bg-gray-50 "
            placeholder={`${count} records...`}
          />
        </div>
      </div>
    </div>
  );
};

export { SearchInput };

export default { SearchInput };
