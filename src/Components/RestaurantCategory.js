
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showIndex,setShowIndex}) => {
  const handleClick = () => {
    setShowIndex();
  }

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 font-bold">
      <div className="flex justify-between px-6 cursor-pointer" onClick={handleClick}>
      <span>{data.title} ({data.itemCards.length})</span>
      <span>⬇</span>
      </div>
        { showIndex && <ItemList items={data.itemCards}/> }
    </div>
  )
}

export default RestaurantCategory;