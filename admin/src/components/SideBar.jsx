import { NavLink } from "react-router-dom"
import { assets } from "../assets/assets"
export default function SideBar() {
    return (
        <div className="flex flex-col border-r-2 w-[18%] min-h-screen gap-5">
            <NavLink to='/add' className="flex gap-3 border-2 p-2">
                <img src={assets.add_icon} alt="" className="w-6" />
                <h1>Add Items</h1>
            </NavLink>
            <NavLink to='/list' className="flex gap-3 border-2 p-2">
                <img src={assets.order_icon} alt="" className="w-6" />
                <h1>List Items</h1>
            </NavLink>
            <NavLink to='/orders' className="flex gap-3 border-2 p-2">
                <img src={assets.order_icon} alt="" className="w-6" />
                <h1>Orders</h1>
            </NavLink>
        </div>
    )
}
