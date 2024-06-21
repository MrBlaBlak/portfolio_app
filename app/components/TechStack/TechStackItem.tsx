'use client'
import React from 'react';
import StackIcon from "tech-stack-icons";
import { motion } from "framer-motion"
type TechStackItemProps = {
    stackIcon: string,
    title: string,
};

const TechStackItem = ({ stackIcon, title}: TechStackItemProps) => {
    return (
        <motion.div  initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}  className="flex flex-col items-center">
            <StackIcon name={stackIcon} className="w-16 h-16" />
            <p className="font-semibold pt-2 capitalize">{title}</p>
        </motion.div>
    );
};

export default TechStackItem;