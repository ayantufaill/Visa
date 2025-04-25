import React from 'react'
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-[#003A66] !px-6 sm:!px-10 lg:!px-20 !py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <p className="mb-2 sm:mb-0 text-white">&copy; {new Date().getFullYear()} All rights reserved.</p>
            <div className="flex gap-4 text-[#FFF]">
                <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                    <FaFacebookF className="hover:text-[#d63384] transition" />
                </Link>
                <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                    <FaInstagram className="hover:text-[#d63384] transition" />
                </Link>
                <Link href="https://twitter.com" target="_blank" aria-label="X">
                    <FaXTwitter className="hover:text-[#d63384] transition" />
                </Link>
            </div>
        </footer>
    )
}

export default Footer
