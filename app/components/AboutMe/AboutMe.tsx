import React from "react";
import Photo from "./Photo"
import {FaMobileScreen} from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { PiSneakerMoveFill } from "react-icons/pi";
import { BiMove } from "react-icons/bi";
import FeatureItem from "./FeatureItem"
import FeatureItemDescription from "./FeatureItemDescription"
import Heading from "../Heading"
import PersonalData from "./PersonalData"
import InfoItem from "./InfoItem"
type Props = {};
const AboutMe = ({}: Props) => {
    return (
        <>
            <section id="about" className="hero pt-12">
                    <div className="max-w-screen-xl text-center ">
                        <div className="flex flex-col items-center">
                            <Heading title="About me"/>
                            <PersonalData>
                                <InfoItem label="Name" values={ ["Michał Romak"]} />
                                <InfoItem label="Email" values={ ["m.romak.poczta@gmail.com"]} />
                                <InfoItem label="Education" values={ ["Psychology - Masters Degree ", "Computer Science - 3 terms"]} />
                                <InfoItem label="From" values={ ["Lublin, Poland"]} />
                            </PersonalData>
                            <Photo/>
                        </div>
                        <p className="py-6 px-20 text-lg">I am a software developer passionate about technology,
                            with over 1.5 year of commercial programming experience. My primary strengths lie in problem-solving and
                            effective communication.
                            I excel in fast learning and apply my knowledge effectively across all my projects.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 py-10 gap-y-10 xl:gap-0">
                            <FeatureItem icon={<FaMobileScreen className="w-12 h-12" />}>
                                <FeatureItemDescription title="Responsive"
                                                        description="I create responsive web designs that seamlessly adapt to all devices."/>
                            </FeatureItem>
                            <FeatureItem icon={<FaEye className="w-12 h-12" />}>
                                <FeatureItemDescription  title="Attractive"
                                                         description="My designs prioritize clean, aesthetic layouts."/>
                            </FeatureItem>
                            <FeatureItem icon={<PiSneakerMoveFill className="w-12 h-12" />}>
                                <FeatureItemDescription  title="Fast"
                                                         description="I aim to provide smooth, efficient browsing experiences by emphasizing fast loading times."/>
                            </FeatureItem>
                            <FeatureItem icon={<BiMove className="w-12 h-12" />}>
                                <FeatureItemDescription title="Dynamic"
                                                        description="I strive to develop dynamic webpages that are interactive and engaging."/>
                            </FeatureItem>
                        </div>
                    </div>
                </section>
        </>
    )
};
export default AboutMe;