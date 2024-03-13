import StoreItem from "./StoreItem";
function StoreList({items}) {
    return (
    <div className="items-list">
        {items.map((item)=>{
            const {id, title, description, image, price, rating} = item;
            return <StoreItem 
                    key={id} 
                    title={title} 
                    description={description} 
                    image={image}
                    price={price}
                    rating={rating}
                    />
        })}
    </div>
  )
}

export default StoreList;