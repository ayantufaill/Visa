import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { FaChevronDown } from 'react-icons/fa';

interface PassportDetailsProps {
    setStepNo: (nextStep: number) => void;
}

const PassportDetails: React.FC<PassportDetailsProps> = ({ setStepNo }) => {
    const router = useRouter();

    const [data, setData] = useState({
        passportNo: "",
        visaType: "default",
        alreadyApplied: "default", // "yes" or "no"
        trackingNumber: "",
    });

    const [openId, setOpenId] = useState<number>(-1);

    const handleContinue = () => {
        if (data.passportNo && data.visaType !== "default" && data.alreadyApplied !== "default") {
            if (data.alreadyApplied === "yes" && !data.trackingNumber) {
                toast.error("Please enter your tracking number.");
                return;
            }
            localStorage.setItem("passportDetails", JSON.stringify(data));
            // router.push("/apply/payment");
            setStepNo(3);
        } else {
            toast.error("Please fill all fields.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (

        <div className="flex flex-col items-center !mt-4 gap-4">
            {/* Passport Number */}
            <div className="relative w-[250px]">
                <label htmlFor="passportNo" className="block text-sm font-medium text-gray-700">
                    Passport Number
                </label>
                <input
                    type="text"
                    id="passportNo"
                    name="passportNo"
                    placeholder="Enter your passport number"
                    value={data.passportNo}
                    onChange={handleChange}
                    className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full"
                />
            </div>

            {/* Visa Type */}
            <div className="relative w-[250px]">
                <label htmlFor="visaType" className="block text-sm font-medium text-gray-700">
                    Visa Type
                </label>

                <select
                    value={data.visaType}
                    onChange={handleChange}
                    id="visaType"
                    name="visaType"
                    onClick={() => openId === 0 ? setOpenId(-1) : setOpenId(0)}
                    onBlur={() => setOpenId(-1)}
                    className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full appearance-none"
                >
                    <option disabled value="default">Select Visa Type</option>
                    <option value="work">Work</option>
                    <option value="travel">Travel</option>
                    <option value="business">Business</option>
                    <option value="vpa">VPA</option>
                </select>

                <div className="pointer-events-none absolute top-9 right-3 flex items-center">
                    <FaChevronDown
                        className={`text-gray-600 h-4 w-4 transform transition-transform duration-300 ${openId === 0 ? "rotate-180" : "rotate-0"}`}
                    />
                </div>
            </div>

            {/* Already Applied? (Select) */}
            <div className="relative w-[250px]">
                <label htmlFor="alreadyApplied" className="block text-sm font-medium text-gray-700">
                    Already Applied?
                </label>

                <select
                    value={data.alreadyApplied}
                    onChange={handleChange}
                    id="alreadyApplied"
                    name="alreadyApplied"
                    className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full appearance-none"
                >
                    <option disabled value="default">Select Option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            {/* Tracking Number (only if already applied is Yes) */}
            {data.alreadyApplied === "yes" && (
                <div className="relative w-[250px]">
                    <label htmlFor="trackingNumber" className="block text-sm font-medium text-gray-700">
                        Tracking Number
                    </label>
                    <input
                        type="text"
                        id="trackingNumber"
                        name="trackingNumber"
                        placeholder="Enter your tracking number"
                        value={data.trackingNumber}
                        onChange={handleChange}
                        className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full"
                    />
                </div>
            )}

            <button
                onClick={handleContinue}
                className='!my-6 bg-green-500 text-white w-[250px] h-10 rounded-sm cursor-pointer hover:bg-[#12a856cf]'
            >
                Continue to the next step
            </button>
        </div>
    );
};

export default PassportDetails;
