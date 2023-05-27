import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Cam from './Camara';

const routes = createBrowserRouter([
  { path: '/', element: <Cam />},
]);

function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;