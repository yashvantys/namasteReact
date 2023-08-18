import ItemCard from "./ItemCard";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const { title, itemCards } = data;

    const handleClick = () => {
        setShowIndex()
    }
    return (
        <div>
            <div className="w-6/12 bg-gray-50 shadow-lg mx-auto my-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{title} ({itemCards.length})</span>
                    <span>⬇ </span>
                </div>
                <div>
                    {showItems ? (<ItemCard data={data} />) : ""}
                </div>
            </div>
        </div>
    )
}

export default RestaurantCategory;