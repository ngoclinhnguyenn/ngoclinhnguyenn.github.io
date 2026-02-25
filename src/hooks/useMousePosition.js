import { useState, useEffect } from 'react';

export function useMousePosition(ref = null) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, rx: 0, ry: 0 });

    useEffect(() => {
        let animationFrameId;

        const handleMouseMove = (event) => {
            animationFrameId = requestAnimationFrame(() => {
                if (ref?.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;

                    // Calculate relative center coordinates (-0.5 to 0.5)
                    const rx = (x / rect.width) - 0.5;
                    const ry = (y / rect.height) - 0.5;

                    setMousePosition({ x, y, rx, ry });
                } else {
                    setMousePosition({ x: event.clientX, y: event.clientY, rx: 0, ry: 0 });
                }
            });
        };

        const target = ref?.current || window;
        target.addEventListener('mousemove', handleMouseMove);

        return () => {
            target.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [ref]);

    return mousePosition;
}
