import { CDN_URL } from '../utils/constant';
import { Link } from 'react-router-dom';

export const RestaurantCard = (props) => {
    const { resData } = props;
    //console.log("resData", resData)
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime, id } = resData?.data ? resData?.data.data : resData?.info;
    return (
        <Link to={"/restaurants/" + id}>
            <div className='p-4 m-4 w-[235px] rounded-lg bg-gray-100 hover:bg-gray-200'>
                <img className='w-[200px] h-[150px] rounded-lg' alt='alpha-logo'
                    src={CDN_URL + cloudinaryImageId} />
                <h3 className='font-bold py-4 text-lg'>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating} Stars</h4>
                <h4>₹{costForTwo / 100} FOR TWO</h4>
                <h4>{deliveryTime} minutes</h4>
            </div></Link>
    )
}

// higher order component
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;