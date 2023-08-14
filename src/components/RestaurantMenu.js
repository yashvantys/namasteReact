import { useEffect, useState } from "react";
import { RES_MENU_CARD_URL } from '../utils/constant';
import { useParams } from 'react-router'

const RestaurantMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const { params } = useParams();
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RES_MENU_CARD_URL + params);
        const json = await data?.json();
        setMenuItems(json?.data?.cards);
    }
    console.log(menuItems)
    if (menuItems === undefined || menuItems.length == 0) return <span>Menu</span>;
    const {
        name,
        cuisines,
        locality,
        areaName,
        costForTwoMessage,
        city,
        avgRatingString,
        totalRatingsString,
    } = menuItems[0]?.card?.card?.info;

    return (
        <div className="restaurant-menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{locality}</h3>
            <h3>{areaName}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>{city}</h3>
            <h3>{avgRatingString}</h3>
            <h3>{totalRatingsString}</h3>
            <h2>Menu</h2>
            <ul>
                {menuItems[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item) => {
                    return (
                        <span key={item.card.info.id}>
                            {item.card.info.name} -- {item.card.info.price / 100}
                        </span>
                    )
                })}

            </ul>
        </div>
    )
}

export default RestaurantMenu;