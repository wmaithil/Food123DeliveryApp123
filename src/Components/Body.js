import { React,useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard"; 

const Body = ()=>{
  
    const searchInputStyle={
      padding:"10px 15px",width:"20rem",margin:"0 2rem",border:"1px solid #0f0f0f",borderRadius:"1.5rem"
    }
    const [restaurantList,setrestaurantList] = useState([]);
    const [inputVal,setinputVal] = useState("");
    
    useEffect(()=>{
      getData();
    },[])

    //function to call Api
    async function getData(){
      //fetch data from API 
      const resApiData= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat={latitude}&lng={longitude}&page_type=DESKTOP_WEB_LISTING");
      const resData= await resApiData.json();
      console.log(resData);
      //storing the restaurant list
      const resList= resData?.data?.cards[2]?.data?.data?.cards;
      console.log("Res List",resList);
      //update the state of restaurantList 
      setrestaurantList(resList);
    }
  
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
            restaurantList.map((i) => {
              return (
                <RestaurantCard key={i.data.id} props={i.data}/>
              )
            })
          }
        </div>
      </div>
    )
}

export default Body;
