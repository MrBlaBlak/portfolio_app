import React from 'react';

type Props = {};
const Invitation = ({}: Props) => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <p className="">Hi, I am </p>
                    <h3 className="text-5xl font-bold text-gradient">Michał Romak</h3>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-outline btn-warning text-white">View Projects</button>
                    <div className="p-1 inline"> </div>
                    <button className="btn glass text-white">Open PDF Resume</button>
                </div>
            </div>
        </div>
    )
};
export default Invitation;