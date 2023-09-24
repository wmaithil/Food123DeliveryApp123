import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearItem, removeItem } from '../Utils/cartSlice';

const Cart = () => {
    const items = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();

    let price=0;
    for(let i=0;i<items.length;i++){
        price+=items[i].price;
    }
    const handleRemoveItem = (item) =>{
        dispatch(removeItem(item));
    }

    const handleClearCart = ()=>{
        dispatch(clearItem());
    }

    if(items.length === 0){
        return (
            <div className="ml-32 mt-8">
                <h1>No items present in the Cart!</h1>
            </div>
        )
    }

  return (
    <div className="mx-8 mt-8 flex" >
        <div className="w-6/12">
            <h1 className="font-bold my-2">Total Items</h1>
            {
                items.map(i =>{
                    return (
                        <div key={i.id} className="mb-4 p-4 border-gray-300 border-2">
                            <p>{ i.name }</p>
                            <h3>₹ {(i.price || i.defaultPrice)/100 }</h3>
                            <button className="bg-red-100 p-1 px-2 rounded-full" type="submit" 
                                onClick={()=> handleRemoveItem(i)}>
                                Remove 
                            </button>
                        </div>
                    )
                })
            }
        </div>

        <div className="w-4/12 font-bold my-2 ml-4 text-center">
            <h1>Total Price - {price/100}</h1>
            <button type="submit" className="bg-red-100 mt-2 py-2 px-3 rounded-full" onClick={handleClearCart}>Clear Cart</button>
        </div>
      
    </div>
  )
}

export default Cart;