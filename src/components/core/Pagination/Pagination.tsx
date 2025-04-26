import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaGlobe, FaUserAlt, FaPassport, FaCreditCard } from 'react-icons/fa';

interface Props {
    defaultStep: number;
}

const Pagination: React.FC<Props> = ({ defaultStep }) => {
    const router = useRouter();

    const [selectedStep, setSelectedStep] = useState<number>(-1);

    const steps = [
        { label: 'Country/Region', icon: FaGlobe },
        { label: 'Personal\nInformation', icon: FaUserAlt },
        { label: 'Passport Details', icon: FaPassport },
        { label: 'Payment', icon: FaCreditCard },
    ];

    useEffect(() => {
        setSelectedStep(defaultStep);
    }, [])

    return (
        <div className="relative max-w-[400px] z-1000">
            <div className="flex items-start justify-between !gap-8">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isCompletedOrSelected = index <= selectedStep;
                    return (
                        <div key={index} className="flex flex-col items-center">
                            <div
                                className={`w-10 h-10 flex items-center justify-center cursor-pointer ${isCompletedOrSelected ? 'bg-green-500' : 'bg-gray-300'
                                    } transition-all ease-in-out duration-300 rounded-sm`}
                            >
                                <Icon color={isCompletedOrSelected ? "white" : "black"} />
                            </div>
                            <p className="text-gray-500 text-xs !mt-2 whitespace-break-spaces text-center">{step.label}</p>
                        </div>
                    )
                })}
            </div>
            <div className="absolute top-5 left-8 w-[90%] h-[2px] bg-gray-300 -z-10" />
        </div>
    );
};

export default Pagination;
