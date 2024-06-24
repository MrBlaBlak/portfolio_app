import React from 'react';
import TypingEffect from './TypingEffect'
import SocialButton from './SocialButton'
import Link from 'next/link'

type Props = {};
const Invitation = ({}: Props) => {
    return (
        <div id="home" className="hero min-h-screen">
                <div className="max-w-screen-xl  text-center appear-animation">
                    <p className="text-white text-xl">Hi, I am </p>
                    <h1 className="text-5xl font-bold text-gradient p-5">Michał Romak</h1>
                    <TypingEffect textList={["FrontEnd Developer", "React/Next Developer", "Java Developer"]}
                                  period={2000}
                                  typingSpeed={40}
                                  deletingSpeed={40}/>
                    <p className="py-6 text-white text-xl">an adept web developer dedicated to transforming creative concepts into engaging digital experiences online.</p>
                    <div className="space-x-4">

                        <button className="btn btn-outline btn-warning w-40"><Link href="#projects" className="font-semibold hover:text-custom2 ml-3">View Projects</Link></button>
                        <button className="btn glass text-white w-40"><Link href="https://drive.google.com/file/d/1qyCMP1pon6Imwd2edOu97HWdrZZV4asp/view?usp=sharing" target="_blank" rel="noopener noreferrer">Open PDF Resume</Link></button>
                    </div>
                    <SocialButton/>
                </div>
        </div>
    )
};
export default Invitation;