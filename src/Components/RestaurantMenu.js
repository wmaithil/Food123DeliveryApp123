import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const menuData = useRestaurantMenu(resId);

if(menuData=== null) return <Shimmer/>;


const {name,cuisines,costForTwoMessage} = menuData?.cards[0]?.card?.card?.info;

const itemCards = menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
console.log("Cards",itemCards);

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
