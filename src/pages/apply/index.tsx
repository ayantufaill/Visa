import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const index = () => {

    const router = useRouter();

    useEffect(() => {
        router.push("/apply/country")
    }, [])

    return (
        <div>
        </div>
    )
}

export default index;
