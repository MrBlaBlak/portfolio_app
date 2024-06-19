import React from 'react';
import Logo from "./components/Logo"
type Props = {};
const Header = ({}: Props) => {
    return ( <header className=" text-white px-4 pl-24 flex items-center relative bg-zinc-900">

        <div className="flex items-center space-x-4">
            <Logo/>
            <div>
                <h1 className="text-xl font-bold">Michał Romak</h1>
                <p className="text-sm">aka MrBlaBlak</p>
            </div>
        </div>
        <nav className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="list-none p-0 flex justify-center space-x-4">
                <li><a className="text-white no-underline" href="#about">About</a></li>
                <li><a className="text-white no-underline" href="#projects">Projects</a></li>
                <li><a className="text-white no-underline" href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>)
};
export default Header;