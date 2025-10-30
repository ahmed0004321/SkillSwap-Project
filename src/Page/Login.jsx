import React, { use, useState } from 'react';
import NavBar from '../Components/NavBar';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);
    const [success, setSuccess] = useState('');
    const [passvali, setPassVali] = useState('')
    const {signInUser, user, setUser, googleSignIn} = use(AuthContext);
    console.log(user);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;
        const minLength = 6;

        if (!upperCaseRegex.test(password)) {
            setPassVali('Password Must be Uppercase!!');
            return;
        } else if (!lowerCaseRegex.test(password)) {
            setPassVali('Password Must be Loawercase!!');
            return;
        } else if (password.length < minLength) {
            setPassVali('Password Must be More then 6 Charecter!!');
            return;
        }


        signInUser(email, password)
        .then(result => {
            setUser(result.user);
            setSuccess('User Login Successfully!!');
            navigate(`${location.state ? location.state : '/'}`);

        })
        .catch(error => {
            toast('Login failed!!' + 'User not found', error);
        })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then((result) => {
            setUser(result.user);
            navigate(`${location.state ? location.state : '/'}`);
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
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
                        <p className='text-green-400'>{success}</p>
                        <p className='text-red-400'>{passvali}</p>
                        <p className='text-start'>Forget Password?</p>
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Login
                        </button>
                        <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </form>

                    <p className="text-center text-gray-500 mt-4">
                        Don't have an account?{" "}
                        <Link to='/register' href="/signup" className="text-indigo-600 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;