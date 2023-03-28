import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Cam from './Camara';
import Login from './Login';
import Opc from './Opciones';
import Trab from './Trabajadores';
import Reg, {upload as up} from './Register';

const routes = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/manager', element: <Cam />},
  { path: '/opciones', element: <Opc/>},
  { path: '/trabajadores', element: <Trab/>},
  { path: '/registro', element: <Reg/>, action: up}
]);

function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;