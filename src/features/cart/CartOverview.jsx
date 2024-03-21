import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function CartOverview() {
  // const cart = useSelector(state=>state.cart.cart);
  // console.log(cart)

  return (
    <div className="flex items-center justify-between bg-stone-800 text-stone-200 px-4 py-4
    text-sm md:text-base uppercase sm:px-6">
        <p className="space-x-4 font-semibold sm:space-x-6">
            <span> items</span>
            <span>421.00$</span>
        </p>  
        <Link to="/cart">Open cart &rarr;</Link>
    </div>
  )
}

export default CartOverview