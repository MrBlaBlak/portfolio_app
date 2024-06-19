import React from 'react';
import Logo from "./components/Logo"
type Props = {};
const Footer = ({}: Props) => {
    return (
        <footer className="footer px-10 pb-10 bg-base-200 text-base-content">
        <aside>
            <Logo/>
            <p>Michał Romak<br/>Freelancer Software Developer</p>
        </aside>

    </footer>)
};
export default Footer;