import { useEffect, useState } from "react";
import { getSingleItem } from "../../services/apiStore";
import { formatPrice } from "../../utils/formatPrice";
import Button from "../../ui/Button";


function CartItem({item}) { 
  
  return (
    <li className="border-b-2 border-black py-2 flex justify-between items-center px-1">      
      <div className="flex gap-5">
        <img src={item.image} width={40} height={40} />
        <div className="flex flex-col">
          <p>{item.title} x {item.quantity}</p>
          <span>{formatPrice(item.totalPrice)}</span>
        </div>
      </div>
      <Button>Delete</Button>
    </li>
  )
}

export default CartItem