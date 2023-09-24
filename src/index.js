import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from './Components/Body';
import RestaurantMenu from "./Components/RestaurantMenu";
import { Provider } from "react-redux";
import Store from './Utils/Store';
import Cart from './Components/Cart';
import UserContext from './Utils/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App= ()=> {
  const [searchValue, setSearchValue] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);
  return (
    <Provider store={Store}>
      <UserContext.Provider value={{searchText : searchValue, buttonClicked : btnClicked, setBtnClicked, setSearchValue}}>
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

const Grocery = lazy(()=> import("./Components/Grocery"));

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
          path: "/grocery",
          element: <Suspense fallback={<h1>Loading Grocery page</h1>}> <Grocery/> </Suspense>
        },
        {
          path:"/cart",
          element: <Cart/>
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
