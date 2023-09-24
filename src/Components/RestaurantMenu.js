import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const menuData = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

    if(menuData=== null) return <Shimmer/>;

    const {name,cuisines,costForTwoMessage} = menuData?.cards[0]?.card?.card?.info;

    // const itemCards = menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    const Categories = menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(i=> i.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("Cate",Categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-4 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            
            {
                Categories.map((i,index) =>{
                    return (
                        <RestaurantCategory key={i.card.card.title} 
                            data={i.card.card} 
                            showIndex={index === showIndex}
                            setShowIndex={() => setShowIndex(index)}
                            />
                    )
                })
            }
        </div>
    )
}

export default RestaurantMenu;