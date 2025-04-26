import VisaOpened from '@/components/common/VisaOpened/VisaOpened';
import React from 'react'

const index = () => {
    const vpaVisa = {
        title: "VPA Visa (Visa on Arrival)",
        description: "Special facility allowing businessmen and travelers to get visa on arrival with prior approval.",
        details: "The VPA (Visa on Arrival) is designed for business travelers who have obtained pre-approval from Pakistani immigration authorities. You must carry an invitation letter from a Pakistani business and approval documents to be eligible.",
        image: "/images/vpa-visa.png",
        steps: [
            "Get an official invitation from a Pakistani business",
            "Apply for pre-approval clearance online",
            "Carry pre-approval and invitation letter while traveling",
            "Present documents at Pakistani immigration counter",
            "Get visa stamped on arrival"
        ],
        time: "Estimated Processing Time: 3–5 Business Days (for pre-approval)",
        prices: [
            { plan: "Standard Processing", price: "$25" },
            { plan: "Express Processing", price: "$35" },
            { plan: "Urgent Processing", price: "$50" }
        ]
    };

    return (
        <div>
            <VisaOpened data={vpaVisa} />
        </div>
    )
}

export default index;
