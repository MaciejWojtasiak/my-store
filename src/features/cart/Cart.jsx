import { useSelector } from "react-redux";
import { getCart } from "../../services/apiStore";
import CartItem from "./CartItem";
import Button from "../../ui/Button";

function Cart() {

  const cart = useSelector(state=>state.cart.cart);

  return (
    <div className="px-4 mt-4">
      <h1 className="text-lg uppercase font-bold">My cart</h1>
      <ul className="flex flex-col mb-2">
        {cart.map((item)=> <CartItem key={item.itemId} item={item}/>)}  
      </ul>
      <Button>Confirm order</Button>
    </div>
  )
}

export async function loader(){
  const cart = await getCart(1);
  return cart;
}

export default Cart;