import StoreItem from "./StoreItem";
function StoreList({items, category}) {

    if(category === '') 
    return (<ul className="grid sm:grid-cols-2 gap-2">
    {items.map((item)=>{           
        return <StoreItem key={item.id} item={item} />
    })}
    </ul>);
    return (
    <ul className="grid sm:grid-cols-2 gap-2">
        {items.filter(item=>item.category === category).map((item)=>{           
            return <StoreItem key={item.id} item={item} />
        })}
    </ul>
  )
}

export default StoreList;