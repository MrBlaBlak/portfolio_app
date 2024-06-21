import React from 'react';
import Photo from './Photo'

type Props = {};
import {FaMobileScreen} from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { PiSneakerMoveFill } from "react-icons/pi";
import { BiMove } from "react-icons/bi";
import FeatureItem from "./FeatureItem"
import FeatureItemDescription from "./FeatureItemDescription"
const AboutMe = ({}: Props) => {
    return (
        <>
            <div className="hero bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-screen-xl">
                        <div className="flex flex-col items-center">
                            <h1 className="flex items-center text-5xl font-bold py-2 max-w-72 underline-gradient">About
                                me</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 place-items-center py-10">
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-400">Name:</p>
                                    <p className="text-base w-60 ">Michał Romak</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-400">Email:</p>
                                    <p className="text-base w-60 ">m.romak.poczta@gmail.com</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-400">Education:</p>
                                    <p className="text-base w-60 ">Master's Degree - Psychology</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-400">From:</p>
                                    <p className="text-base w-60 ">Lublin, Poland</p>
                                </div>
                            </div>
                            <Photo/>
                        </div>

                        <p className="py-6 text-white text-lg">I am a software developer passionate about technology,
                            with over 3 years of programming experience. My primary strengths lie in problem-solving and
                            effective communication.
                            I excel in fast learning and apply my knowledge effectively across all my projects.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 py-10 gap-y-10 xl:gap-0">
                            <FeatureItem icon={<FaMobileScreen className="w-12 h-12" />}>
                                <FeatureItemDescription title="Responsive"
                                                        description="I create responsive web designs that seamlessly adapt to all devices."/>
                            </FeatureItem>
                            <FeatureItem icon={<FaMobileScreen className="w-12 h-12" />}>
                                <FeatureItemDescription  title="Attractive"
                                                         description="My designs prioritize clean, aesthetic layouts."/>
                            </FeatureItem>
                            <FeatureItem icon={<FaMobileScreen className="w-12 h-12" />}>
                                <FeatureItemDescription  title="Fast"
                                                         description="Emphasizing fast loading times, I aim to provide smooth, efficient browsing experiences."/>
                            </FeatureItem>
                            <FeatureItem icon={<FaMobileScreen className="w-12 h-12" />}>
                                <FeatureItemDescription title="Dynamic"
                                                        description="I strive to develop dynamic webpages that are interactive and engaging."/>
                            </FeatureItem>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
};
export default AboutMe;