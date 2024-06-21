import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

type Props = {};

const SocialButton = ({}: Props) => {
    return (

            <div className="flex space-x-4 justify-center p-5">
                <a
                    href={"https://github.com/MrBlaBlak"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 bg-white border border-gray-300 rounded hover:scale-105 transform transition-transform duration-200"
                >
                    <FaGithub className="w-6 h-6 text-black"/>
                </a>
                <a
                    href={"https://www.linkedin.com/in/michalromak"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 bg-white border border-gray-300 rounded rounded hover:scale-105 transform transition-transform duration-200"
                >
                    <FaLinkedin className="w-6 h-6 text-black"/>
                </a>
            </div>

    );
};

export default SocialButton;