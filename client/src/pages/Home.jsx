import { assets } from "../assets/assets";
import Button from "../components/Button";
import ExploreMenu from "../components/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay";
import{useState} from 'react'

export default function Home() {
    const[category,setcategory]=useState('All')
    return (
        <div id="home" className="  relative mt-10">
            <img src={assets.header_img} alt="" height={500} className="" />
            <div className=" absolute top-28 flex flex-col items-start pl-20 gap-7 ">
                <h2 className="text-5xl font-bold text-[#f0e8e8]">Order Your <br />Favourite Food Here</h2>
                <p className="text-[#f2f2f2] -mb-2 -mt-4 pr-80 leading-normal font-normal">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <Button
                    label='View Menu'
                    css='bg-white rounded-3xl w-32 h-12 text-sm'
                />
            </div>
            <ExploreMenu category={category} setcategory={setcategory}/>
            <FoodDisplay category={category}/>
        </div>
    )
}
