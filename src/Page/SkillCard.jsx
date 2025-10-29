// SkillCard.jsx
import React from "react";
import 'animate.css';
import { NavLink } from "react-router";

const SkillCard = ({ skill }) => {
    return (
        <div className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col" data-aos='zoom-in' data-aos-delay="200">
            {/* Image */}
            <img
                src={skill.image}
                alt={skill.skillName}
                className="h-48 w-full object-cover"
            />

            {/* Card Content */}
            <div className="p-4 flex flex-col flex-grow">
                {/* Skill Name */}
                <h2 className="animate__animated animate-pulse text-xl font-semibold mb-2">{skill.skillName}</h2>

                {/* Rating and Price */}
                <div className="flex items-center justify-between mb-4">
                    {/* Rating */}
                    <div className="flex items-center">
                        <span className="flex text-yellow-400 mr-2">
                            {Array.from({ length: Math.floor(skill.rating) }).map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-4 h-4 fill-current"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                                </svg>
                            ))}
                        </span>
                        <span className="text-gray-600">{skill.rating.toFixed(1)}</span>
                    </div>

                    {/* Price */}
                    <p className="text-gray-700 font-bold text-xl">${skill.price}</p>
                </div>

                {/* View Details Button */}
                <NavLink to={`/skillDetails/${skill.skillId}`} className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    View Details
                </NavLink>
            </div>
        </div>
    );
};

export default SkillCard;
