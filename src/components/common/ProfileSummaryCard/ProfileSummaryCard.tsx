import React, { useEffect, useState } from 'react';

interface ProfileProps {
    loading: boolean;
    setLoading: (newValue: boolean) => void;
    // setStepNo: ()
}

const ProfileSummaryCard: React.FC<ProfileProps> = ({ loading, setLoading }) => {

    const [data, setData] = useState<any>();

    useEffect(() => {
        const personalInfo = JSON.parse(localStorage.getItem("personalInfo") || "{}");
        const passportDetails = JSON.parse(localStorage.getItem("passportDetails") || "{}");
        const packageDetails = JSON.parse(localStorage.getItem("package") || "{}");
        const countryInfo = JSON.parse(localStorage.getItem("countryInfo") || "{}");
        if (personalInfo && passportDetails && countryInfo && packageDetails) {
            setData({ ...passportDetails, ...personalInfo, ...countryInfo, ...packageDetails });
            setLoading(false);
        }
    }, [])

    return (
        <>
            {
                !loading ? <div className="bg-white shadow-lg rounded-lg !p-6 !mt-8">
                    {/* Package Info */}
                    <div className="text-center !mb-6">
                        <p className="text-gray-700 font-semibold tsxt-sm lg:text-xl">{data?.title || "N/A"}</p>
                        <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#003A66]">{data?.price || "N/A"}</h3>
                    </div>

                    <div className="!space-y-4">
                        {/* Name */}
                        <div className="flex justify-between items-center !gap-10">
                            <span className="text-gray-600 font-medium">Name:</span>
                            <span className="text-gray-800 font-semibold">{data?.name || "N/A"}</span>
                        </div>

                        {/* Passport Number */}
                        <div className="flex justify-between items-center !gap-10">
                            <span className="text-gray-600 font-medium">Passport Number:</span>
                            <span className="text-gray-800 font-semibold">{data?.passportNo || "N/A"}</span>
                        </div>

                        {/* Visa Type */}
                        <div className="flex justify-between items-center !gap-10">
                            <span className="text-gray-600 font-medium">Visa Type:</span>
                            <span className="text-gray-800 font-semibold">{data?.visaType || "N/A"}</span>
                        </div>

                        {/* Country */}
                        <div className="flex justify-between items-center !gap-10">
                            <span className="text-gray-600 font-medium">Country:</span>
                            <span className="text-gray-800 font-semibold">{data?.country || "N/A"}</span>
                        </div>

                        {/* Nationality */}
                        <div className="flex justify-between items-center !gap-10">
                            <span className="text-gray-600 font-medium">Nationality:</span>
                            <span className="text-gray-800 font-semibold">{data?.nationality || "N/A"}</span>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="!mt-6 flex justify-center">
                        <button
                            onClick={() => {
                                console.log("Proceed to payment. ");
                            }}
                            className="cursor-pointer !px-6 !py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                            Proceed to Payment
                        </button>
                    </div>
                </div> : <ProfileSummaryShimmer />
            }
        </>
    );
};

export default ProfileSummaryCard;

const ProfileSummaryShimmer = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg !p-6 !mt-8 animate-pulse">
            {/* Package Info */}
            <div className="flex flex-col items-center justify-center !mb-6 !space-y-2">
                <div className="h-4 w-32 bg-gray-300 rounded mx-auto" />
                <div className="h-10 w-40 bg-gray-300 rounded mx-auto" />
            </div>

            {/* Fields */}
            <div className="!space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex justify-between items-center gap-10">
                        <div className="h-4 w-24 bg-gray-300 rounded" />
                        <div className="h-4 w-32 bg-gray-300 rounded" />
                    </div>
                ))}
            </div>

            {/* Button */}
            <div className="!mt-6 flex justify-center">
                <div className="h-10 w-40 bg-gray-300 rounded" />
            </div>
        </div>
    );
};