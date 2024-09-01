import { useContext, useState, useEffect } from "react"
import { StoreContext } from "../context/StoreContext"
import { assets } from "../assets/assets"
import {  useNavigate } from "react-router-dom"

export default function Cart() {
  const navigate=useNavigate()
  const { cartItems, allFood, removeFromCart,total } = useContext(StoreContext)
  const [emptyCart, setEmptyCart] = useState('')
  // const [total, setTotal] = useState(0)
  useEffect(() => {
    const hasItems = allFood.some((items) => cartItems[items._id] > 0)
    if (hasItems) {
      setEmptyCart('')

    } else {
      setEmptyCart('The Cart is Empty 😔 Go add some Food in it 🤗')
    }
  }, [cartItems,allFood]);
  return (
    <div className="">
      <div className="flex flex-col gap-5 pt-20">
        <div className="grid grid-cols-6  gap-20 pl-5">
          <p>Items</p>
          <p className="">Title</p>
          <p className="">Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="border-[1.3px]" />
        <p className=" m-auto">{emptyCart}</p>
        {allFood.map((items) => {
          if (cartItems[items._id] > 0) {
            return (
              <div key={items._id} className=" grid grid-cols-6 border-b-[1.5px] items-center gap-24 pb-5 pl-2">
                <img src={items.image} alt="" className="" />
                <p className="text-lg text-nowrap ">{items.name}</p>
                <p>$ {items.price}</p>
                <p>{cartItems[items._id]}</p>
                <p>$ {items.price * cartItems[items._id]} </p>
                <img src={assets.cancel_icon} alt="" onClick={() => removeFromCart(items._id)} className="w-6 cursor-pointer" />
              </div>
            )
          }
        })}
      </div>
      {emptyCart ? ''
        :
        <div className="mt-10 flex flex-col gap-3 w-1/2">
          <h1 className="text-3xl font-medium">Cart Totals </h1>
          <div className=" flex flex-col gap-3">
            <div className="flex  justify-between">
              <p>Subtotal</p>
              <p>{total}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Delivey fee </p>
              <p>2</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Total</p>
              <p>{total + 2}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} className="border-2 mt-5 w-60 text-md text-slate-700 rounded-md p-2 bg-orange-500">PROCEED TO CHECKOUT</button>
        </div>}
    </div>
  )
}
