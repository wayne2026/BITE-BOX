import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";

export default function App() {
  const [login,setlogin]=useState(false)
  return (
    <>
    {login?<LoginPage setlogin={setlogin} login={login}/>:<></>}
      <main className="flex min-w-full flex-col items-center ">
        <div className="w-[80%] ">
          <Navbar setlogin={setlogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
          </Routes>
        </div>
      </main>
      <Footer/>
    </>
  )
}
