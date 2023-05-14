import React from 'react';

const RestaurantCard= ({props})=>{
    return (
      <div className="resCard">
        <h4>{props.image}</h4>
        <h4>{props.name}</h4>
        <h4>{props.cusine}</h4>
        <div className="cardelement">
          <h4>{props.rating}</h4>
          <h4>{props.costfortwo}</h4>
        </div>
      </div>
    )
}

export default RestaurantCard;