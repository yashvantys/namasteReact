import { useParams } from 'react-router'
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimer from '../components/Shimer';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const categories = resInfo?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards.filter((c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(categories)
    const [showIndex, setShowIndex] = useState(null)
    if (resInfo == null) return <Shimer />;
    const {
        name,
        cuisines,

    } = resInfo?.data?.cards[0]?.card?.card?.info;

    return (
        <div className="p-4 m-4 text-center">
            <h1 className='font-bold'>{name}</h1>
            <h3 className='py-2 font-bold'>{cuisines.join(", ")}</h3>
            {/**
                controlled component
            */}
            {categories.map((categoty, index) => {
                return <RestaurantCategory key={index} data={categoty?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index === showIndex ? null : index)} />
            })}
        </div>
    )
}

export default RestaurantMenu;