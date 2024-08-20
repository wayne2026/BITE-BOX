import { assets } from '../assets/assets'
export default function Navbar() {
    return (
        <div className="">
            <div className='flex justify-between pl-20 pr-20 m-3'>
                <div className='flex flex-col'>
                    <h1>Bite-Box</h1>
                    <h1>Admin Panel</h1>
                </div>
                <img src={assets.profile_image} alt="" />
            </div>

        </div>
    )
}
