import VisaOpened from '@/components/common/VisaOpened/VisaOpened';
import React from 'react'

const index = () => {
    const travelVisa = {
        title: "Travel Visa",
        description: "Travel visa permits temporary travel for tourism or business purposes.",
        details: "A travel visa typically lasts for a short duration and is ideal for tourists or business people visiting Pakistan. Requirements may include a valid passport, photographs, and supporting documents for the purpose of the visit.",
        image: "/images/travel-visa.jpg",
        steps: [
            "Fill out the visa application form",
            "Provide passport-size photographs",
            "Submit your valid passport",
            "Show proof of accommodation and travel plans",
            "Pay the visa fee"
        ],
        time: "Estimated Processing Time: 5–7 Business Days",
        prices: [
            { plan: "Standard Processing", price: "$10" },
            { plan: "Express Processing", price: "$20" },
            { plan: "Urgent Processing", price: "$30" }
        ]
    };

    return (
        <div className="p-6">
            <VisaOpened data={travelVisa} />
        </div>
    );
}

export default index;
