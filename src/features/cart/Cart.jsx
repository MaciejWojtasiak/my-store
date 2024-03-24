import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../services/apiStore";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { clearCart } from "./cartSlice";



function Cart() {
  const cart = useSelector(state=>state.cart.cart);
  const dispatch = useDispatch();
  
  return (
    <div className="px-4 mt-4">
      <h1 className="text-lg uppercase font-bold">My cart</h1>
      <ul className="flex flex-col mb-2">
        {cart.map((item)=> <CartItem key={item.id} item={item}/>)}  
      </ul>
      <div className="flex gap-5">
        {cart.length === 0 && <p>There are no items in your cart yet...</p>}
        {cart.length != 0 && <>
          <Button>Confirm order</Button>
          <Button handleClick={() => dispatch(clearCart())}>Clear cart</Button>
        </>}        
      </div>
    </div>
  )
}

export async function loader(){
  const cart = await getCart(1);
  return cart;
}

export default Cart;