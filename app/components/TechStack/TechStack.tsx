import React from 'react';
import Heading from '../Heading'
import Image from 'next/image';
import StackIcon from "tech-stack-icons";
import TechStackItem from "./TechStackItem"
import { motion } from "framer-motion"
import hybernateLogo from '@/public/images/hibernate.png';
import unityLogo from '@/public/images/unity.png';
import csharpLogo from '@/public/images/Csharp.png';
import MissingItem from "./MissingItem"
type Props = {};
const TechStack = ({}: Props) => {

    return (
        <>
            <section id="skills" className="hero pt-12">
                    <div className="max-w-screen-xl text-center ">
                        <div className="flex flex-col items-center">
                            <Heading title="Tech Stack"/>
                                <div className="flex flex-wrap justify-center px-12 sm:px-20 lg:px-10 py-20  gap-16 sm:gap-24">
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
                                <MissingItem stackIcon={hybernateLogo} title="Hybernate"/>
                                <TechStackItem stackIcon="c++" title="C++"/>
                                <MissingItem stackIcon={csharpLogo} title="C#"/>
                                <TechStackItem stackIcon="webpack" title="Webpack"/>
                                <TechStackItem stackIcon="github" title="Github" style="bg-white rounded-3xl"/>
                                <MissingItem stackIcon={unityLogo} title="Unity"/>
                            </div>
                        </div>
                    </div>
                </section>

        </>
    )
};
export default TechStack;