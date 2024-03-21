import { useEffect, useState } from "react";
import { getSingleItem } from "../../services/apiStore";
import { formatPrice } from "../../utils/formatPrice";


function CartItem({item}) { 
  console.log(item)
  
  return (
    <li className="border-b-2 border-black py-2">
      <p>{item.name} x {item.quantity}</p>
      <span>{formatPrice(item.totalPrice)}</span>
    </li>
  )
}

export default CartItem