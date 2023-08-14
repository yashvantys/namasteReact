import { useParams } from 'react-router'
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimer from '../components/Shimer';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    if (resInfo == null) return <Shimer />;
    const {
        name,
        cuisines,
        locality,
        areaName,
        costForTwoMessage,
        city,
        avgRatingString,
        totalRatingsString,
    } = resInfo?.data?.cards[0]?.card?.card?.info;

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
                {resInfo?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item) => {
                    return (
                        <h4 key={item.card.info.id}>
                            {item.card.info.name} -- {item.card.info.price / 100}
                        </h4>
                    )
                })}

            </ul>
        </div>
    )
}

export default RestaurantMenu;