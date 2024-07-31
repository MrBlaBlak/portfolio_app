import React from 'react';
import Logo from "../Logo"
import List from "./List"
import Dropdown from "./Dropdown"
import ThemeIcon from "@/app/components/Header/ThemeIcon";
type Props = {};
const Navbar = ({}: Props) => {

    return (<>
        <div className="navbar bg-base-300 border-b-2 border-b-deepGold py-0 fixed z-50">
            <div className="justify-start w-full lg:w-2/5">
                <div className="pl-4 md:pl-12 lg:pl-36">
                    <Logo/>
                </div>
                <Dropdown/>
                <a className="text-xl font-semibold px-1" >Michał ROMAK</a>

            </div>
            <div className="hidden lg:flex lg:pr-20 w-3/5 justify-end">
                <List classes="menu menu-horizontal px-1"/>
            </div>
            <ThemeIcon/>
        </div>
    </>)
};
export default Navbar;