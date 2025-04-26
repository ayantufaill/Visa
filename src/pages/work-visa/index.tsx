import VisaOpened from '@/components/common/VisaOpened/VisaOpened';
import React from 'react'

const index = () => {
    const workVisa = {
        title: "Work Visa",
        description: "For professionals hired by Pakistani companies seeking employment opportunities in Pakistan.",
        details: "Work visas are issued to foreign nationals employed in Pakistan. Requirements generally include a confirmed job offer, employment letter, and authorization from the relevant government departments.",
        image: "/images/work-visa.jpg",
        steps: [
            "Secure a confirmed job offer from a Pakistani company",
            "Collect an official employment letter",
            "Employer applies for government clearance",
            "Submit passport, photos, and clearance documents",
            "Pay the work visa application fee"
        ],
        time: "Estimated Processing Time: 7–10 Business Days",
        prices: [
            { plan: "Standard Processing", price: "$20" },
            { plan: "Express Processing", price: "$30" },
            { plan: "Urgent Processing", price: "$40" }
        ]
    };

    return (
        <div>
            <VisaOpened data={workVisa} />
        </div>
    )
}

export default index;
