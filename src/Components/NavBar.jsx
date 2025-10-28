import React from 'react';
import { NavLink } from 'react-router';
import userpng from '../assets/user.png'

const NavBar = () => {
    return (
        <div>
            <nav className='flex justify-between items-center backdrop-blur-2xl rounded-2xl p-5'>
                <div>
                    <h1 className='text-primary font-bold text-3xl typing-text'>SkillSwap</h1>
                </div>
                <div className='text-primary flex justify-center items-center gap-5'>
                    <NavLink className='font-bold hover:bg-secondary hover:text-white 
                hover:scale-105 transition-all duration-300 px-3 py-1 rounded-2xl hover:shadow-lg' to='/'>Home</NavLink>
                    <NavLink className='font-bold hover:bg-secondary hover:text-white 
                hover:scale-105 transition-all duration-300 px-3 py-1 rounded-2xl hover:shadow-lg' to='/profile'>Profile</NavLink>
                </div>
                 <div className='flex justify-center items-center gap-3'>
                    <img className='max-w-7 rounded-[50%]' src={userpng} alt="" />
                    <NavLink className='btn bg-primary text-white' to='/login'>Login</NavLink>
                    <NavLink className='btn bg-primary text-white' to='/login'>Register</NavLink>
                 </div>
            </nav>
        </div>
    );
};

export default NavBar;