import { useState } from 'react'
import { assets } from '../assets/assets'
import Button from './Button'
import{Link} from 'react-router-dom'
export default function Navbar() {
    const[menu,setmenu]=useState('menu')
    return (
        <section className='mt-5'>
            <div className='flex justify-evenly  items-center min-h-16  '>
                
                <Link to='/'><h1 className='text-4xl capitalize'>BITE BOX</h1></Link>
                <ul className='flex gap-5 justify-center items-center text-lg'>
                    <a href="#home"><li className={`${menu==='Home'?'border-b-2  border-black':''} cursor-pointer `} onClick={()=>setmenu('Home')}>Home</li></a>
                    <a href="#menu"><li className={`${menu==='Menu'?'border-b-2 border-black':''} cursor-pointer`} onClick={()=>setmenu('Menu')}>Menu</li></a>
                    <a href='#mobile'><li className={`${menu==='Mobile-App'?'border-b-2 border-black':''} cursor-pointer`} onClick={()=>setmenu('Mobile-App')}>Mobile-App</li></a>
                    <a href='#concant-us'><li className={`${menu==='Contact-us'?'border-b-2 border-black':''} cursor-pointer`} onClick={()=>setmenu('Contact-us')}>Contact-us</li></a>
                </ul>
                <div className='flex gap-5'>
                    <img src={assets.search_icon} alt="" />
                    <div>
                        <img src={assets} alt="" />
                        <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    </div>
                </div>
                <Button
                    label='Sign In'
                    css='rounded-2xl w-20 h-8 '
                />
            </div>
            
        </section>
    )
}
