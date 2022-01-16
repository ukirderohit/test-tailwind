import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
// import Button from '../atoms/button';
import { DudiUi } from '@dudi/dudi-ui';
import { Button } from '../atoms/button';
import { ReactTable } from '../organisms/reactTable';

export function App() {
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
      <ReactTable />
    </>
  );
}

export default App;
