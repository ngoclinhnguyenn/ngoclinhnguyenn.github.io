import { useState, useCallback, useRef } from 'react';

export function useTilt(maxRotation = 3) {
    const [tiltStyle, setTiltStyle] = useState({});
    const ref = useRef(null);

    const handleMouseMove = useCallback(
        (e) => {
            if (!ref.current) return;

            // Use requestAnimationFrame logic internally if needed, but for simplicity:
            requestAnimationFrame(() => {
                if (!ref.current) return;
                const rect = ref.current.getBoundingClientRect();
                const x = e.clientX - rect.left; // x position within the element.
                const y = e.clientY - rect.top;  // y position within the element.

                const rx = (maxRotation / (rect.width / 2)) * (rect.width / 2 - x);
                const ry = (maxRotation / (rect.height / 2)) * (rect.height / 2 - y);

                // Invert rx/ry appropriately so tilt follows cursor
                setTiltStyle({
                    transform: `perspective(800px) scale(1.01) rotateX(${ry}deg) rotateY(${-rx}deg)`,
                    transition: 'transform 100ms ease',
                });
            });
        },
        [maxRotation]
    );

    const handleMouseLeave = useCallback(() => {
        requestAnimationFrame(() => {
            setTiltStyle({
                transform: `perspective(800px) scale(1) rotateX(0deg) rotateY(0deg)`,
                transition: 'transform 400ms cubic-bezier(0.25, 0.1, 0.25, 1)',
            });
        });
    }, []);

    return { ref, tiltStyle, handleMouseMove, handleMouseLeave };
}
