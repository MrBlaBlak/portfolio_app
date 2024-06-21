import React from 'react';

type Props = {
    title: string,
};
const Heading = ({title}: Props) => {
    return (
        <h1 className="flex items-center text-5xl font-bold py-2 max-w-72 underline-gradient">{title}</h1>
    )
};
export default Heading;