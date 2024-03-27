import { Link } from "react-router-dom";


function OrderSuccess() {

  return (
    <div className="flex items-center flex-col p-2 mt-2.5">
        <h3>Order placed successfully.</h3>
        <Link to={'/store'} className="bg-neutral-500 py-3 px-4 tracking-wide rounded-lg uppercase mt-5 inline-block text-stone-200 text-sm hover:bg-neutral-600 transition-all duration-300">Back to the shop</Link>
    </div>
  )
}

export default OrderSuccess