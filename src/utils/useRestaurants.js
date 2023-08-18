import { useState, useEffect } from "react";
import { RES_DATA } from './constant'
const useRestaurants = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(RES_DATA);
        //console.log(data)
        const json = await data?.json();
        setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants);
        //setFilterRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    //console.log(listOfRestaurant)
    return listOfRestaurant;
}

export default useRestaurants;