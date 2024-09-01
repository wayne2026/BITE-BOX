import { useState } from "react";
import { assets } from "../assets/assets";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
// import GoogleAuth from "./GoogleAuth";
export default function LoginPage() {

    const [seePassword, setSeePassword] = useState(false)
    const [signup, setSignUp] = useState(false)
    const [data, setData] = useState({
        email: "",
        name: "",
        password: ""
    })
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const loginFormData = {
            email: data.email,
            password: data.password
        };
        const registerFormData = {
            name: data.name,
            email: data.email,
            password: data.password
        };
        try {
            if (signup) {
  
                const addRegisterData = await axios.post('http://localhost:3000/api/user/register', registerFormData, {
                    withCredentials: true,
                });

                if (addRegisterData.data.success) {
                    localStorage.setItem('token', addRegisterData.data.token);
                    toast.success(addRegisterData.data.message);
                    setTimeout(()=>navigate('/'),1200)
                } else {
                    toast.error(addRegisterData.data.message);
                }
                console.log(addRegisterData.data);
                

            } else {
                const addLoginData = await axios.post('http://localhost:3000/api/user/login', loginFormData, {
                    withCredentials: true,
                });

                if (addLoginData.data.success) {
                    localStorage.setItem('token', addLoginData.data.token);
                    toast.success(addLoginData.data.message);
                    setTimeout(()=>navigate('/'),1200)
                } else {
                    toast.error(addLoginData.data.message);
                }
                console.log(addLoginData.data);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'An error occurred');
        }
    }



    console.log(data)
    const navigate = useNavigate()
    return (
        <div className="flex relative overflow-hidden justify-center items-center  bg-gradient-to-r from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] bg-opacity-20 backdrop-blur-[15px] font-[sans-serif]  md:min-h-screen ">
            <ToastContainer />
            <img src={assets.cancel_icon} alt="" onClick={() => navigate('/')} className="absolute z-[60] top-2 left-[54rem] cursor-pointer " />
            <div className="grid justify-center  max-w-[20rem] mx-auto ">
                <div>
                    <img src={assets.login_image} className="w-full rounded-2xl" alt="login-image" />
                </div>

                <form onSubmit={onSubmitHandler} className="bg-white rounded-b-2xl p-6 -mt-24 relative  shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
                    <div className="mb-12">
                        {signup ?
                            <h3 className="text-3xl font-extrabold text-blue-600">Sign up</h3>
                            :
                            <h3 className="text-3xl font-extrabold text-blue-600">Sign in</h3>
                        }
                    </div>
                    {signup ?
                        <>
                            <div className="relative flex  items-center mt-6">
                                <input name="name" type="text" onChange={handleChange} value={data.name} required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter name" />
                                <img src={assets.icons_person} alt="" className="w-6 absolute right-2" />
                            </div>
                            <div className="relative flex  items-center mt-6">
                                <input name="email" type="email" onChange={handleChange} value={data.email} required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter email" />
                                <img src={assets.icons_mail} alt="" className="w-5 absolute right-2.5" />

                            </div>
                        </>
                        :
                        <div className="relative flex items-center mt-6">
                            <input name="email" type="email" onChange={handleChange} value={data.email} required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter email" />
                            <img src={assets.icons_mail} alt="" className="w-5 absolute right-2.5" />
                        </div>
                    }

                    <style>
                        {`
                            input[type="password"]::-ms-reveal {
                            display: none;
                            }
                        `}
                    </style>
                    <div className="mt-6">
                        <div className="relative flex items-center">
                            <input name="password" type={seePassword ? "text" : "password"} onChange={handleChange} value={data.password} required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter password" style={{}} />
                            {seePassword ?
                                <img src={assets.icons_eye} alt="don't seee" onClick={() => setSeePassword(false)} className="w-5 absolute right-2.5 cursor-pointer" />
                                : <img src={assets.icons_closedeye} alt="see" className="w-6 absolute right-2 cursor-pointer" onClick={() => setSeePassword(true)} />}

                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <h3 className="text-gray-800 ml-3 text-sm">Remember me</h3>
                        </div>
                        <div>
                            <a href="jajvascript:void(0);" className="text-blue-600 text-sm font-semibold hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                    </div>

                    <div className="mt-12">
                        {signup ?
                            <button type="submit" className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                Sign up
                            </button>
                            :
                            <button type="submit" className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                Sign in
                            </button>

                        }
                        {signup ?
                            <div className="mt-6 flex justify-center gap-5 items-center">
                                <p className="text-sm text-center ">Already have an account </p>
                                <h1 className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap cursor-pointer" onClick={() => setSignUp(false)}>Login Here</h1>
                            </div>
                            :
                            <div className="flex justify-center gap-5 mt-6 items-center">
                                <p className="text-sm text-center  ">Don&apos;t have an account </p>
                                <h1 className="text-blue-600  font-semibold hover:underline ml-1 whitespace-nowrap cursor-pointer" onClick={() => setSignUp(true)}>Register Here</h1>
                            </div>}

                    </div>
                    <hr className="my-6 border-gray-300" />
                    {/* <div className="flex justify-center">
                        <GoogleAuth />
                    </div> */}
                </form>
            </div>
        </div>

    )
}


