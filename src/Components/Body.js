import { React,useContext,useEffect,useState } from "react";
import RestaurantCard, {promotedCard} from "./RestaurantCard"; 
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {RestaurantList_API} from "../Utils/Constants";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const filterRestaurants = (key, listValues)=>{
  console.log("ListValues for filter",listValues);
  const filterList = listValues.filter(i=>{
    return(
      i?.info?.name.toUpperCase()?.includes(key.toUpperCase())
    )
  });
  console.log("filter ",filterList);
  return filterList;
};

const Body = ()=>{

    const [allRestaurantList,setallRestaurantList] = useState([]);
    const [restaurantList,setrestaurantList] = useState([]);
    const [allData, setAllData] = useState([]);
    
    const isUserOnline = useOnlineStatus();
    const {searchText,buttonClicked} = useContext(UserContext);

    useEffect(()=>{
      getData();
    },[])

    //Filter list based on search text
    useEffect(()=>{
      const filteredRestaurantList = filterRestaurants(searchText, allRestaurantList);
      setrestaurantList(filteredRestaurantList);
    },[buttonClicked])

    //function to call Api
    async function getData(){
      //fetch data from API 
      const resApiData= await fetch(RestaurantList_API);
      const resData= await resApiData.json();
      console.log("Res Data",resData);
      setAllData(resData);
      //storing the restaurant list
      const resList= resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      
      console.log("Res List",resList);
      //update the state of restaurantList 
      setallRestaurantList(resList);
      setrestaurantList(resList);
    }

    const ShowPromotedCard = promotedCard(RestaurantCard);

    if(allRestaurantList?.length===0){
      return (
        <div className="flex flex-wrap">
          {
            Array(8).fill(1).map((i,index)=>{
              return (
                <Shimmer key={index}/>
              ) 
            })
          }
        </div>)
    }

    return (
      <div className="ml-16 bg-slate-300">
        <div className="mt-8 flex justify-center">
          
          {isUserOnline ? <h1 className="center"> Online</h1> : <h1>Offline</h1>}
        </div>

        <div className="ml-8">
          <p className="font-bold my-6 text-2xl">{allData?.data?.cards[3]?.card?.card?.title} </p>
        </div>

        <div className="flex flex-wrap">
          {
            restaurantList.map((i) => {
              return (
                <Link
                  key={i.info.id}
                  to={"/restaurants/"+i.info.id}>
                    {
                      i.info.promoted ? <ShowPromotedCard {...i.info}/> : <RestaurantCard {...i.info}/> 
                    }
                  
                </Link>
              )
            })
          }
        </div>
      </div>
    )
}

export default Body;