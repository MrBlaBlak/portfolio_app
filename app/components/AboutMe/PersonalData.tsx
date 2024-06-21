'use client'
import React, { ReactNode } from 'react';
import InfoItem from "./InfoItem"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
type Props = {
    children: ReactNode
};
const PersonalData = ({children}: Props) => {
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0.1,
    });
    return (
            <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 place-items-center py-10 opacity-0 ${isIntersecting ? 'move-up-animation' : ''}`} >
                {children}
            </div>
    )
};
export default PersonalData;