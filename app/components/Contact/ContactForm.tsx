'use client'
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import SuccessMessage from './SuccessMessage'
import ErrorMessage from './ErrorMessage'

type Props = {};

const ContactForm = ({}: Props) => {
    const form = useRef() as React.MutableRefObject<HTMLFormElement>;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const serviceID = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID || '';
        const templateID = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID || '';
        const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY || '';

        if (!serviceID || !templateID || !publicKey) {
            console.error('Missing environment variables for EmailJS.');
            return;
        }

        emailjs
            .sendForm(serviceID, templateID, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSubmitting(false);
                    setShowSuccessMessage(true);
                    setTimeout(() => setShowSuccessMessage(false), 3000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsSubmitting(false);
                    setShowErrorMessage(true);
                    setTimeout(() => setShowErrorMessage(false), 3000);
                },
            );
    };

    return (
        <>
            <form ref={form} className="flex flex-col pt-10 gap-4 pb-2" onSubmit={sendEmail}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Your Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered"
                    placeholder="Your Email"
                    required
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered h-32"
                    placeholder="Your Message"
                    required
                ></textarea>
                <button disabled={isSubmitting} type="submit" className="btn glass w-40">Send
                    Message {isSubmitting && <span className="loading loading-spinner loading-sm"></span>}</button>
            </form>

            {showSuccessMessage && (
                <SuccessMessage onClose={() => setShowSuccessMessage(false)}/>
            )}
            {showErrorMessage && (
                <ErrorMessage onClose={() => setShowErrorMessage(false)}/>
            )}

        </>

    );
};

export default ContactForm;