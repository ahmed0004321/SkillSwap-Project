import React, { use } from 'react';
import NavBar from '../Components/NavBar';
import { AuthContext } from '../Provider/AuthProvider';
import userPng from '../assets/user.png'
import { useNavigate } from 'react-router';

const Profile = () => {
    const navigate = useNavigate();
    const { user, setUser, updatedUser } = use(AuthContext);
    console.log(user);
    const handleUpdateProfile = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updatedUser({ displayName: name, photoURL: photo })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo })
                navigate('/profile')
                e.target.reset()
                    .catch((err) => {
                        alert('error', err);
                        setUser(user)
                    })
            })
    }
    return (
        <div>
            <header>
                <div className="max-w-[1340px] mx-auto px-4">
                    <nav className='h-fit sticky top-0 z-50 left-0 py-5'>
                        <NavBar></NavBar>
                    </nav>
                </div>
            </header>

            <div className="flex justify-center items-center pt-5 px-4">
                <div className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-2xl p-8 w-full max-w-4xl border border-white/30 flex flex-col md:flex-row items-center gap-10">

                    {/* Left Side — Profile Info */}
                    <div className="flex flex-col items-center md:w-1/2">
                        <h2 className="text-3xl font-bold text-center text-primary mb-6">
                            Edit Your Profile
                        </h2>
                        <img
                            src={user ? user.photoURL : userPng}
                            className="w-28 h-28 rounded-full object-cover hover:scale-105 transition-all duration-300"
                        />
                        <p className="mt-3 text-blue-400 font-bold">
                            {user ? user.displayName : 'Login or register to see name'}
                        </p>
                        <p className="mt-3 text-blue-400 font-bold">
                            {user ? user.email : 'Login or register to see email.'}
                        </p>
                    </div>

                    {/* Right Side — Form */}
                    <form
                        onSubmit={handleUpdateProfile}
                        className="flex flex-col gap-5 w-full md:w-1/2"
                    >
                        <div>
                            <label className="block text-gray-700 mb-1 font-semibold text-start">
                                Full Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                required
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1 font-semibold text-start">
                                Photo URL
                            </label>
                            <input
                                name="photo"
                                type="text"
                                required
                                placeholder="Enter your photo URL"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-primary hover:to-purple-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Profile;