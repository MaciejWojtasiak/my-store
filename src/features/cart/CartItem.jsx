import { formatPrice } from "../../utils/formatPrice";
import UpdateQuantity from "./UpdateQuantity";


function CartItem({item}) { 
  const {id, quantity ,title ,image, totalPrice} = item;
  
  return (
    <li className="border-b-2 border-black py-2 flex justify-between items-center px-1">      
      <div className="flex gap-5">
        <img src={image} width={40} height={40}/>
        <div className="flex flex-col ">
          <p>{title} x {quantity}</p>
          <span>{formatPrice(totalPrice)}</span>
        </div>
      </div>    
      <UpdateQuantity id={id} quantity={quantity}/>               
    </li>
  )
}

export default CartItem;