import { formatPrice } from "../../utils/formatPrice";
import { formatTitle } from "../../utils/formatTitle";
import Button from "../../ui/Button";

function StoreItem({ item }) {
  const { title, description, image, price, rating} = item;
    return (
      <li className='flex gap-1 py-2 border-2 p-2 border-zinc-100 justify-between text-sm items-center' >
          <img src={image} alt={`img-${title}`} className="h-20 w-20 object-contain"/>
          <div className="flex flex-col">
            <h1>{formatTitle(title)}</h1>
            <p>{formatPrice(price)}</p>
            <span className="mt-auto">Rate: {rating.rate} From: {rating.count} reviews</span>
          </div>       
          <Button>Add to cart</Button> 
      </li>
    )
  }
  
  export default StoreItem;