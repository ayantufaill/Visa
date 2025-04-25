import { useRouter } from 'next/router';
import React from 'react'

const Header = () => {

    const router = useRouter();

    return (
        <header className='bg-white'>

            <div className="h-16 !px-4 sm:!px-8 md:!px-16 py-4 shadow-xs flex justify-between items-center">
                <h1 className="text-[#003A66] text-xl lg:text-3xl font-semibold">
                    VisaFast
                </h1>

                <button onClick={() => router.push("/login")} className="cursor-pointer relative text-sm md:text-[16px] h-8 sm:h-8 lg:h-10 w-16 sm:20 lg:w-28 overflow-hidden border border-gray-800 text-gray-800 group">
                    <span className="absolute inset-0 bg-[#d63384] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">Login</span>
                </button>
            </div>

        </header>
    )
}

export default Header; 
