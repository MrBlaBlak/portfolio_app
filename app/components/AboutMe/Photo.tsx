'use client'
import React from 'react';
import Image from 'next/image';
import photo from '@/public/images/photo.png';
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
type Props = {};
const Photo = ({}: Props) => {
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0.1, // Adjust the threshold as needed
    });
    return (
        <div ref={ref} className={`opacity-0 ${isIntersecting ? 'move-up-animation' : ''}`}>
            <Image className=" justify-center max-h-64 max-w-64 my-5"  src={photo} alt="Michał Romak"/>
        </div>
    );
};
export default Photo;


