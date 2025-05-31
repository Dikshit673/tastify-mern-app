import { RouterProvider } from 'react-router';
import { CreateAppRouter } from './router';

const router = CreateAppRouter();

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
