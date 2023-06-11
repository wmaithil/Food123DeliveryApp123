import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Header from './Components/Header';
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from './Components/Body';
import RestaurantMenu from './Components/RestaurantMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App= ()=> {
  return (
    <div className="App">
        <Header/>
        <Outlet/>
    </div>
  );
}

const appRouter = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path: "/contact",
          element:<Contact/>
        },
        {
          path:"/restaurants/:resId",
          element:<RestaurantMenu/>
        }
      ],
      errorElement:<Error/>
    },
    
  ]
);
root.render( <RouterProvider router={appRouter}/> );

