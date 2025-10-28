import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomeLayout = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,     // animate only once
      offset: 50,     // offset (px) from top to trigger
    });
    }, []);
    return (
        <div className="min-h-screen flex flex-col bg-base-100">
            {/* Header */}
            <header>
                <div className="max-w-[1340px] mx-auto px-4">
                    <nav className='h-fit sticky top-0 z-50 left-0 py-5' data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="1500">
                        <NavBar />
                    </nav>
                    <div className='my-3' data-aos='zoom-in' data-aos-delay="200">
                        <Banner></Banner>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow w-full">
                <div className="max-w-[1340px] mx-auto px-4 py-8">
                    <Outlet />
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full mt-auto">
                <div className="max-w-[1340px] mx-auto px-4 py-6">
                    <Footer />
                </div>
            </footer>
        </div>
    );
};

export default HomeLayout;