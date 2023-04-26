import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Cam from './Camara';
import Login, {upload as u} from './Login';
import Opc from './Opciones';
import Trab, {load} from './Trabajadores';
import Reg, {upload as up} from './Register';

const routes = createBrowserRouter([
  { path: '/', element: <Login />, action: u},
  { path: '/manager', element: <Cam />},
  { path: '/opciones', element: <Opc/>},
  { path: '/trabajadores', element: <Trab/>, loader: load},
  { path: '/registro', element: <Reg/>, action: up}
]);

function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;