'use client'
import React from 'react';
import { motion } from "framer-motion"
import Image from 'next/image';
import { StaticImageData } from "next/image"
type TechStackItemProps = {
    stackIcon: StaticImageData,
    title: string,
};

const MissingItem = ({ stackIcon, title}: TechStackItemProps) => {
    return (
        <motion.div  initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}  className="flex flex-col items-center">
            <Image src={stackIcon} alt={title} className="w-16 h-16"/>
            <p className="font-semibold pt-2 capitalize">{title}</p>
        </motion.div>
    );
};

export default MissingItem;