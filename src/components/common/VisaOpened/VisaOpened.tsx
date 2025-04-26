import React from 'react';
import dynamic from 'next/dynamic';
import { FaCheckCircle, FaFileAlt, FaMapMarkerAlt, FaDownload, FaCalendarAlt, FaFileUpload, FaUserAlt, FaHourglassHalf, FaPassport } from 'react-icons/fa';
import Pagination from '@/components/core/Pagination/Pagination';
const Fade = dynamic(() => import('react-awesome-reveal').then(mod => mod.Fade), { ssr: false });

interface VisaOpenedProps {
    data: {
        title: string;
        description: string;
        details: string;
        image: string;
        steps: string[];
        time: string;
        prices: { plan: string; price: string }[];
    };
}

const icons = [
    <FaCheckCircle className="text-blue-600" size={48} />,
    <FaFileAlt className="text-blue-600" size={48} />,
    <FaMapMarkerAlt className="text-blue-600" size={48} />,
    <FaDownload className="text-blue-600" size={48} />,
    <FaCalendarAlt className="text-blue-600" size={48} />,
    <FaFileUpload className="text-blue-600" size={48} />,
    <FaUserAlt className="text-blue-600" size={48} />,
    <FaHourglassHalf className="text-blue-600" size={48} />,
    <FaPassport className="text-blue-600" size={48} />
];

const VisaOpened: React.FC<VisaOpenedProps> = ({ data }) => {
    return (
        <div className="bg-gray-100 min-h-screen rounded-md shadow-lg !p-6 md:!p-12">
            <Fade>
                <h1 className="text-3xl md:text-4xl font-bold text-[#003A66] text-center mb-6">
                    Step by step process to Apply for {data.title}:
                </h1>
            </Fade>

            <Fade direction='down'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center md:items-start !mt-10">
                    {data.steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center p-4">
                            <div className="flex-shrink-0 flex relative">
                                <h3 className="absolute top-6 -left-5 z-100 text-[#003A66] text-6xl font-bold">
                                    {index + 1}
                                </h3>
                                <h3 className="text-gray-100 absolute top-4 -left-5 text-7xl font-bold">
                                    {index + 1}
                                </h3>
                                {(index === 2 || index === 4) && <div className='absolute top-12 -left-3 bg-gray-100 w-5 h-5 z-20' />}
                                <div className="bg-amber-400 w-30 h-30 flex flex-col items-center justify-center rounded-full">
                                    <div className="mb-2">
                                        {icons[index % icons.length]}
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 text-sm max-w-[180px]">{step}</p>
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    );
}

export default VisaOpened;
