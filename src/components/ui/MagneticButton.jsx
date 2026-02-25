import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export function MagneticButton({ children, className, href, as = 'button', ...props }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const controls = useAnimation();
    const shouldReduceMotion = useReducedMotion();

    const handleMouseMove = (e) => {
        if (shouldReduceMotion) return;

        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const hw = rect.width / 2;
            const hh = rect.height / 2;

            const cx = rect.left + hw;
            const cy = rect.top + hh;

            const distanceX = e.clientX - cx;
            const distanceY = e.clientY - cy;

            const maxDistance = 40;

            // Calculate pull if within proximity or hovered
            if (Math.abs(distanceX) < hw + maxDistance && Math.abs(distanceY) < hh + maxDistance) {
                // Move towards cursor, scaled down
                setPosition({ x: distanceX * 0.2, y: distanceY * 0.2 });
            } else {
                setPosition({ x: 0, y: 0 });
            }
        }
    };

    const resetPosition = () => {
        setPosition({ x: 0, y: 0 });
    };

    useEffect(() => {
        if (shouldReduceMotion) return;

        controls.start({
            x: position.x,
            y: position.y,
            transition: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }
        });
    }, [position, controls, shouldReduceMotion]);

    const Component = href ? motion.a : motion[as];

    return (
        <Component
            ref={ref}
            href={href}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetPosition}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            animate={controls}
            className={twMerge(
                "inline-flex items-center justify-center transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
