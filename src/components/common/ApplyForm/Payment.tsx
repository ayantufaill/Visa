import React, { useState } from 'react'
import ProfileSummaryCard from '../ProfileSummaryCard/ProfileSummaryCard';

const Payment: React.FC = () => {
    const [loading, setLoading] = useState(true);
    return (
        <div>
            <ProfileSummaryCard loading={loading} setLoading={setLoading} />
        </div>
    )
}

export default Payment;
