import React, { use, useRef } from 'react';
import NavBar from '../Components/NavBar';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ForgetPassword = () => {
    const { resetPassword } = use(AuthContext);
    const emailRef = useRef();
    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        resetPassword(email)
            .then(() => {
                toast('Check Your Email_ _?')
                e.target.reset()
            })
            .catch((error) => {
                if (error.code === 'auth/user-not-found') {
                    toast.error('No account found with this email');
                } else if (error.code === 'auth/invalid-email') {
                    toast.error('Invalid email address');
                } else {
                    toast.error('Failed to send reset email. Please try again.');
                }
            });
    }
    return (
        <div>
            <div className='fixed top-0 left-0 w-full z-50 backdrop-blur-2xl px-5 md:px-10 sm:px-7'>
                <NavBar></NavBar>
            </div>
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-full max-w-sm border border-gray-200">
                    <h2 className="text-2xl font-bold text-center text-primary mb-6">Forgot Password?</h2>
                    <p className="text-center text-gray-600 mb-6">
                        Enter your email address and we’ll send you a link to reset your password.
                    </p>

                    <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                            ref={emailRef}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your registered email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                                required
                            />
                        </div>

                        {/* Reset Button */}
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-lg"
                        >
                            Reset Password
                        </button>

                        <p className="text-sm text-center text-gray-500 mt-4">
                            Remembered your password?{' '}
                            <Link to="/login" className="text-primary font-semibold hover:underline">
                                Go back to Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <ToastContainer/>  
        </div>
    );
};

export default ForgetPassword;