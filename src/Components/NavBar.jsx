
import { NavLink, Link } from 'react-router';
import userpng from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {
     
    return (
        <div>
            <nav className='flex justify-between items-center backdrop-blur-2xl rounded-2xl p-5'>
                <div>
                    <Link to='/'><h1 className='text-primary font-bold text-3xl typing-text'>SkillSwap</h1></Link>
                </div>
                <div className='text-primary flex justify-center items-center gap-5'>
                    <NavLink className='font-bold hover:bg-secondary hover:text-white 
                hover:scale-105 transition-all duration-300 px-3 py-1 rounded-2xl hover:shadow-lg' to='/'>Home</NavLink>
                    <NavLink className='font-bold hover:bg-secondary hover:text-white 
                hover:scale-105 transition-all duration-300 px-3 py-1 rounded-2xl hover:shadow-lg' to='/profile'>Profile</NavLink>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <img className='max-w-7 rounded-[50%]' src={userpng} alt="" />
                    <Link className='btn bg-primary text-white' to='/login'>Login</Link>
                    <Link className='btn bg-primary text-white' to='/register'>Register</Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;