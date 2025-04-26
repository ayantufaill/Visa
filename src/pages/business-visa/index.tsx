import VisaOpened from '@/components/common/VisaOpened/VisaOpened';
import React from 'react'

const index = () => {
    const businessVisa = {
        title: "Business Visa",
        description: "Facilitates business professionals to attend meetings, conferences, or explore partnerships in Pakistan.",
        details: "A business visa allows individuals to travel for business-related activities such as meetings, conferences, or partnership exploration. You may need a letter from the host company, an invitation letter, and financial documents.",
        image: "/images/business-visa.png",
        steps: [
            "Fill out the business visa form",
            "Letter of invitation from Pakistani business entity",
            "Submit your valid passport and photographs",
            "Proof of business registration (your company)",
            "Financial and tax documents"
        ],
        time: "Estimated Processing Time: 4–6 Business Days",
        prices: [
            { plan: "Standard Processing", price: "$15" },
            { plan: "Express Processing", price: "$25" },
            { plan: "Urgent Processing", price: "$35" }
        ]
    };

    return (
        <div>
            <VisaOpened data={businessVisa} />
        </div>
    )
}

export default index;
