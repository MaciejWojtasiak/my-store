import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../services/apiStore";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { clearCart } from "./cartSlice";
import { Link } from "react-router-dom";



function Cart() {
  const cart = useSelector(state=>state.cart.cart);
  const dispatch = useDispatch();
  
  return (
    <div className="px-4 mt-4">
      <h1 className="text-lg uppercase font-bold">My cart</h1>
      <ul className="flex flex-col mb-2">
        {cart.map((item)=> <CartItem key={item.id} item={item}/>)}  
      </ul>
      <div className="flex gap-5 items-center">
        {cart.length === 0 && <p>There are no items in your cart yet...</p>}
        {cart.length != 0 && <>
          <Link to={'/order/new'} className="bg-neutral-500 py-2 px-2 tracking-wide rounded-lg uppercase text-stone-200 text-xs hover:bg-neutral-600 transition-all duration-300">Create order</Link>
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