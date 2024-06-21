import React from 'react';

type Props = {
    classes: string,
};
const List = ({classes}: Props) => {
    return (
        <ul className={classes}>
            <li><a href="#home" className="font-semibold hover:text-custom2 ml-3">Home</a></li>
            <li><a href="#about" className="font-semibold hover:text-custom2 ml-3">About</a></li>
            <li><a href="#skills" className="font-semibold hover:text-custom2 ml-3"> Skills</a></li>
            <li><a href="#projects" className="font-semibold hover:text-custom2 ml-3">Projects</a></li>
            <li><a href="#contacts" className="font-semibold hover:text-custom2 ml-3">Contacts</a></li>
        </ul>
    )
};
export default List;