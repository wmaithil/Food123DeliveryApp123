import React from 'react';

const RestaurantCard= ({props})=>{
    return (
      <div className="resCard">
        <img style={{width:"265px",height:"175px",borderRadius:"9px"}} src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.cloudinaryImageId}`} alt=""/>
          <div className="cardelement">
            <h4>{props?.name}</h4>
            <h4>{props?.area}, {props?.locality}</h4>
            <p><strong>Cuisines:</strong> {props.cuisines.join()}</p>
            <h4>Rating: {props?.avgRating}</h4>
            <p><strong>Cost for Two:</strong> {props.costForTwo?props.costForTwo/100:""}</p>
          </div>
      </div>
    )
}

export default RestaurantCard;
