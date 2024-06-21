'use client'
import React, { ReactNode } from 'react';
import useIntersectionObserver from "../hooks/useIntersectionObserver"
type Props = {
    icon: ReactNode,
    children: ReactNode;
}

const FeatureItem = ({ icon, children }: Props) => {
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0.1, // Adjust the threshold as needed
    });
    return (
        <div ref={ref} className={`opacity-0 flex flex-col items-center gap-2 ${isIntersecting ? 'move-up-animation' : ''}`}>
            <div className="flex w-24 h-24 rounded-full bg-custom2 items-center justify-center">
                {icon}
            </div>
            {children}
        </div>
    );
};

export default FeatureItem;