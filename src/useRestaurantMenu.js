import { useEffect,useState } from "react";
import {Menu_API} from "./Constants";

const useRestaurantMenu = (resId)=>{
    const [menuData,setMenuData] = useState(null);

    useEffect(()=>{
        fetchData();
      },[]);

    async function fetchData(){
        const res = await fetch(Menu_API+resId);
        const jsonData= await res.json();
        setMenuData(jsonData.data);
        console.log("JSON data",jsonData);
    }
    return menuData;
}

export default useRestaurantMenu;