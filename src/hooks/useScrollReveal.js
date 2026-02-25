import { useEffect, useState } from 'react';

export function useScrollReveal(options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
    const [inView, setInView] = useState(false);
    const [ref, setRef] = useState(null);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(([entry]) => {
            setInView(entry.isIntersecting);
        }, options);

        observer.observe(ref);

        return () => {
            observer.disconnect();
        };
    }, [ref, options]);

    return [setRef, inView];
}
