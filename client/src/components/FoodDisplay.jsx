/* eslint-disable react/prop-types */
// import { useContext } from "react"
// import { StoreContext } from "../context/StoreContext"
import FoodItems from "./FoodItems"

export default function FoodDisplay({category,food}) {
    // const { food_list } = useContext(StoreContext)
    
    return (
        <div>
            <h2 className="text-3xl">Top dishes near you</h2>
            {food ? (
                <div className="grid grid-cols-4 gap-4 pt-5 ">
                    {food.map((items) => {
                        if(category==='All'||category===items.category){
                            return  <FoodItems key={items._id} id={items._id} name={items.name} description={items.description} price={items.price} image={items.image} />
                        }
                    })}
                </div>
            ) : (
                <p>Add Food</p>
            )}
        </div>
    )
}
