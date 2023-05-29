import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import Camara from './Camara.jsx';
import Graficos from './Graficos.jsx';
import React from "react";
import MainApp from "./MainApp";
import Firebase from "firebase";
import { onValue, ref } from "firebase/database";


const routes = createBrowserRouter([
  {path: '/', element: <MainApp/>, children: [
    {path: '/', element: <Camara />, index: true},
    {path: '/graficos', element: <Graficos />}
  ]}
]);



function App() {

  Firebase.initializeApp(Firebase);

  return (
    <RouterProvider router={routes} />
  );
}

export default App;

/************* Declaración del tab */
