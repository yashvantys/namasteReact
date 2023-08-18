import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemCard = (props) => {
    const dispatch = useDispatch();
    //const { id, category, description, price, imageId, defaultPrice } = props?.data?.card?.info
    const handleAddItem = (item) => {
        // dispatch action
        dispatch(addItem(item))
    }
    const dataMap = props?.data?.itemCards ? props?.data?.itemCards : props?.data
    return (
        <div>
            {dataMap?.map((item) => {
                return (
                    <div key={item?.card?.info?.id} className="p-2 m-2 border-b-[1px] text-left flex">
                        <div className="w-9/12">
                            <div className="py-2">
                                <span className='font-bold'>{item?.card?.info?.category}</span>
                                <span className="p-2">Price: ₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                            </div>
                            <span className="text-sm">{item?.card?.info?.description}</span>
                        </div>
                        <div className="w-3/12 justify-end h-auto">
                            <div className="absolute">
                                <button className="p-2 bg-black text-white shadow-lg m-auto mx-1 rounded" onClick={() => handleAddItem(item)}>Add+</button>
                            </div>
                            <img src={CDN_URL + item?.card?.info?.imageId} alt="" />
                        </div>
                    </div>)
            })}
        </div>

    )
}

export default ItemCard;