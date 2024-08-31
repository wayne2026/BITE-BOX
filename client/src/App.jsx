import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const show = location.pathname !== '/login';
  return (
    <>
      <main className={`${show? 'flex  flex-col items-center ':''}`}>
        <div className={`${show? 'w-[80%]':''} `}>
          {show && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
          </Routes>
        </div>
      </main>
      {show && <Footer />}
    </>
  )
}
