import React from 'react';

type Props = {
    title: string,

};
const Heading = ({title}: Props) => {
    return (
        <h1 className="flex items-center text-5xl font-bold pt-10 pb-2 underline-gradient">{title}</h1>
    )
};
export default Heading;