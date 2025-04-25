import React from 'react'
import VisaCard from '../VisaCard/VisaCard';

const VisaDetails = () => {

    const visaTypes = [
        {
            title: "Travel Visa",
            description: "Travel visa permits temporary travel for tourism or business purposes.",
            image: "/images/travel-visa.jpg",
            link: "/travel-visa"
        },
        {
            title: "Work Visa",
            description: "Work visa allows individuals to take up employment in Pakistan for specified period.",
            image: "/images/work-visa.jpg",
            link: "/work-visa"
        },
        {
            title: "Business Visa",
            description: "Business visa permits temporary travel for business activities, including meetings and conferences.",
            image: "/images/business-visa.png",
            link: "/business-visa"
        },
        {
            title: "VPA Visa",
            description: "VPA visa is for short-term visits, allowing entry for tourism or temporary business engagements.",
            image: "/images/vpa-visa.png",
            link: "/vpa-visa"
        }
    ];

    return (
        <section className='bg-gray-100 !p-4 md:!pl-8 lg:!p-20'>
            <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold max-w-[400px] text-[#003A66] !mb-6'>
                Types of visas:
            </h3>
            <div className='grid grid-cold-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3'>
                {
                    visaTypes.map((type, index) => <VisaCard
                        key={index}
                        title={type.title}
                        description={type.description}
                        href={type.link}
                        image={type.image}
                    />
                    )
                }
            </div>
        </section>
    )
}

export default VisaDetails;
