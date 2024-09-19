import React from 'react';
import Heading from '../Heading'
import rankingPhoto from '@/public/images/ranking.jpg';
import rankingPhoto2 from '@/public/images/ranking2.jpg';
import VRPhoto from '@/public/images/VR.jpg';
import CodingPhoto from '@/public/images/coding.png';
import Scheduler from '@/public/images/scheduler.jpg';
import hybernateLogo from '@/public/images/hibernate.png';
import unityLogo from '@/public/images/unity.png';
import csharpLogo from '@/public/images/Csharp.png';
import ProjectCard from './ProjectCard'
import ProjectCardDescription from './ProjectCardDescription'
import {TbWorldWww} from "react-icons/tb";
import {FaGithub, FaYoutube} from "react-icons/fa";
import {GrDocumentPdf} from "react-icons/gr";
import {CgFileDocument} from "react-icons/cg";


type Props = {};
const Projects = ({}: Props) => {
    return (
        <section id="projects" className="hero pt-12">
            <div className="max-w-screen-xl pb-24">
                <div className="flex flex-col items-center">
                    <Heading title="Projects"/>
                    <div className="flex flex-wrap gap-x-10 pt-20 justify-center gap-y-12">
                        <ProjectCard
                            imageSrc={rankingPhoto}
                            linkIcons={[
                                { icon: <TbWorldWww className="w-6 h-6 " />, url: 'https://ranking-system-fullstack-nextjs.vercel.app/' },
                                { icon: <FaGithub className="w-6 h-6 " />, url: 'https://github.com/MrBlaBlak/Ranking_system_fullstack_nextjs ' },
                            ]}
                            stackIcons={[
                                {name: 'reactjs'},
                                {name: 'nextjs2'},
                                {name: 'typescript'},
                                {name: 'redux'},
                                {name: 'prisma'},
                                {name: 'tailwindcss'},
                                {name: 'sass'},
                                {name: 'supabase'},
                                {name: 'zod'},
                            ]}
                        >
                            <ProjectCardDescription title="Balanced Teams Ranking System for Titanfall 2 (Next)"
                                                    description="This project aims to create a ranking system with players statistics tracking for the first-person shooter
                            (FPS). The system focuses on ensuring fair and competitive matches by intelligently forming teams based on players' Matchmaking Ratings (MMR)."/>
                        </ProjectCard>
                        <ProjectCard
                            imageSrc={rankingPhoto2}
                            linkIcons={[
                                { icon: <FaGithub className="w-6 h-6" />, url: 'https://github.com/MrBlaBlak/Ranking_system_Java_Spring_MVC ' },
                            ]}
                            stackIcons={[
                                {name: 'java'},
                                {name: 'spring'},
                                {name: 'js'},
                                {name: 'css3'},
                                {name: 'hybernate', src: hybernateLogo}
                            ]}
                        >
                            <ProjectCardDescription title="Balanced Teams Ranking System for Titanfall 2 (Java)"
                                                    description="First iteration of the project. In the beginning, this project was implemented using Java with Spring MVC and Hibernate."/>
                        </ProjectCard>
                        <ProjectCard
                            imageSrc={VRPhoto}
                            linkIcons={[
                                { icon: <GrDocumentPdf className="w-6 h-6" />, url: 'http://www.leelisle.com/wp-content/uploads/2024/03/EthnoVR.pdf' },
                                { icon: <CgFileDocument className="w-6 h-6" />, url: 'https://doi.org/10.1109/VRW62533.2024.00059' },
                                { icon: <FaYoutube className="w-6 h-6" />, url: 'https://www.youtube.com/watch?v=o2cQHCzwWdM' },
                            ]}
                            stackIcons={[
                                {name: 'unity', src: unityLogo},
                                {name: 'C#', src: csharpLogo}
                            ]}
                        >
                            <ProjectCardDescription title="EthnoVR 3.0 (Unity/C#)"
                                                    description="EthnoVR 3.0 is a tool that utilizes Immersive Virtual Environment (IVE) technology through the Virtual Reality Perspective Taking (VRPT) technique.
                            It is designed to enhance general empathy and ethnocultural empathy levels while mitigating ethnocentrism."/>
                        </ProjectCard>
                        <ProjectCard imageSrc={Scheduler}
                                     linkIcons={[
                                         {
                                             icon: <TbWorldWww className="w-6 h-6 "/>,
                                             url: 'https://calendarscheduler.vercel.app/'
                                         },
                                         {
                                             icon: <FaGithub className="w-6 h-6 "/>,
                                             url: 'https://github.com/MrBlaBlak/portfolio-scheduler'
                                         },
                                     ]}
                                     stackIcons={[
                                         {name: 'reactjs'},
                                         {name: 'nextjs2'},
                                         {name: 'js'},
                                         {name: 'firebase'},
                                     ]}>
                            <ProjectCardDescription title="Calendar Scheduler"
                                                    description="This project implements the DevExtreme React Scheduler,
                                                    a versatile component for managing and displaying scheduled data in various views (day, week, month).
                                                    The implementation includes language switching capabilities, integration with a Firebase database,
                                                    and a modernized codebase using React's functional components instead of the older class-based approach."/>
                        </ProjectCard>
                        <ProjectCard imageSrc={CodingPhoto}
                                     linkIcons={[
                                         {
                                             icon: <FaGithub className="w-6 h-6 "/>,
                                             url: 'https://github.com/MrBlaBlak/Algorithm_Exercises'
                                         },
                                     ]}
                                     stackIcons={[
                                         {name: 'js'},
                                     ]}>
                            <ProjectCardDescription title="Coding challenges and solutions"
                                                    description="This repository serves for developing my problem-solving skills,
                                                    exploring various algorithms and data structures,
                                                    and demonstrating my ability to approach coding challenges effectively."/>
                        </ProjectCard>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Projects;