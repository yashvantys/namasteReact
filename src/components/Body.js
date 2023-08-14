import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";
import Shimer from "./Shimer";

export const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    const [filterRestaurant, setFilterRestaurant] = useState([])
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=desktop_collection_list")
        const json = await data.json();
        //console.log(json)
        //console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listOfRestaurant?.length === 0 ? <Shimer /> : (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" className="search-box" value={searchTxt} onChange={(e) => {
                        setSearchTxt(e.target.value);
                    }} />
                    <button className="btn-search" onClick={() => {
                        const filterRes = listOfRestaurant?.filter((res) => res?.data ? res?.data?.name.toLowerCase().includes(searchTxt.toLowerCase()) : res.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
                        setFilterRestaurant(filterRes);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filterList = listOfRestaurant?.filter((res) => res?.data ? res?.data.data.id : res.info.avgRating > 4.3);
                    setListOfRestaurant(filterList)
                }}>Top Rated Restaurant</button>
            </div>

            <div className='restaurant-container'>
                {
                    filterRestaurant?.map(restaurant => <RestaurantCard key={restaurant?.data ? restaurant?.data?.data?.id : restaurant?.info?.id} resData={restaurant} />)
                }
            </div>
        </div >
    )
}

export default Body;