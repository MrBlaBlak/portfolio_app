import React from 'react';
import TypingEffect from './TypingEffect'
import SocialButton from './SocialButton'

type Props = {};
const Invitation = ({}: Props) => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center appear-animation">
                <div className="max-w-screen-xl">
                    <p className="text-white text-xl">Hi, I am </p>
                    <h1 className="text-5xl font-bold text-gradient p-5">Michał Romak</h1>
                    <TypingEffect textList={["FrontEnd Developer", "React/Next Developer", "Java Developer"]}
                                  period={2000}
                                  typingSpeed={40}
                                  deletingSpeed={40}/>
                    <p className="py-6 text-white text-xl">an adept web developer dedicated to transforming creative concepts into engaging digital experiences online.</p>
                    <div className="space-x-4">
                        <button className="btn btn-outline btn-warning w-40">View Projects</button>
                        <button className="btn glass text-white w-40">Open PDF Resume</button>
                    </div>
                    <SocialButton/>
                </div>
            </div>
        </div>
    )
};
export default Invitation;