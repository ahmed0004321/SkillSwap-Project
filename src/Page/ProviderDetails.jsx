import React from 'react';

const ProviderDetails = ({ prov }) => {
    console.log(prov);
    return (
        <div className="mx-6 flex flex-col items-center text-center" data-aos='zoom-in' data-aos-delay="200">
            {/* Circular Image */}
            <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
                <img
                    src={prov.profileImage}
                    alt={prov.providerName}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Name */}
            <h3 className="text-base font-semibold text-gray-800">
                {prov.providerName}
            </h3>

            {/* Skills */}
            <p className="text-gray-500 text-xs mt-1">
                {prov.topSkills.join(", ")}
            </p>

            {/* Rating */}
            <p className="text-yellow-500 text-sm mt-1">
                {"⭐".repeat(Math.floor(prov.rating))}{" "}
                <span className="text-gray-600">({prov.rating.toFixed(1)})</span>
            </p>
        </div>
    );
};

export default ProviderDetails;