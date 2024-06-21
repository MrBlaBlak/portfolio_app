import React from 'react';

type Props = {
    label: string,
    value: string,
};

const InfoItem = ({ label, value }: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-gray-400">{label}:</p>
            <p className="text-base w-60">{value}</p>
        </div>
    );
};

export default InfoItem;