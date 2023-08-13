import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";
import Shimer from "./Shimer";

export const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=desktop_collection_list")
        const json = await data.json();
        //console.log(json)
        //console.log(json.data)
        setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if (listOfRestaurant?.length === 0) {
        return <Shimer />
    }
    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => {
                    const filterList = listOfRestaurant.filter((res) => res?.data ? res?.data.data.id : res.info.avgRating > 4.3);
                    setListOfRestaurant(filterList)
                }}>Top Rated Restaurant</button>
            </div>

            <div className='restaurant-container'>
                {
                    listOfRestaurant?.map(restaurant => <RestaurantCard key={restaurant?.data?.data?.id} resData={restaurant} />)
                }
            </div>
        </div >
    )
}

export default Body;