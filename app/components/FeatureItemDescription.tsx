import React from 'react';

type Props = {
    title: string,
    description: string
}
const FeatureItemDescription = ({title, description}: Props) => {
    return (<>
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-base text-gray-400 w-60 text-center">{description}</p>
    </>)
};
export default FeatureItemDescription;