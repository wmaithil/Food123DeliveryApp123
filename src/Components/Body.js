import { React,useState } from "react";
import RestaurantCard from "./RestaurantCard"; 

const Body = ()=>{
  const resdata={
    data:[
      {
      name:"Amazing food",
      image:"Image Not available",
      rating:"4.4",
      cusine:"Indian",
      veg:"true",
      costfortwo:"200"
    },
    {
      name:"Awesome food",
      image:"Image Not available",
      rating:"4.2",
      cusine:"Multi cusine",
      veg:"false",
      costfortwo:"150"
    },
    {
      name:"Excellent Pure Veg",
      image:"Image Not available",
      rating:"4.6",
      cusine:"Indian",
      veg:"true",
      costfortwo:"220"
    },
    {
      name:"Fresh and Amazing food",
      image:"Image Not available",
      rating:"4.0",
      cusine:"Multi cusine",
      veg:"false",
      costfortwo:"200"
    },
  ]
  }
    const searchInputStyle={
      padding:"10px 15px",width:"20rem",margin:"0 2rem",border:"1px solid #0f0f0f",borderRadius:"1.5rem"
    }
    const [restaurantList,setrestaurantList] = useState(resdata.data);
    const [inputVal,setinputVal] = useState(resdata.data);
    
    return (
      <div className="body">
        <div className="search">
          <input style={searchInputStyle} 
            type="text" 
            value={inputVal} 
            onChange={(e)=> setinputVal(e.target.value)}
          />
          <button type="submit" className="filterbtn">Filter </button>
        </div>
        <div className="resContainer">
          {
            restaurantList.map((i,index) => {
              return (
                <RestaurantCard key={index} props={i}/>
              )
            })
          }
        </div>
      </div>
    )
}

export default Body;