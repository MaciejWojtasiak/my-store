import { useEffect, useState } from "react";
import { getSingleItem } from "../../services/apiStore";
import { formatPrice } from "../../utils/formatPrice";


function CartItem({product}) { 
  const [item, setItem] = useState(null); 
  const [price,setPrice] = useState('')

  useEffect(()=>{
    const getData = async () =>{
      const res = await getSingleItem(product.productId);
      setItem(res);
      setPrice(res.price * product.quantity)
    }
    getData()    
  },[])
  
  return (
    <li className="border-b-2 border-black py-2">
      <p>{product.quantity} x {item && item.title}</p>
      <span>{formatPrice(price)}</span>
    </li>
  )
}

export default CartItem