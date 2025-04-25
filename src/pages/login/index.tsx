import Link from 'next/link';
import React from 'react'

const index = () => {
    return (
        <section className='bg-gray-100'>
            <form className='w-full h-screen flex flex-col items-center justify-center -translate-y-20'>
                <div className="!mb-4 w-[250px]">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full group"
                        required
                    />
                </div>
                <div className="mb-4 w-[250px]">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full group"
                        required
                    />
                </div>
                <button className='!my-6 bg-[#12A856] text-white w-[250px] h-10 rounded-sm cursor-pointer hover:bg-[#12a856cf]'>
                    Login
                </button>
                <p className='text-[14px] text-gray-700'>
                    Don&apos;t have an account? <Link href={"/sign-up"}>
                        <span className='text-blue-600 hover:text-blue-800 underline'>Sign up</span>
                    </Link>
                </p>
            </form>
        </section>
    )
}

export default index;
