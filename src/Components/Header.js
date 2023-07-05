import {React} from "react";
import {Link} from "react-router-dom"

const Header = ()=>{

    return (
      <div className="header">
        <div className="headerContainer">
          <div className="logocontainer">
            MyFoodApp
          </div>
          <div className="nav-items">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>Cart</li>
              <li> 
                <Link to={"/grocery"}>Grocery</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

  export default Header;
