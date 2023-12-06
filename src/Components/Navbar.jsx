import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(!false);

    const navLinks = [
        { href: '/', key: 'home', label: 'Home' },
        { href: '/about', key: 'about', label: 'About' },
        { href: '/services', key: 'services', label: 'Services' },
        { href: '/pricing', key: 'pricing ', label: 'Pricing ' },
        { href: '/contact', key: 'contact', label: 'Contact' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-24">
                <h1 className="text-3xl font-bold">
                    <NavLink to='/'>
                        Hi<span className="text-[#30af5b]">link.</span>
                    </NavLink>
                </h1>

                <div className="hidden lg:block">
                    <ul className="text-xl font-medium flex gap-x-7">

                        {
                            navLinks.map(navLink => (
                                <li key={navLink.key}>
                                    <NavLink to={navLink.href} className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#30af5b]" : ""}>
                                        {navLink.label}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="hidden lg:flex items-center gap-x-2 borde px-8 py-4 rounded-full bg-[#292c27] text-white font-semibold cursor-pointer">
                    <NavLink to='/login' className="flex items-center gap-x-2">
                        <CgProfile className='text-2xl' />
                        <span className="text-xl">Login/Register</span>
                    </NavLink>
                </div>

                {/* Mobile Navbar - responsive */}
                <div onClick={() => setToggleMenu(!toggleMenu)} className="lg:hidden">

                    {
                        toggleMenu === true ? <FiMenu className="xl:hidden text-3xl cursor-pointer" /> : <FiMenu className="xl:hidden text-3xl cursor-pointer" />
                    }

                    <div className={`absolute w-[80vw] h-full top-0 left-0 bg-white shadow-xl z-50 flex flex-col text-lg font-medium lg:hidden ${toggleMenu ? 'hidden' : ''}`}>

                        <div className="bg-[#30af5b] text-white px-10 py-4 mb-10">
                            <p className="text-3xl font-semibold">
                                Welcome to Hilink.
                            </p>
                        </div>

                        <ul className="text-xl">
                            {
                                navLinks.map(navLink => (
                                    <li key={navLink.key} className="px-8 py-3 hover:bg-[#f7f7f7] cursor-pointer">
                                        <NavLink to={navLink.href} className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#30af5b]" : ""}>
                                            {navLink.label}
                                        </NavLink>
                                    </li>
                                ))
                            }

                            <div className="px-8 py-3 text-xl font-medium cursor-pointer bg-black text-white bottom-0 fixed w-[80vw]">
                                <NavLink to='/login' className="flex items-center gap-x-2">
                                    <CgProfile className='text-2xl' />
                                    <NavLink>
                                        Login/Register
                                    </NavLink>
                                </NavLink>
                            </div>
                        </ul>

                        <hr className="my-8" />

                        <div className="px-8">
                            <div>
                                <p className="text-sm mb-2">
                                    Total Free Customer Care
                                </p>

                                <p className="mb-5">
                                    +(0) 123 050 945 02
                                </p>
                            </div>

                            <div>
                                <p className="text-sm mb-2">
                                    Need Live Support?
                                </p>

                                <p>
                                    hi@link.com
                                </p>
                            </div>
                        </div>

                        <hr className="my-8" />

                        <div className="flex items-center gap-x-5 px-8">
                            <p className="font-semibold">
                                Follow us
                            </p>

                            <div className="flex gap-4 text-lg cursor-pointer">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;