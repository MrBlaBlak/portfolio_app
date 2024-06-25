import React from 'react';

type Props = {
    title: string,

};
const Heading2 = ({title}: Props) => {
    return (
        <h1 className="flex items-center text-3xl font-bold pt-10 pb-2 underline-gradient">{title}</h1>
    )
};
export default Heading2;