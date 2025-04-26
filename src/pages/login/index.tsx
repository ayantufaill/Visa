import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const Login = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.email && formData.password) {
            // toast.success('Login successful!');
            router.push('/');
        } else {
            toast.error('Please fill all fields');
        }
    };

    return (
        <section className='bg-gray-100'>
            <form onSubmit={handleLogin} className='w-full h-screen flex flex-col items-center justify-center -translate-y-20'>
                {/* Email Input */}
                <div className="!mb-4 w-[250px]">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full group"
                        required
                    />
                </div>

                {/* Password Input */}
                <div className="mb-4 w-[250px]">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="bg-white !mt-1 !p-2 border-[1px] border-gray-400 rounded-sm focus:outline-none w-full group"
                        required
                    />
                </div>

                {/* Login Button */}
                <button type="submit" className='!my-6 bg-green-500 text-white w-[250px] h-10 rounded-sm cursor-pointer hover:bg-[#12a856cf]'>
                    Login
                </button>

                {/* Link to Sign Up Page */}
                <p className='text-[14px] text-gray-700'>
                    Don&apos;t have an account? <Link href={"/sign-up"}>
                        <span className='text-blue-600 hover:text-blue-800 underline'>Sign up</span>
                    </Link>
                </p>
            </form>
        </section>
    );
}

export default Login;
