import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";
import { formatTitle } from "../../utils/formatTitle";
import Button from "../../ui/Button";
import {getTotalItemQuantityById} from '../cart/cartSlice';
import UpdateQuantity from "../cart/UpdateQuantity";

function StoreItem({ item }) {
  const dispatch =  useDispatch();

  const { id, title, image, price, rating} = item;

  const currentQuantity = useSelector(getTotalItemQuantityById(id));
  const isInCart = currentQuantity > 0;

    const handleAdd = () =>{
      const newItem = {
        ...item,
        quantity: 1,
        totalPrice: item.price
      }
      dispatch({type:'cart/addItem', payload:newItem});
  }


    return (
      <li className='flex gap-1 py-2 border-2 p-2 border-zinc-100 justify-between text-sm items-center' >
          <img src={image} alt={`img-${title}`} className="h-20 w-20 object-contain"/>
          <div className="flex flex-col">
            <h1>{formatTitle(title)}</h1>
            <p>{formatPrice(price)}</p>
            <span className="mt-auto">Rate: {rating.rate} From: {rating.count} reviews</span>
          </div>       
          {!isInCart && <Button handleClick={handleAdd}>Add to cart</Button>}
          {isInCart && <UpdateQuantity quantity={currentQuantity} id={id}/>}          
      </li>
    )
  }
  
  export default StoreItem;