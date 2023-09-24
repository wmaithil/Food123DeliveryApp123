import React from "react";
import {Restaurant_Image_URL} from "../Utils/Constants";

const RestaurantCard= (props)=>{
    return (
      <div className="m-4 p-4 w-[320px] hover:bg-slate-50">
        <img 
          className=" w-72 h-48 rounded-lg"
          src={Restaurant_Image_URL + props.cloudinaryImageId} 
          alt=""/>
        <div className="m-2 font-thin">
          <h2 className="font-bold ">{props?.name}</h2>
          <h4>{props?.areaName}, {props?.locality}</h4>
          <p><strong></strong>{props.cuisines.join(", ")}</p>
          <div className="flex justify-between mt-1">
            <h4 className="p-1 bg-green-400 w-8">{props?.avgRating}</h4>
            <p><strong></strong> {props?.costForTwo}</p> 
          </div>
        </div>
      </div>
    )
}

export const promotedCard = (RestaurantCard) =>{
  return (props)=>{
    return (
      <div>
        <label className="absolute ml-8 mt-4 bg-black text-white p-1 rounded-sm"> Promoted</label>
        <RestaurantCard {...props}/>
      </div>
      
    )
  }
}

export default RestaurantCard;