import React from 'react';
import TypingEffect from './TypingEffect'
import SocialButton from './SocialButton'

type Props = {};
const Invitation = ({}: Props) => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-xl">
                    <p className="text-white text-xl">Hi, I am </p>
                    <h1 className="text-5xl font-bold text-gradient p-5">Michał Romak</h1>
                    <TypingEffect textList={["FrontEnd Developer", "React/Next Developer", "Java Developer"]}
                                  period={2000}
                                  typingSpeed={40}
                                  deletingSpeed={40}/>
                    <p className="py-6 text-white">An agile learner and effective communicator, I am a skilled web
                        developer and adept problem solver, dedicated to delivering innovative solutions.</p>
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