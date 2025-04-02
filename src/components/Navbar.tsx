import { Menu, X } from 'lucide-react';
import Logo from "../../public/assets/logo.png"
import { useState } from 'react';


const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);


    return (
        <nav className="flex justify-between  py-3 sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80 ">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex gap-3  justify-center items-center shrink-0">
                        <img src={Logo} alt="logo" className="h-10 w-10" />
                        <span className="text-xl tracking-tight">VirtaulR</span>
                    </div>
                    <div>
                        <ul className=" hidden lg:flex ml-14 space-x-12 justify-center items-center">
                            <li ><a href="#">Feature</a></li>
                            <li><a href="#">WorkFlow</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Testimonials</a></li>
                        </ul>
                    </div>
                    <div className="hidden lg:flex justify-center items-center space-x-12">
                        <a href="#" className="border rounded-md py-2 px-3 ">
                            Sign In
                        </a>
                        <a href="#" className=" rounded-md py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 ">
                            Create an account
                        </a>
                    </div>
                    <div className='lg:hidden flex flex-col justify-end cursor-pointer transition delay-150 duration-300 ease-in-out ' onClick={() => { setShowMobileMenu((prev) => !prev) }}>
                        {
                            showMobileMenu ? <X /> : <Menu />
                        }
                    </div>
                    {
                        showMobileMenu && (
                            <div className='flex flex-col lg:hidden absolute border top-14 right-8 p-3 gap-4 backdrop-blur-lg border-neutral-700/80 z-50 '>
                                <ul className="flex flex-col gap-3 justify-center items-center">
                                    <li ><a href="#">Feature</a></li>
                                    <li><a href="#">WorkFlow</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                </ul>
                                <div className="flex lg:hidden justify-center items-center space-x-12">
                                    <a href="#" className="border rounded-md py-2 px-3 ">
                                        Sign In
                                    </a>
                                    <a href="#" className=" rounded-md py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 ">
                                        Create an account
                                    </a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;