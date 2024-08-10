/* eslint-disable react/prop-types */
import { useContext } from "react"
import { assets } from "../assets/assets"
import { StoreContext } from "../context/StoreContext"
export default function FoodItems({ id, name, description, price, image }) {

    const{cartItems,removeFromCart,addToCart}=useContext(StoreContext)
    return (
        <div key={id} className="pb-5 mb-6 rounded-xl shadow-lg relative">
            <img src={image} alt="" className="mb-3 rounded-t-xl" />
            {!cartItems[id] ? <div className=" flex items-center gap-4">
                <img src={assets.add_icon_white} onClick={() => addToCart(id)} alt="" className="absolute top-36 left-[11.5rem] cursor-pointer pl-3 w-10" />
            </div>
                : <div className="absolute top-[8.7rem] left-36">
                    <div className="flex p-1 justify-center bg-white border-2 rounded-3xl  gap-2 items-center   cursor-pointer">
                        <img src={assets.remove_icon_red} alt="" onClick={() => removeFromCart(id)} className="w-6"/>
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} alt="" onClick={() => addToCart(id)} className="w-6"/>
                    </div>
                </div>}
            <div className="p-3">
                <h1 className="text-lg pb-2 font-medium">{name}</h1>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="text-sm pr-3 pl-3">{description}</p>
            <h3 className="pl-3 text-orange-600 text-xl pt-2 font-medium ">${price}</h3>
        </div>
    )
}
