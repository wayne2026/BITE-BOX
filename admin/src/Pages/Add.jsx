import { assets } from "../assets/assets";
import { useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Add() {
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  })
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value
    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", data.price)
    formData.append("category", data.category)
    formData.append("image", image)
    try {
      const addFoodData = await axios.post('http://localhost:3000/api/food/add', formData)
      console.log('Data Added Successfully', addFoodData.data)
      toast.success(addFoodData.data.message)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className="ml-10 mt-10 text-slate-500 ">
      <form className="" onSubmit={onSubmitHandler} >
        <div className="pb-5">
          <p className="pb-3 pt-3">Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" className="border-2 w-40" />
          </label>
          <input type="file" id="image" hidden required onChange={(e) => setImage(e.target.files[0])} className="border-2 " />
        </div>
        <div className="pb-5">
          <p className="pb-3">Product Name</p>
          <input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder="Type Here..." className="focus:outline-none border-[1.3px] border-slate-400 p-2 min-w-[400px]" />
        </div>
        <div>
          <p className="pb-3">Product description</p>
          <textarea name="description" rows='4' onChange={onChangeHandler} value={data.description} placeholder="Type Description for food..." className="focus:outline-none border-[1.3px] p-2 border-slate-400 min-w-[400px]" />
        </div>
        <div className="flex gap-10">
          <div className="pb-5">
            <p className="pb-3 pt-3">Product Category</p>
            <select name="category" onChange={onChangeHandler} className="focus:outline-none w-32 border-[1.3px] p-2 border-slate-400">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div>
            <p className="pt-3 pb-3">Product Price</p>
            <input type="Number" name="price" onChange={onChangeHandler} value={data.price} placeholder="$20" className="focus:outline-none border-[1.3px]  border-slate-400 p-2 w-32" />
          </div>
        </div>
        <button type="submit" className="min-w-32 h-10 bg-black text-white border-2">Add</button>
      </form>
    </div>
  )
}
