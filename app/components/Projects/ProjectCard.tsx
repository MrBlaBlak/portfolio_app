'use client'
import React, {ReactNode} from 'react';
import Image from 'next/image';
import StackIcon from 'tech-stack-icons'; // Adjust the import path as necessary
import { StaticImageData } from "next/image"
import { motion } from "framer-motion"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"

type Props = {
    imageSrc: StaticImageData,
    linkIcons: Array<{ icon: ReactNode, url: string }>,
    stackIcons: Array<{ name: string; src?: StaticImageData }>,
    children: ReactNode
};

const ProjectCard = ({ imageSrc,linkIcons  ,stackIcons , children }: Props) => {
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0.1,
    });
    return (
        <div ref={ref} className={`opacity-0 card w-[400px] bg-base-100 shadow-xl ${isIntersecting ? 'move-up-animation' : ''}`}>
            <figure>
                <Image src={imageSrc} alt="ProjectPreview" />
                <div className="absolute top-2 right-2 flex space-x-2">
                    {linkIcons.map((linkIcon, index) => (
                        <div className="flex rounded-full bg-black w-10 h-10 justify-center items-center">
                        <a
                            key={index}
                            href={linkIcon.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white transform transition-transform duration-200 hover:scale-110"
                        >
                            {linkIcon.icon}
                        </a>
                        </div>
                    ))}
                </div>
            </figure>
            <div className="card-body">
                {children}
                <div className="card-actions justify-start">
                    {stackIcons.map((icon, index) =>
                        icon.src ? (
                            <Image key={index} src={icon.src} alt={icon.name} className="w-8 h-8" />
                        ) : (
                            <StackIcon key={index} name={icon.name} className="w-8 h-8" />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;