import { FunctionComponent } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

const SearchInput: FunctionComponent = () => {
  // TODO: Support filtering
  return (
    <div>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-l-md pl-10 sm:text-sm border border-r-0 border-gray-300 bg-gray-50 "
            placeholder="John Doe"
          />
        </div>
      </div>
    </div>
  );
};

export { SearchInput };

export default { SearchInput };
