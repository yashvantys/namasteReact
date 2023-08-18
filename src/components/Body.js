import RestaurantCard, { withPromotedLabel } from "./RestaurantCard"
import { useState, useContext } from "react";
import Shimer from "./Shimer";
import useRestaurants from '../utils/useRestaurants'
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Body = () => {
    //const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    //const [filterRestaurant, setFilterRestaurant] = useState([])
    const listOfRestaurant = useRestaurants();
    const filterRestaurant = useRestaurants();
    const onlineStatus = useOnlineStatus();
    const { loggedInUser, setUserName } = useContext(UserContext)

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    //console.log(filterRestaurant)
    if (!onlineStatus) return <h1>You are offline!!, Please check your internet connection</h1>


    return listOfRestaurant?.length === 0 ? <Shimer /> : (
        <div className=''>
            <div className='flex'>
                <div className="p-4 m-4">
                    <input type="text" className="border border-solid border-black" value={searchTxt} onChange={(e) => {
                        setSearchTxt(e.target.value);
                    }} />
                    <button className="px-4 py-2 m-4 bg-green-100 rounded" onClick={() => {
                        const filterRes = listOfRestaurant?.filter((res) => res?.data ? res?.data?.name.toLowerCase().includes(searchTxt.toLowerCase()) : res.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
                        //setFilterRestaurant(filterRes);
                    }}>Search</button>
                    <button className="px-4 py-2 m-4 bg-green-100 rounded" onClick={() => {
                        const filterList = listOfRestaurant?.filter((res) => res?.data ? res?.data.data.id : res.info.avgRating > 4.3);
                        //setListOfRestaurant(filterList)
                    }}>Top Rated Restaurant</button>
                    <div className="p-2 mx-2">
                        <label>User Name</label>
                        <input className="border border-solid border-black" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap'>
                {
                    filterRestaurant?.map(restaurant => <RestaurantCard key={restaurant?.data ? restaurant?.data?.data?.id : restaurant?.info?.id} resData={restaurant} />
                    )
                }
            </div>
        </div >
    )
}

export default Body;