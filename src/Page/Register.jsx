import React, { use, useState } from 'react';
import NavBar from '../Components/NavBar';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const [passValidation, setPassValidation] = useState('');
    const navigate = useNavigate();
    const { createUser, user, setUser, googleSignIn } = use(AuthContext);
    console.log(user);
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, photoUrl, email, password);

        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;
        const minLength = 6;

        if (!upperCaseRegex.test(password)) {
            setPassValidation('Password Must be Uppercase!!');
            return;
        } else if (!lowerCaseRegex.test(password)) {
            setPassValidation('Password Must be Loawercase!!');
            return;
        } else if (password.length < minLength) {
            setPassValidation('Password Must be More then 6 Charecter!!');
            return;
        }

        createUser(email, password)
            .then(result => {
                setUser(result.user);
                navigate('/')
            })
            .catch(error => {
                return toast('Same User Found Register with different User Mail' ,{
            position: "top-center"
        } ,error);
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then((result) => {
            setUser(result.user);
            navigate('/');
        })
        .catch(error => {
            console.log('error found from google Sign In', error);
        })
    }
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

                    <form onSubmit={handleRegister} className="flex flex-col gap-4">
                        <div>
                            <label className="block text-gray-700 mb-1 text-start">Full Name</label>
                            <input
                                name='name'
                                type="text"
                                required
                                placeholder="Enter your full name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1 text-start">Photo URL</label>
                            <input
                                name='photo'
                                type="text"
                                required
                                placeholder="Enter your profile photo URL"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1 text-start">Email</label>
                            <input
                                name='email'
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1 text-start">Password</label>
                            <input
                                name='password'
                                type="password"
                                required
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <p className='text-red-500'>{passValidation}</p>
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Register
                        </button>
                        <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </form>

                    <p className="text-center text-gray-500 mt-4">
                        Already have an account?{" "}
                        <Link to='/login' href="/login" className="text-indigo-600 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;