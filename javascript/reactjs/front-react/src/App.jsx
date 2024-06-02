import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import MainView from './challenges/advanced/MultiStepFromMain/MainView';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainView />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
