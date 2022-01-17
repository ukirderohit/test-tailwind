import React from 'react';

import { Button } from '../atoms/button';
import { ReactTable } from '../organisms/reactTable';

export function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Role',
        accessor: 'role',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        id: 'edit',
        accessor: 'email',
        Cell: () => <button>Edit</button>,
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        id: 1,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        role: 'Admin',
        email: 'jane.cooper@example.com',
      },
      {
        id: 2,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        role: 'Admin',
        email: 'jane.cooper@example.com',
      },
      {
        id: 3,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        role: 'Admin',
        email: 'jane.cooper@example.com',
      },
    ],
    []
  );

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        onClick={() => alert('Button 1 is clicked !')}
        variant="primary"
        size="sm"
      >
        Default
      </Button>
      {/* <DudiUi /> */}
      <ReactTable columns={columns} data={data} />
    </>
  );
}

export default App;
