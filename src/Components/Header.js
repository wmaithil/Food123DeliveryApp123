import {React} from "react";
import {Link} from "react-router-dom"

const Header = ()=>{

    return (
      <div className="header">
        <div className="flex justify-between ">
          <div className="p-4 m-4">
            MyFoodApp
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
              <li>Cart</li>
              <li className="px-4"> 
                <Link to={"/grocery"}>Grocery</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

  export default Header;
