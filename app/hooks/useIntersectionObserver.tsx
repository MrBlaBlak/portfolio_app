import { useEffect, useRef, useState, RefObject  } from 'react';
type Props = {
    threshold: number,
}

const useIntersectionObserver = (options: Props): [RefObject<HTMLDivElement>, boolean] => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasIntersected) {
                setIsIntersecting(true);
                setHasIntersected(true);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, isIntersecting];
};

export default useIntersectionObserver;