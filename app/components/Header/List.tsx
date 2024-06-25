import React from 'react';
import Link from 'next/link'
type Props = {
    classes: string,
};
const List = ({classes}: Props) => {
    return (
        <ul className={classes}>
            <li><Link href="#home" className="font-semibold hover:text-custom2 ml-3">Home</Link></li>
            <li><Link href="#about" className="font-semibold hover:text-custom2 ml-3">About</Link></li>
            <li><Link href="#skills" className="font-semibold hover:text-custom2 ml-3"> Skills</Link></li>
            <li><Link href="#projects" className="font-semibold hover:text-custom2 ml-3">Projects</Link></li>
            <li><Link href="#contact" className="font-semibold hover:text-custom2 ml-3">Contact</Link></li>
        </ul>
    )
};
export default List;