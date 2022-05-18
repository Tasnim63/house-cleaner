import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
    return (
        <div className=''>
            <div className=" drawer drawer-end ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className=" drawer-content flex flex-col">

                    <div className="w-full navbar shadow-lg px-10">

                        <div className="flex-1 px-2 mx-2 font-bold mx-4 text-2xl text-primary font-serif">House Cleaner</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal font-bold px-3 font-serif">

                                <li ><NavLink className=' rounded-lg' to='/home'>Home</NavLink></li>
                                <li ><NavLink className=' rounded-lg' to='/About'>About</NavLink></li>
                                <li><NavLink className=' rounded-lg' to='/Services'>Services</NavLink></li>
                                <li><NavLink className=' rounded-lg' to='/contact'>Contact</NavLink></li>
                                <li><NavLink className=' rounded-lg' to='/login'>Login</NavLink></li>
                                <li>
                                    <button className=' data-toggle-theme="dark,light" '>theme</button>
                                </li>
                                <li class="dropdown dropdown-hover dropdown-end  font-bold px-3 font-serif  ">

                                    <label tabindex="0" class="btn btn-primary btn-outline m-1  rounded-lg">Order Now</label>
                                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </ul>

                                </li>


                            </ul>
                        </div>
                        <div className="flex-none lg:hidden">
                            <label for="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                    </div>

                    {children}
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80  font-bold py-3 font-serif bg-base-100">

                        <li ><NavLink className=' rounded-lg' to='/home'>Home</NavLink></li>
                        <li ><NavLink className=' rounded-lg' to='/About'>About</NavLink></li>
                        <li><NavLink className=' rounded-lg' to='/Services'>Services</NavLink></li>
                        <li><NavLink className=' rounded-lg' to='/contact'>Contact</NavLink></li>
                        <li><NavLink className=' rounded-lg' to='/login'>Login</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;