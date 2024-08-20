import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
export default function List() {
  const [list, setList] = useState([])
  const fetchFood = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/food/list')
      console.log(response.data.message)
      console.log(response.data)
      if (response.data.success) {
        setList(response.data.data)
      }
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    fetchFood()
  }, [])
  const onClickHandler = async (id) =>{
      try {
        const response = await axios.delete(`http://localhost:3000/api/food/delete/${id}`)
        console.log(response.data.message)
        toast.success(response.data.message)
        setList(prevItems => prevItems.filter(item => item._id !== id))
      } catch (error) {
        console.error(error)
      }
  }
  return (
    <div className='grid grid-cols-3 gap-5'>
      {list.map((items) => {
        return (
          <div key={items._id} className='flex flex-col'>
            <img src={items.image} alt="" className='w-56'/>
            <p>{items.name}</p>
            <p>{items.description}</p>
            <p>{items.price}</p>
            <p>{items.category}</p>
            <button onClick={()=>onClickHandler(items._id)} >Delete Item</button>
          </div>
        )
      })}
    </div>
  )
}
