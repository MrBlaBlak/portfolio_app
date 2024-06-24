import React from 'react';

type Props = {
    title: string,
    description: string
};
const ProjectCardDescription = ({title, description}: Props) => {
    return (
        <>
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
        </>
    )
};
export default ProjectCardDescription;