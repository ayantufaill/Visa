import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

interface VisaCardProps {
    image: string;
    title: string;
    description: string;
    href: string;
}

const VisaCard: React.FC<VisaCardProps> = ({ image, title, description, href }) => {
    return (
        <div className='group flex flex-col h-auto bg-gray-200 rounded-md overflow-hidden'>
            <div className='w-full h-[55%] relative z-10 overflow-hidden'>
                <Image
                    src={image}
                    alt=''
                    width={100}
                    height={100}
                    style={{ width: "100%", height: "auto" }}
                    className='group-hover:scale-110 transition-all duration-300'
                />
                <div className='hidden group-hover:block bg-[#003A66] opacity-30 w-full h-full rounded-sm absolute top-0 left-0 transition-all duration-300' />
            </div>
            <div className='flex flex-col justify-between gap-3 h-[45%] !mt-4 !p-3 !pb-6'>
                <h4 className='text-xl text-[#003A66] font-semibold'>
                    <span className='hover:cursor-pointer hover:text-[#d63384] transition hover:font-semibold'>{title}</span>
                </h4>
                <p className='text-sm font-extralight text-[#42545E]'>{description}</p>
                <Link href={href}>
                    <span className='text-[#d63384] hover:text-[#a61b67] !mr-1 hover:!mr-4 transition-all'>
                        See more
                    </span>
                    <span>
                        <FaArrowRight color='#d63384' className='inline' />
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default VisaCard;
