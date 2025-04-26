import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const SignUp = () => {
    const router = useRouter();
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        if (data.name && data.email && data.phone && data.password) {
            router.push('/');
        } else {
            toast.error('Please fill all fields');
        }
    };

    return (
        <section className='bg-gray-100'>
            <form onSubmit={handleSignUp} className='w-full h-screen flex flex-col items-center justify-center -translate-y-20'>
                <div className="!mb-4 w-[250px]">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={data.name}
                        onChange={handleChange}
                        className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full"
                        required
                    />
                </div>
                <div className="!mb-4 w-[250px]">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={data.email}
                        onChange={handleChange}
                        className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full"
                        required
                    />
                </div>
                <div className="!mb-4 w-[250px]">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={data.phone}
                        onChange={handleChange}
                        className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full"
                        required
                    />
                </div>
                <div className="!mb-4 w-[250px]">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={data.password}
                        onChange={handleChange}
                        className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full"
                        required
                    />
                </div>
                <button type="submit" className='!my-6 bg-green-500 text-white w-[250px] h-10 rounded-sm cursor-pointer hover:bg-[#12a856cf]'>
                    Sign Up
                </button>
                <p className='text-[14px] text-gray-700'>
                    Already have an account? <Link href={"/login"}>
                        <span className='text-blue-600 hover:text-blue-800 underline'>Login</span>
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default SignUp;
