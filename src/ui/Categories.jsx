import { useState, useEffect } from "react";
import { getCategories } from "../services/apiStore";

function Categories({handleClick}) {
    const [categories, setCategories] = useState(null);
    useEffect(()=>{
        const getData = async ()=>{
            const res = await getCategories();
            setCategories(res);
        }
        getData();
    },[])
  return (
    <ul className="mb-5">
        <button onClick={handleClick} value={''} className="bg-neutral-500 ml-5 py-3 px-4 tracking-wide rounded-lg uppercase mt-5 inline-block text-stone-200 text-sm hover:bg-neutral-600 transition-all duration-300" >All items</button>
        {categories && categories.map((category, index)=>{
            return <button key={index} onClick={handleClick} value={category} className="bg-neutral-500 ml-5 py-3 px-4 tracking-wide rounded-lg uppercase mt-5 inline-block text-stone-200 text-sm hover:bg-neutral-600 transition-all duration-300" >{category}</button>
        })}
    </ul>
  )
}

export default Categories