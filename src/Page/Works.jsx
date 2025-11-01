import React from "react";
import { FaUserPlus, FaSearch, FaCalendarCheck, FaComments } from "react-icons/fa";

const Works = () => {
    // How It Works steps relevant to SkillSwap
    const steps = [
        {
            id: 1,
            icon: <FaUserPlus />,
            title: "Sign Up",
            description: "Create a free account to join SkillSwap and start sharing or learning skills.",
        },
        {
            id: 2,
            icon: <FaSearch />,
            title: "Browse Skills",
            description: "Explore available skills in your local area or search for specific topics you want to learn.",
        },
        {
            id: 3,
            icon: <FaCalendarCheck />,
            title: "Book a Session",
            description: "Select a provider and book a session at a convenient time for both of you.",
        },
        {
            id: 4,
            icon: <FaComments />,
            title: "Connect & Learn",
            description: "Communicate with providers, join sessions, and start learning or trading skills effectively.",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                        data-aos="fade-up"
                    >
                        <div className="text-blue-500 mb-4 text-5xl">{step.icon}</div>
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-gray-700 text-sm">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;
