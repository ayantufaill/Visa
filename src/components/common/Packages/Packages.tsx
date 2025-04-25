import React from 'react'
import { Fade } from 'react-awesome-reveal';

const Packages = () => {
    const visaPackages = [
        {
            title: "Normal Visa",
            description: "Processing time: 3 to 5 days",
            price: "$10",
            color: "bg-[#003A66]",
            extraDetails: [
                "Document verification included",
                "Pre-application assistance",
                "24/7 support"
            ]
        },
        {
            title: "Urgent Visa",
            description: "Processing time: 2 to 3 days",
            price: "$20",
            color: "bg-[#12A856]",
            extraDetails: [
                "Priority processing",
                "Guaranteed approval",
                "Express courier service"
            ]
        },
        {
            title: "Super Fast Visa",
            description: "Processing time: 1 to 2 days",
            price: "$30",
            color: "bg-[#003A66]",
            extraDetails: [
                "Same-day processing",
                "VIP support",
                "All-in-one service package"
            ]
        }
    ];

    return (
        <section id='packages' className="!px-6 sm:!px-10 lg:!px-20 !py-12">
            <Fade direction='down'>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#003A66]">
                    Choose Your Visa Package!
                </h2>
            </Fade>

            <div className="!mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {visaPackages.map((pkg, index) => (
                    <Fade key={index} direction='up'>
                        <div className='md:h-[400px]'>
                            <div className={`border-2 flex flex-col justify-between bg-gray-100 !p-6 rounded-md ${index == 1 ? "h-[100%] border-[#12A856]" : "md:h-[90%] lg:h-[85%] border-transparent"} hover:scale-105 transition-transform duration-300 ease-in-out`}>
                                <div>
                                    <div className="text-[#003A66] !mb-2  p-4 rounded-t-md !space-y-3">
                                        <h3 className="text-md md:text-xl font-semibold">{pkg.title}</h3>
                                        <p className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#003A66]">{pkg.price}</p>
                                        <p className="text-sm md:text-[16px] text-gray-700 mb-4">{pkg.description}</p>
                                    </div>
                                    <div className='w-full h-[1px] bg-gray-300' />
                                    {/* Extra details list */}
                                    <ul className="text-xs md:text-[16px] text-gray-700 !pt-4 !pl-4 !mb-4">
                                        {pkg.extraDetails.map((detail, index) => (
                                            <li key={index} className="list-disc">{detail}</li>
                                        ))}
                                    </ul>
                                </div>

                                <button className={`w-full h-10 text-white rounded-sm cursor-pointer ${pkg.color}`}>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </section>
    )
}

export default Packages;
