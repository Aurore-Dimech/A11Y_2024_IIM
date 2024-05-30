import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';  
import LivreInfos from './pages/livre_infos';
import Recherche from './pages/recherche';
import {
  createBrowserRouter, // importation de createBrowserRouter un composant qui permet de créer un router
  RouterProvider, // importation de RouterProvider un composant qui permet de fournir un router
} from "react-router-dom";
 

const appRouter = createBrowserRouter([ // création du router de l'App 
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/livre_infos",
    element: <LivreInfos />,
  },
  {
    path: "/Recherche",
    element: <Recherche />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
