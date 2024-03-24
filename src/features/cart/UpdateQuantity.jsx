import { useDispatch } from 'react-redux';
import {increaseQuantity, decreaseQuantity, deleteItem} from './cartSlice';
import Button from '../../ui/Button';

function UpdateQuantity({id, quantity}) {
    const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-1">      
      <Button handleClick={()=>dispatch(deleteItem(id))}>Remove</Button> 
      <div className="flex items-center gap-1">
        <button onClick={()=>{dispatch(decreaseQuantity(id))}}>-</button>
          <p>{quantity}</p>
        <button onClick={()=>{dispatch(increaseQuantity(id))}}>+</button>
      </div>             
    </div>
  )
}

export default UpdateQuantity