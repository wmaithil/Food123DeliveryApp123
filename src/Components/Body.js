import { React,useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard"; 
import Shimmer from "./Shimmer";

const filterRestaurants = (key, listValues)=>{
  const filterList = listValues.filter(i=>{
    return(
      i?.data?.name?.toUpperCase()?.includes(key.toUpperCase())
    )
  });
  return filterList;
};

const Body = ()=>{
  
    const searchInputStyle={
      padding:"10px 15px",width:"20rem",margin:"0 2rem",border:"1px solid #0f0f0f",borderRadius:"1.5rem"
    }
    const [allRestaurantList,setallRestaurantList] = useState([]);
    const [restaurantList,setrestaurantList] = useState([]);
    const [inputVal,setinputVal] = useState("");

    useEffect(()=>{
      getData();
    },[])

    //function to call Api
    async function getData(){
      //fetch data from API 
      const resApiData= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.225535&lng=72.845748&page_type=DESKTOP_WEB_LISTING");
      const resData= await resApiData.json();
      //storing the restaurant list
      const resList= resData?.data?.cards[2]?.data?.data?.cards;
      console.log("Res List",resList);
      //update the state of restaurantList 
      setallRestaurantList(resList);
      setrestaurantList(resList);
    }

    return (allRestaurantList.length===0) ? (
      <div className="resContainer">
        {
          Array(8).fill(1).map((i,index)=>{
            return (
              <Shimmer key={index}/>
            ) 
          })
        }
      </div>
    ) : (
      <>
        <div className="search">
          <input style={searchInputStyle} 
            type="text" 
            value={inputVal} 
            onChange={(e)=> setinputVal(e.target.value)}
          />
          <button type="submit" onClick={()=>{
              const filterList= filterRestaurants(inputVal,allRestaurantList)
              setrestaurantList(filterList);
            }
          } className="filterbtn">Filter </button>
        </div>
        <div className="resContainer">
          {
            restaurantList.map((i) => {
              return (
                <RestaurantCard key={i.data.id} {...i.data}/>
              )
            })
          }
        </div>
      </>
    )
}

export default Body;
