import React,{ useContext } from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import UserContext from "../Utils/UserContext";

const Header = ()=>{

    const cartItems = useSelector((store)=> store.cart.items);
    const {searchText , setSearchValue, buttonClicked, setBtnClicked} = useContext(UserContext);

    const handleSearchText = (e)=>{
      setSearchValue(e.target.value);
    }

    return (
      <div className="header md:bg-blue-950 text-white">
        <div className="flex justify-between mx-12">
          <div className="p-4 m-4">
            MyFoodApp
          </div>
          <div className="p-4 mt-2 text-black">
            <div className="flex justify-center">
              <input type="text" value={searchText}  onChange={handleSearchText}
                className=" bg-gray-200 border border-solid border-black mx-4 px-2 w-[370px] rounded-lg h-10" 
              />
              <button type="submit" 
                onClick={()=> setBtnClicked(!buttonClicked)}
                className="px-4 py-1 bg-orange-300 m-2 rounded-lg"
                > Filter </button>
            </div>
          </div>
          <div className="flex items-center">
            <ul className="flex p-4 m-4 ">
              <li className="px-4">
                <Link to="/">Home</Link>
              </li>
              <li className="px-4">
                <Link to="/about">About Us</Link>
              </li>
              <li className="px-4">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="px-4"> 
                <Link to={"/grocery"}>Grocery</Link>
              </li>
              <li>
                <Link to={"/cart"}>
                  <div className="ml-4 pt-1 flex justify-center items-center">
                    <div className="absolute ">
                      <div className="t-0 absolute left-3">
                        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                          {cartItems.length}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

  export default Header;