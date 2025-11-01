import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="w-full bg-primary text-primary-content mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-8">
                    
                    {/* About Section */}
                    <div className="space-y-3 text-sm">
                        <h3 className="text-2xl font-bold mb-3">SkillSwap</h3>
                        <p className="opacity-90 leading-relaxed">
                            Connect with local skill providers and learners. Exchange knowledge, build community, and grow together.
                        </p>
                        <p className="opacity-75 text-xs">
                            © {new Date().getFullYear()} SkillSwap. All rights reserved.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3 text-sm">
                        <h3 className="font-bold text-lg mb-3">Contact Us</h3>
                        <p>📧 Email: support@skillswap.com</p>
                        <p>📞 Phone: +1 (555) 123-4567</p>
                        <p>📍 Address: 123 Learning Lane, Knowledge City, KC 12345</p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3 text-sm">
                        <h3 className="font-bold text-lg mb-3">Quick Links</h3>
                        <div className="flex flex-col space-y-2">
                            <Link to="/" className="opacity-90 hover:opacity-100 hover:underline transition-all">
                                Home
                            </Link>
                            <Link to="/profile" className="opacity-90 hover:opacity-100 hover:underline transition-all">
                                My Profile
                            </Link>
                            <a href="#privacy" className="opacity-90 hover:opacity-100 hover:underline transition-all">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="opacity-90 hover:opacity-100 hover:underline transition-all">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-primary-content/30 pt-5 flex flex-col md:flex-row items-center justify-between text-sm opacity-80 gap-4">
                    <p className="text-center md:text-left">
                        Made for the learning community
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-5">
                        {/* Twitter */}
                        <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform" 
                            aria-label="Twitter"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-current">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a 
                            href="https://youtube.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform" 
                            aria-label="YouTube"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-current">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        {/* Facebook */}
                        <a 
                            href="https://facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform" 
                            aria-label="Facebook"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-current">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform" 
                            aria-label="LinkedIn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-current">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
