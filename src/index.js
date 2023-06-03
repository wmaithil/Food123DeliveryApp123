import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from "./Components/About";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      errorElement:<Error/>
    },
    {
      path:"/about",
      element:<About/>
    }
  ]
);
root.render( <RouterProvider router={appRouter}/> );


