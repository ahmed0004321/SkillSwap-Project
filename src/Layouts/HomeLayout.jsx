import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Loading from '../Components/Loading';



const HomeLayout = () => {
    const { state } = useNavigation();
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 50,
        });
    }, []);
    return (
        <div>
            <header>
                <div className="relative w-full">
                    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl">
                        <div className="max-w-[1340px] mx-auto px-5 md:px-10 sm:px-7">
                            <NavBar />
                        </div>
                    </nav>
                    <div className="h-[80px]"></div>
                </div>
                <div className="my-3" data-aos="zoom-in" data-aos-delay="200">
                    <Banner />
                </div>
            </header>
            <main className="md:px-20 w-full">
                <div className="max-w-[1340px] mx-auto px-4 py-8">
                    {
                        state == 'loading' ? <Loading></Loading> : <Outlet />
                    }
                </div>
            </main>
            <footer className=''>
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayout;