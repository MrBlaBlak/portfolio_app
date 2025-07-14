import React from 'react';
import TypingEffect from './TypingEffect'
import SocialButton from './SocialButton'
import Link from 'next/link'
import styles from '@/app/styles/shinyEffect.module.sass'

type Props = {};
const Invitation = ({}: Props) => {
    return (
        <div id="home" className="hero min-h-screen">
                <div className="max-w-screen-xl  text-center appear-animation">
                    <p className="text-xl">Hi, I am </p>
                    <h1 className="text-5xl font-bold text-gradient p-5">Michał Romak</h1>
                    <TypingEffect textList={["FrontEnd Developer", "React Developer", "Java Developer"]}
                                  period={2000}
                                  typingSpeed={40}
                                  deletingSpeed={40}/>
                    <p className="py-6 px-2 text-xl">a Computer Science student striving to build a successful career in IT. I am experienced in web development and have a strong foundation in backend technologies.</p>
                    <div className="max-[360px]:flex max-[360px]:flex-col max-[360px]:gap-y-4   min-[361px]:space-x-4">
                        <Link href="#projects" ><button className="btn btn-outline btn-warning w-40">View Projects</button></Link>
                        <Link href="https://drive.google.com/file/d/1XVhpkdI0r9UuOyHGQEOl_q_g0lTux1eB/view?usp=sharing" target="_blank" rel="noopener noreferrer"> <button className="shiny bg-neutral btn glass w-40 ">Open PDF Resume<i className={styles.shiny}></i></button></Link>
                    </div>
                    <SocialButton/>
                </div>
        </div>
    )
};
export default Invitation;