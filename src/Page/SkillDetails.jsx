
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams, Link } from "react-router";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../Components/NavBar";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SkillDetails = () => {
    const { id } = useParams();
    const skills = useLoaderData();
    const [skill, setSkill] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        note: "",
    });

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    useEffect(() => {
        const selected = skills.find((s) => parseInt(s.skillId) === parseInt(id));
        setSkill(selected);
    }, [id, skills]);

    if (!skill) {
        return (
            <div className="text-center text-lg mt-20 text-gray-600 animate-pulse">
                Loading skill details...
            </div>
        );
    }

    const enrollmentData = [
        { month: "Jan", students: 40 },
        { month: "Feb", students: 55 },
        { month: "Mar", students: 60 },
        { month: "Apr", students: 75 },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        toast("Booking Successful!",{
            position: "top-center"
        });
        setFormData({ name: "", email: "", date: "", note: "" });
        setShowForm(false);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl px-5 md:px-10 sm:px-7">
                <NavBar></NavBar>
            </header>
            <section
                className="relative w-full h-[400px] flex flex-col items-center justify-center text-center text-white overflow-hidden"
                style={{
                    backgroundImage: `url(${skill.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                <div className="relative z-10" data-aos="zoom-in">
                    <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                        {skill.skillName}
                    </h1>
                    <p className="text-lg mt-2 font-light">
                        Taught by <span className="font-semibold">{skill.providerName}</span>
                    </p>
                </div>
            </section>

            {/* ✅ Main Content */}
            <main className="flex-grow py-12 px-6 md:px-20">
                <div
                    className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10"
                    data-aos="fade-up"
                >
                    {/* Skill Info */}
                    <div className="flex-1 space-y-5">
                        <h2 className="text-3xl font-semibold text-gray-900">{skill.skillName}</h2>
                        <p className="text-gray-700 leading-relaxed">{skill.description}</p>

                        <div className="flex items-center flex-wrap gap-5 mt-6">
                            <p className="text-lg text-indigo-600 font-semibold">💰 ${skill.price}</p>
                            <p className="text-lg text-yellow-500 font-semibold">⭐ {skill.rating}</p>
                            <p className="text-lg text-gray-600 font-semibold">🪑 {skill.slotsAvailable} slots</p>
                            <p className="text-lg text-gray-600 font-semibold">📧 {skill.providerEmail}</p>
                        </div>

                        <div className="mt-8 flex gap-4">
                            {!showForm ? (
                                <button
                                    onClick={() => setShowForm(true)}
                                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition shadow-md"
                                >
                                    Book This Skill
                                </button>
                            ) : (
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition shadow-sm"
                                >
                                    Cancel
                                </button>
                            )}

                            <Link
                                to="/"
                                className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition shadow-sm"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>

                    {/* Analytics Chart */}
                    <div className="flex-1" data-aos="zoom-in">
                        <h3 className="text-xl font-semibold mb-3 text-gray-700">Enrollment Trends</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart
                                data={enrollmentData}
                                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="students"
                                    stroke="#6366F1"
                                    strokeWidth={3}
                                    dot={{ r: 5 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* ✅ Booking Form */}
                {showForm && (
                    <div
                        data-aos="fade-up"
                        className="max-w-2xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                            Book Your Session
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-gray-600 font-semibold mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-600 font-semibold mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-transform hover:scale-[1.02]"
                            >
                                Confirm Booking
                            </button>
                        </form>
                    </div>
                )}
            </main>
            <ToastContainer/>   
        </div>
    );
};

export default SkillDetails;
