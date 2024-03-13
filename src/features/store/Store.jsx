import { useLoaderData } from "react-router-dom";
import { getStoreItems } from "../../services/apiStore";
import StoreList from "./StoreList";


function Store() {
  const items = useLoaderData();
  {if(!items) return <p>Loading...</p>}
  return <StoreList items={items} />
  
}

export  async function loader() {
    const storeItems = await getStoreItems();
    return storeItems;
}

export default Store;