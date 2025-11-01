
import { NavLink, Link } from 'react-router';
import userpng from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
import { use } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NavBar = () => {
    const { user, setUser, logOut } = use(AuthContext);

    // console.log('Full User Object:', user);
    // console.log('PhotoURL:', user?.photoURL);
    // console.log('DisplayName:', user?.displayName);
    // console.log('Email:', user?.email);
    const handleLogOut = () => {
        logOut()
            .then(() => setUser(null));
            toast.success('Logout Successfully!')
    }
    return (
        <div>
            <nav className='flex justify-between items-center backdrop-blur-2xl rounded-2xl p-5'>
                <div className='flex flex-col md:flex-row sm:flex-row space-y-3'>
                    <div>
                        <Link to='/'><h1 className='text-primary font-bold text-3xl typing-text'>SkillSwap</h1></Link>
                    </div>
                    <div className='text-primary flex justify-center items-center gap-2 md:gap-5 md:absolute md:left-1/2 md:transform md:-translate-x-1/2'>
                        <NavLink className='font-bold hover:bg-secondary hover:text-white 
                hover:scale-105 transition-all duration-300 px-3 py-1 rounded-2xl hover:shadow-lg' to='/'>Home</NavLink>
                        <NavLink className='font-bold hover:bg-secondary hover:text-white 
                hover:scale-105 transition-all duration-300 px-3 py-1 rounded-2xl hover:shadow-lg' to='/profile'>Profile</NavLink>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <img
                        className='max-w-10 rounded-[50%]'
                        src={user?.photoURL || userpng}
                        alt={user?.displayName || "User"}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = userpng;
                        }}/>
                    {
                        user ? <button className='btn text-white bg-primary' onClick={handleLogOut}>LogOut</button> :
                            <div className='flex flex-row gap-3'>
                                <Link className='btn bg-primary text-white' to='/login'>Login</Link>
                                <Link className='btn bg-primary text-white' to='/register'>Register</Link>
                            </div>
                    }
                </div>
            </nav>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default NavBar;