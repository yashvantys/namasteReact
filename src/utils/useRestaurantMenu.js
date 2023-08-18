import { useEffect, useState } from "react";
import { RES_MENU_CARD_URL } from '../utils/constant';
const useRestaurantMenu = (resId) => {
    const [menuItems, setMenuItems] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RES_MENU_CARD_URL + resId);
        const json = await data?.json();
        setMenuItems(json);
    }

    return menuItems;
}


export default useRestaurantMenu;