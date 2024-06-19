import React from 'react';
import Logo from "./components/Logo"
import List from "./components/List"
import Dropdown from "./components/Dropdown"
type Props = {};
const Header = ({}: Props) => {

    return (<>
        <div className="navbar bg-zinc-900 border-b-2 border-b-custom2 py-0">
            <div className="navbar-start w-max md:w-max lg:w-1/2">
                <div className="pl-4 md:pl-12 lg:pl-36">
                    <Logo/>
                </div>
                <Dropdown/>
                <a className="text-xl font-semibold px-1" >Michał ROMAK</a>
            </div>
            <div className="navbar-end hidden lg:flex pr-4 md:pr-12 lg:pr-36 w-2/3 justify-end">
                <List classes="menu menu-horizontal px-1"/>
            </div>
        </div>
    </>)
};
export default Header;