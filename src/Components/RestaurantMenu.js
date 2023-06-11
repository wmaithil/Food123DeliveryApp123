import {React,useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import {Menu_API} from "../Utils/Constants";

const RestaurantMenu = () => {
    const [menuData,setMenuData] = useState(null);
    const {resId} = useParams();

    useEffect(()=>{
        getMenuDetails();
    },[]);

const getMenuDetails = async ()=>{
    const res = await fetch(Menu_API+resId);
    const jsonData= await res.json();
    setMenuData(jsonData.data);
    
}

if(menuData=== null) return <Shimmer/>;


const {name,cuisines,costForTwoMessage} = menuData?.cards[0]?.card?.card?.info;

const itemCards = menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
console.log("Cards",itemCards)
  return (
    <div className="menu">
   
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <ul>
            {itemCards.map(item =>{
                return(
                    <li key={item.card.info.id} >
                        {item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default RestaurantMenu;