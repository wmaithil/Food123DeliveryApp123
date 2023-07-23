import React from "react";
import {Restaurant_Image_URL} from "../Utils/Constants";

const ItemList = ({items}) => {
  return (
    <div>
        {items.map(i => {
            return (
              <div key={i.card.info.id} 
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                  <div className="w-8/12 p-2 mb-4">
                    <div className="py-2">
                      <p>{i.card?.info?.name} </p>
                      <p>{"₹ "+ (i.card?.info?.price/100 || i.card?.info?.defaultPrice/100)} </p>
                    </div>
                      <p className="font-light">{i.card?.info?.description}</p>  
                  </div>
                  <div className="w-3/12 p-1 mb-4" >
                    <div className="absolute">
                      <button className="bg-black text-white font-thin p-1 ml-12 rounded-lg" type="submit"> Add +</button>
                    </div>
                    <img src={Restaurant_Image_URL+i.card?.info?.imageId} alt=""/>
                  </div>
              </div>
            )
        })}
    </div>
  )
}

export default ItemList;