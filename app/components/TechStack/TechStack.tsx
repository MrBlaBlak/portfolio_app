import React from 'react';
import Heading from '../Heading'
import StackIcon from "tech-stack-icons";
import TechStackItem from "./TechStackItem"
import { motion } from "framer-motion"
type Props = {};
const TechStack = ({}: Props) => {

    return (
        <>
            <div className="hero ">
                <div className="hero-content text-center">
                    <div className="max-w-screen-xl">
                        <div className="flex flex-col items-center">
                            <Heading title="Tech Stack"/>
                            <div className="flex flex-wrap justify-center px-20 lg:px-10 py-20  gap-24">
                                <TechStackItem stackIcon="reactjs" title="ReactJs"/>
                                <TechStackItem stackIcon="nextjs2" title="NextJs"/>
                                <TechStackItem stackIcon="typescript" title="TypeScript"/>
                                <TechStackItem stackIcon="js" title="JavaScript"/>
                                <TechStackItem stackIcon="tailwindcss" title="TailwindCSS"/>
                                <TechStackItem stackIcon="materialui" title="MaterialUI"/>
                                <TechStackItem stackIcon="redux" title="Redux"/>
                                <TechStackItem stackIcon="prisma" title="Prisma"/>
                                <TechStackItem stackIcon="digitalocean" title="DigitalOcean"/>
                                <TechStackItem stackIcon="css3" title="CSS3"/>
                                <TechStackItem stackIcon="html5" title="HTML5"/>
                                <TechStackItem stackIcon="java" title="Java"/>
                                <TechStackItem stackIcon="mysql" title="MySQL"/>
                                <TechStackItem stackIcon="spring" title="Spring"/>
                                <TechStackItem stackIcon="c++" title="C++"/>
                                <TechStackItem stackIcon="webpack" title="Webpack"/>
                                <TechStackItem stackIcon="github" title="Github"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default TechStack;