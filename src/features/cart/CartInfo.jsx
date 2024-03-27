import { useSelector } from "react-redux";
import { getTotalCartPrice } from "./cartSlice";
import {formatPrice} from '../../utils/formatPrice';

function CartInfo() {
    const totalCartPrice = useSelector(getTotalCartPrice);
  return (
    <div className='flex flex-col w-80 bg-stone-50 mt-2 p-2'>
        <div className="flex flex-cols justify-between ">
            <p>Products total:</p>
            <p>{formatPrice(totalCartPrice)}</p>
        </div>
        <div className="flex flex-cols justify-between ">
            <p>Delivery:</p>
            <p>0.00 $</p>
        </div>
        <div className="flex flex-cols justify-between ">
            <p>Payment fee:</p>
            <p>4.99 $</p>
        </div>
        <div className="flex flex-cols justify-between mt-2 font-bold">
            <p>Total:</p>
            <p>{formatPrice(totalCartPrice + 4.99)}</p>
        </div>
    </div>
  )
}

export default CartInfo