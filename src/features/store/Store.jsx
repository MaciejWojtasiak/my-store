import { useLoaderData } from "react-router-dom";
import { getStoreItems } from "../../services/apiStore";
import StoreList from "./StoreList";
import Categories from "../../ui/Categories";
import { useState } from "react";


function Store() {
  const items = useLoaderData();
  const [currentCategory, setCurrentCategory] = useState('');

  const handleChangeCategory = (e) => { 
      setCurrentCategory(e.target.value);    
  }
  
  
  return (
    <div className="p-5">
      <h2 className="uppercase">{currentCategory === '' ? 'All items' : currentCategory}</h2>
      <Categories handleClick={handleChangeCategory} currentCategory={currentCategory}/>
      <StoreList items={items} category={currentCategory}/> 
    </div>
  )
}

export async function loader() {
    const storeItems = await getStoreItems();
    return storeItems;
}

export default Store;