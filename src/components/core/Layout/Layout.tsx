import React, { ReactNode } from 'react';
import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer/Footer';
import { useRouter } from 'next/router';

interface LayoutProps {
    children: ReactNode;
}

const CustomLayout = ({ children }: LayoutProps) => {
    const router = useRouter();
    
    return (
        <>
            <Header />

            <div>
                {children}
            </div>

            {router.pathname === "/" && <Footer />}
        </>
    );
};

export default CustomLayout;
