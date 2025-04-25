import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'
const Fade = dynamic(() => import('react-awesome-reveal').then(mod => mod.Fade), { ssr: false });

const WhyChoose = () => {

    const choose = [
        { label: "Expert Guidance", description: "Benefit from years of experience and expert advice. Our team ensures that you have all the support you need for a smooth visa application process." },
        { label: "Hassle-Free Process", description: "We take the stress out of your visa application. With simple steps and clear instructions, we handle the paperwork so you can focus on your journey." },
        { label: "Fast & Reliable Service", description: "Time is of the essence. Our efficient process ensures that your visa is processed quickly and reliably, getting you to Pakistan without unnecessary delays." }
    ]

    return (
        <section id='why-choose' className='!px-6 sm:!px-10 lg:!px-20 !py-6'>
            <Fade direction='down'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold max-w-[400px] text-[#003A66]'>
                    Why chosse us?
                </h2>
            </Fade>
            <div className='!mt-8 grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='!space-y-3'>
                    {choose.map((item, index) => (
                        <Fade direction='up' key={index}>
                            <div className='bg-gray-100 !py-2 !px-4 rounded-sm'>
                                <h3 className='text-xl font-medium text-[#003A66] !mb-2'>
                                    {item.label}
                                </h3>
                                <p className='text-[14px] font-light text-[#42545E] max-w-[400px]'>
                                    {item.description}
                                </p>
                            </div>
                        </Fade>
                    ))}
                </div>
                <div className='w-full h-full rounded-sm overflow-hidden'>
                    <Fade direction='up'>
                        <Image src={"/images/blog-02.jpg"} alt='passport' width={400} height={400} style={{ width: "100%", height: "auto" }} />
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose;
