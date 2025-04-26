import ProfileSummaryCard from '@/components/common/ProfileSummaryCard/ProfileSummaryCard';
import Pagination from '@/components/core/Pagination/Pagination';
import React, { useState } from 'react'

const Payment = () => {
    const [loading, setLoading] = useState(true);
    return (
        <div className="!p-4 lg:!py-20 bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="w-full flex items-center justify-center">
                <Pagination defaultStep={3} />
            </div>
            <ProfileSummaryCard loading={loading} setLoading={setLoading} />
        </div>
    )
}

export default Payment;
