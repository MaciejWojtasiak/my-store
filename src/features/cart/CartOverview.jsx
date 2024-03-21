import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import { getTotalCartPrice } from "./cartSlice";
import { getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartPrice= useSelector(getTotalCartPrice);
  const totalCartQuantity= useSelector(getTotalCartQuantity);
  return (
    <div className="flex items-center justify-between bg-stone-800 text-stone-200 px-4 py-4
    text-sm md:text-base uppercase sm:px-6">
        <p className="space-x-4 font-semibold sm:space-x-6">
            <span>{totalCartQuantity} items</span>
            <span>{formatPrice(totalCartPrice)}</span>
        </p>  
        <Link to="/cart">Open cart &rarr;</Link>
    </div>
  )
}

export default CartOverview