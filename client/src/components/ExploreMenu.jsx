/* eslint-disable react/prop-types */

import { menu_list } from "../assets/assets"
export default function ExploreMenu({category,setcategory}) {
    
    return (
        <div id="menu">
            <h1 className="text-3xl font-medium mt-10">Explore Our Menu</h1>
            <p className="text-base font-light mt-3">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
            <div className="flex gap-10 mt-8">
                {menu_list.map((items) => {
                    return (
                        <div key={items.menu_name} onClick={() => setcategory((prev)=>prev===items.menu_name?'All':items.menu_name)} className="flex cursor-pointer flex-col items-center gap-3 mb-10 ">
                            <div className={`${category===items.menu_name?'border-[3px] p-[2px] border-orange-600  rounded-full':''}`}>
                                <img src={items.menu_image} alt="" className="rounded-full" />
                            </div>
                            <h1 className="text-gray-600 text-lg">{items.menu_name}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
