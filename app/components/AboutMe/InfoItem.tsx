import React from 'react';

type Props = {
    label: string,
    values: string[],
};

const InfoItem = ({ label, values }: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-gray-400">{label}:</p>
            {
                values.map(value  => <p key={value} className="w-60">{value}</p>)
            }

        </div>
    );
};

export default InfoItem;