import { CDN_URL } from '../utils/constant';
import { Link } from 'react-router-dom';

export const RestaurantCard = (props) => {
    const { resData } = props;
    //console.log("resData", resData)
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime, id } = resData?.data ? resData?.data.data : resData?.info;
    return (
        <Link to={"/restaurants/" + id}>
            <div className='restaurant-card' style={{ backgroundColor: '#f0f0f0' }}>
                <img className='res-logo' alt='alpha-logo'
                    src={CDN_URL + cloudinaryImageId} />
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating} Stars</h4>
                <h4>₹{costForTwo / 100} FOR TWO</h4>
                <h4>{deliveryTime} minutes</h4>
            </div></Link>
    )
}

export default RestaurantCard;