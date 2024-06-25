'use client'
import React from 'react';
import Heading from '../Heading';
import Heading2 from '../Heading2';
import SocialButton from '../Header/SocialButton';
import ContactForm from './ContactForm'; // Import the new ContactForm component
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
const Contact = () => {
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0.1,
    });
    return (
        <section ref={ref} id="contact"  className={`opacity-0 py-24 ${isIntersecting ? 'move-up-animation' : ''}`}>
            <div className="flex flex-col items-center">
                <Heading title="Contact" />
                <div className="flex flex-row flex-wrap w-full justify-evenly">
                    <div className="w-4/5 md:w-1/4 lg:w-1/4">
                        <Heading2 title="Get in touch" />
                        <div className="justify-left text-gray-400">
                            <h2 className="pt-10">Email:</h2>
                            <p>m.romak.poczta@gmail.com</p>
                            <h2>Call:</h2>
                            <p>+48 513 811 103</p>
                            <SocialButton />
                            <p>Michał Romak<br />Freelancer Software Developer</p>
                        </div>
                    </div>
                    <div className="w-4/5 md:w-1/4 lg:w-1/4">
                        <Heading2 title="Send me a message" />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;