'use client'
import React, { useEffect, useState } from 'react';


type Props = {
    textList: string[];
    period: number;
    typingSpeed?: number;
    deletingSpeed?: number;
}

const TypingEffect= ({   textList,
                         period,
                         typingSpeed = 200,
                         deletingSpeed = 100 }: Props) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(typingSpeed);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % textList.length;
            const fullTxt = textList[i];

            if (isDeleting) {
                setText(fullTxt.substring(0, text.length - 1));
                setDelta(deletingSpeed);
            } else {
                setText(fullTxt.substring(0, text.length + 1));
                setDelta(typingSpeed);
            }

            if (!isDeleting && text === fullTxt) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(typingSpeed / 2);
            }
        };

        const ticker = setTimeout(handleTyping, delta);

        return () => clearTimeout(ticker);
    }, [text, isDeleting, loopNum, delta, period, textList, typingSpeed, deletingSpeed]);

    return (
        <span className="text-4xl typing-effect">{text}</span>
    );
};

export default TypingEffect;