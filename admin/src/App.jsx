import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import {Routes,Route} from 'react-router-dom'
import Add from './Pages/Add'
import Orders from "./Pages/Orders"
import List from "./Pages/List"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr className="border-[1.5px]"/>
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path='/add' element={<Add/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/add' element={<Orders/>}/>
        </Routes>
      </div>
    </div>
  )
}
