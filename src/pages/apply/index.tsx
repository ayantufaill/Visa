import React, { useEffect, useState } from 'react'
import Pagination from '@/components/core/Pagination/Pagination';
import CountryList from '@/components/common/ApplyForm/CountryList';
import PersonalInformation from '@/components/common/ApplyForm/PersonalInformation';
import PassportDetails from '@/components/common/ApplyForm/PassportDetails';
import Payment from '@/components/common/ApplyForm/Payment';

const ApplyForm = () => {
    const [stepNo, setStepNo] = useState(0);

    useEffect(() => {
        setStepNo(JSON.parse(localStorage.getItem("stepNo") || "0"))
    }, [])

    useEffect(() => {
        localStorage.setItem("stepNo", JSON.stringify(stepNo));
    }, [stepNo])

    return (
        <div className='!p-4 lg:!py-20 bg-gray-100 min-h-screen flex flex-col items-center'>
            <div className="w-full flex items-center justify-center">
                <Pagination defaultStep={stepNo} />
            </div>
            {stepNo == 0 && <CountryList setStepNo={setStepNo} />}
            {stepNo == 1 && <PersonalInformation setStepNo={setStepNo} />}
            {stepNo == 2 && <PassportDetails setStepNo={setStepNo} />}
            {stepNo == 3 && <Payment />}
        </div>
    )
}

export default ApplyForm;
