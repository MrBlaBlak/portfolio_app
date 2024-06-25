import React from 'react';

type Props = {
    title: string,
    classParameteres?: string
};
const Heading = ({title, classParameteres}: Props) => {
    return (
        <h1 className={`flex items-center text-5xl font-bold pt-10 pb-2 underline-gradient ${classParameteres}`} >{title}</h1>
    )
};
export default Heading;