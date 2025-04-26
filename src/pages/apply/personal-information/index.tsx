import React, { useState, useEffect } from 'react';
import { getNames } from 'country-list';
import Pagination from '@/components/core/Pagination/Pagination';
import { FaChevronDown } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const PersonalInformation = () => {
    const router = useRouter();

    const [data, setData] = useState({
        name: "",
        email: "",
        contactNo: "",
    });

    const handleContinue = () => {
        if (data.name && data.email && data.contactNo) {
            localStorage.setItem("personalInfo", JSON.stringify(data));
            router.push("/apply/passport-details");
        } else {
            toast.error("Please fill all fields.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div className="!p-4 lg:!py-20 bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="w-full flex items-center justify-center">
                <Pagination defaultStep={1} />
            </div>

            {/* Name Input */}
            <div className="!my-4 w-[250px]">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full group"
                    value={data.name}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Email Input */}
            <div className="!mb-4 w-[250px]">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full group"
                    value={data.email}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Contact No Input */}
            <div className="!mb-4 w-[250px]">
                <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input
                    type="text"
                    id="contactNo"
                    name="contactNo"
                    placeholder="Enter your contact number"
                    className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full group"
                    value={data.contactNo}
                    onChange={handleChange}
                    required
                />
            </div>

            <button
                onClick={handleContinue}
                className='!my-6 bg-green-500 text-white w-[250px] h-10 rounded-sm cursor-pointer hover:bg-[#12a856cf]'>
                Continue to the next step
            </button>
        </div>
    );
};

export default PersonalInformation;
