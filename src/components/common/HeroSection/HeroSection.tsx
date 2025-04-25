'use client'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react'
const Fade = dynamic(() => import('react-awesome-reveal').then(mod => mod.Fade), { ssr: false });

const HeroSection = () => {
    return (
        <div className='bg-cover h-[320px] sm:h-[400px] lg:h-[711px] flex items-center justify-start !p-4 md:!pl-8 lg:!pl-20'
            style={{
                backgroundImage: "url('/images/hero-bg.jpg')",
                backgroundPosition: "center"
            }}>
            {/* <div className='absolute w-full h-full bg-black opacity-40 top-0 left-0' /> */}
            <div className='flex flex-col gap-8 max-w-[620px]'>
                <Fade direction='up'>
                    <h2 className='text-3xl md:text-4xl lg:text-7xl font-bold text-[#003A66]'>
                        Your Fast Track to Pakistan
                    </h2>
                </Fade>
                <Fade direction='up'>
                    <p className='text-sm md:text-[16px] lg:text-xl max-w-[300px] md:max-w-[420px] text-[#42545E]'>
                        Hassle-free visa assistance for travelers,
                        students, and professionals.
                        Apply with confidence — we handle the rest.
                    </p>
                </Fade>
                <Fade direction='up'>
                    <div className='flex gap-3 flex-col sm:flex-row'>
                        <button className='cursor-pointer h-10 w-20 md:w-32 text-sm md:text-md bg-[#d63384] hover:bg-[#d63384b6] text-white'>Apply</button>
                        <button className='cursor-pointer h-10 w-28 md:w-36 text-sm md:text-md bg-[#003A66] hover:bg-[#003a66a0] text-white'>
                            <Link href={"#packages"}>View packages</Link>
                        </button>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default HeroSection;
