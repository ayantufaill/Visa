import React, { useState, useEffect } from 'react';
import { getNames } from 'country-list';
import Pagination from '@/components/core/Pagination/Pagination';
import { FaChevronDown } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

interface CountryListProps {
    setStepNo: (nextStep: number) => void;
}

const CountryList: React.FC<CountryListProps> = ({ setStepNo }) => {
    const router = useRouter();
    const [countries, setCountries] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [openId, setOpenId] = useState<number>(-1);

    const [data, setData] = useState({
        country: "default",
        nationality: "default"
    })

    useEffect(() => {
        const countryNames = getNames();
        setCountries(countryNames);
        setLoading(false);
    }, []);

    const handleContinue = () => {
        if (data.country != "default" && data.nationality != "default") {
            // router.push("/apply/personal-information");
            setStepNo(1);
            localStorage.setItem("countryInfo", JSON.stringify(data));
        }
        else {
            toast.error("Please fill All fields.");
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <>
            {!loading && (
                <div className="flex flex-col items-center !mt-4 gap-4">
                    {/* Country Select */}
                    <div className="relative w-[250px]">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                            Country
                        </label>

                        <select
                            value={data.country}
                            onChange={handleChange}
                            id="country"
                            name='country'
                            onClick={() => openId === 0 ? setOpenId(-1) : setOpenId(0)}
                            onBlur={() => setOpenId(-1)}
                            className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full appearance-none"
                        >
                            <option disabled value={"default"}>
                                Country of stay
                            </option>
                            {countries.map((country, index) => (
                                <option
                                    key={index}
                                    className="bg-gray-100 text-gray-600"
                                    value={country}
                                >
                                    {country}
                                </option>
                            ))}
                        </select>

                        <div className="pointer-events-none absolute top-9 right-3 flex items-center">
                            <FaChevronDown
                                className={`text-gray-600 h-4 w-4 transform transition-transform duration-300 ${openId === 0 ? "rotate-180" : "rotate-0"}`}
                            />
                        </div>
                    </div>

                    {/* Nationality Select */}
                    <div className="relative w-[250px]">
                        <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
                            Nationality
                        </label>

                        <select
                            value={data.nationality}
                            onChange={handleChange}
                            id="nationality"
                            name='nationality'
                            onClick={() => openId === 1 ? setOpenId(-1) : setOpenId(1)}
                            onBlur={() => setOpenId(-1)}
                            className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full appearance-none"
                        >
                            <option disabled value={"default"}>
                                Select your nationality!
                            </option>
                            {countries.map((country, index) => (
                                <option
                                    key={index}
                                    className="bg-gray-100 text-gray-600"
                                    value={country}
                                >
                                    {country}
                                </option>
                            ))}
                        </select>

                        <div className="pointer-events-none absolute top-9 right-3 flex items-center">
                            <FaChevronDown
                                className={`text-gray-600 h-4 w-4 transform transition-transform duration-300 ${openId === 1 ? "rotate-180" : "rotate-0"}`}
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleContinue}
                        className='!my-6 bg-green-500 text-white w-[250px] h-10 rounded-sm cursor-pointer hover:bg-[#12a856cf]'>
                        Continue to the next step
                    </button>
                </div>
            )}
        </>
    );
};

export default CountryList;
