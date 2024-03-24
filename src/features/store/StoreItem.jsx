import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";
import { formatTitle } from "../../utils/formatTitle";
import Button from "../../ui/Button";

function StoreItem({ item }) {
  const { title, description, image, price, rating} = item;
  const cart = useSelector(state => state.cart.cart);
  const [inCart, setInCart] = useState(cart.includes(item));
  const dispatch =  useDispatch();

  
  const handleAdd = () =>{
    const newItem = {
      ...item,
      quantity: 1,
      totalPrice: item.price
    }
    dispatch({type:'cart/addItem', payload:newItem});
    setInCart(true);
  }
  const handleIncrease = () =>{
    dispatch({type:'cart/increaseQuantity', payload:item.id});
  }
  const handleDecrease = () =>{
    dispatch({type:'cart/decreaseQuantity', payload:item.id});
  }

    return (
      <li className='flex gap-1 py-2 border-2 p-2 border-zinc-100 justify-between text-sm items-center' >
          <img src={image} alt={`img-${title}`} className="h-20 w-20 object-contain"/>
          <div className="flex flex-col">
            <h1>{formatTitle(title)}</h1>
            <p>{formatPrice(price)}</p>
            <span className="mt-auto">Rate: {rating.rate} From: {rating.count} reviews</span>
          </div>       
          {!inCart && <Button handleClick={handleAdd}>Add to cart</Button>}
          {inCart && <div className="flex gap-2 items-center">
            <Button handleClick={handleDecrease}>-</Button>
            {/* <span>{cart.filter(cartItem=>cartItem.id === item.id)[0].quantity}</span> */}
            <Button handleClick={handleIncrease}>+</Button>
            </div>}
      </li>
    )
  }
  
  export default StoreItem;