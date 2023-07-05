import { React,useEffect,useState } from "react";
import RestaurantCard from "./RestaurantCard"; 
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {RestaurantList_API} from "../Utils/Constants";
import useOnlineStatus from "../Utils/useOnlineStatus";
const filterRestaurants = (key, listValues)=>{
  console.log("list",listValues);
  const filterList = listValues.filter(i=>{
    return(
      i?.data?.name?.toUpperCase()?.includes(key.toUpperCase())
    )
  });
  console.log("filter ",filterList);
  return filterList;
};

const Body = ()=>{
  
    const searchInputStyle={
      padding:"10px 15px",width:"20rem",margin:"0 2rem",borderRadius:"1.5rem", boxShadow: "0 2px 3px 2px #f6f6f6"
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
      const resApiData= await fetch(RestaurantList_API);
      const resData= await resApiData.json();
      //storing the restaurant list
      const resList= resData?.data?.cards[2]?.data?.data?.cards;
      console.log("Res List",resList);
      //update the state of restaurantList 
      setallRestaurantList(resList);
      setrestaurantList(resList);
    }

    const isUserOnline = useOnlineStatus();

    return (
      <>
        <div className="search">
          <input style={searchInputStyle} 
            type="text" 
            value={inputVal} 
            onChange={(e)=> setinputVal(e.target.value)}
          />
          <button type="submit" 
            onClick={()=>{
              const filterList= filterRestaurants(inputVal,allRestaurantList)
              setrestaurantList(filterList);
            }}
            className="filterbtn"
            >Filter </button>
          
          {isUserOnline ? <h1> Online</h1> : <h1>Offline</h1>}
        </div>
        {
          (allRestaurantList.length===0) ? 
            (
              <div className="resContainer">
                {
                  Array(8).fill(1).map((i,index)=>{
                    return (
                      <Shimmer key={index}/>
                    ) 
                  })
                }
              </div>
            ) : 
            (
                <div className="resContainer">
                  {
                    restaurantList.map((i) => {
                      return (
                        <Link key={i.data.id} to={"/restaurants/"+i.data.id}><RestaurantCard {...i.data}/></Link>
                      )
                    })
                  }
                </div>
              )
        }
      </>
    )
}

export default Body;
