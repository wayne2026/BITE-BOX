import { assets } from "../assets/assets";

export default function Footer() {
    return (
        <div className="bg-[#171616e6]  flex flex-col items-center mt-36 pt-20 pb-20">

        <div className="flex justify-evenly   pb-20  w-full ">
            <div className="w-1/3 flex flex-col gap-7">
                <h1 className="text-5xl font-semibold text-orange-600">BITE-BOX</h1>
                <p className="text-base font-extralight text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neqecessitatibus tenetur vitae, enim error eligendi ullam itaque non illo alias perferendis molestiae  doloremque quaerat.</p>
                <div className="flex gap-5">
                    <img src={assets.facebook_icon} alt="" className="cursor-pointer" />
                    <img src={assets.twitter_icon} alt="" className="cursor-pointer" />
                    <img src={assets.linkedin_icon} alt="" className="cursor-pointer" />
                </div>
            </div>
            <div className="w-1/3  flex gap-28 text-slate-200 ">
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-medium ">COMPANY</h2>
                    <div className="font-light flex flex-col gap-3">

                    <a href="#home"><h2>Home</h2></a>
                    <h2>About Us</h2>
                    <h2>Delivery</h2>
                    <h2>Privacy Policy</h2>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl text-slate-200 font-medium">GET IN TOUCH</h1>
                    <h3 className="font-light">+916969696969</h3>
                    <p className="font-light">contact@bitebox.com</p>
                </div>
            </div>
            
        </div>
        <hr className="w-[78%]"/>
        </div>
    )
}
