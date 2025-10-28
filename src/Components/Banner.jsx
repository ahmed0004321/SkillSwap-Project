// Banner.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
    const slides = [
        {
            img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1400&q=80", // collaborative learning
            title: "Exchange Your Skills, Expand Your World",
            text: "Teach what you know, learn what you love — all in your local community.",
        },
        {
            img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80", // guitar lesson
            title: "Learn from Real People, Not Just Screens",
            text: "From guitar to graphic design, connect with skilled locals near you.",
        },
        {
            img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1400&q=80", // cooking class
            title: "Trade Skills, Build Friendships",
            text: "Join SkillSwap — where knowledge and community grow together.",
        },
        {
            img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80", // casual learning meetup
            title: "Connect Locally",
            text: "Meet, share, and grow with a vibrant skill-sharing community.",
        },
    ];

    return (
        <div className="w-full h-[85vh] relative">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation
                loop={true}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-full bg-center bg-cover"
                            style={{ backgroundImage: `url(${slide.img})` }}
                        >
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

                            {/* Text Content */}
                            <div className="absolute inset-0 flex flex-col justify-center pl-6 md:pl-24 text-white space-y-4">
                                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl max-w-xl opacity-90">
                                    {slide.text}
                                </p>
                                <button className="btn btn-primary w-fit mt-4">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
