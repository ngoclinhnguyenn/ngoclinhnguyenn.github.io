import { motion, useReducedMotion } from 'framer-motion';
import { useTilt } from '../../hooks/useTilt';
import { useMousePosition } from '../../hooks/useMousePosition';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import { useRef, useState } from 'react';

export function Card({ children, className, tilt = true, glow = true, as = 'div', hoverEffect = true, floating = false }) {
    const Component = motion[as] || motion.div;
    const shouldReduceMotion = useReducedMotion();
    const { ref: tiltRef, tiltStyle, handleMouseMove: handleTiltMove, handleMouseLeave: handleTiltLeave } = useTilt(tilt && !shouldReduceMotion ? 3 : 0);

    const innerRef = useRef(null);
    const mousePosition = useMousePosition(innerRef);
    const [isHovered, setIsHovered] = useState(false);

    const setRefs = (node) => {
        tiltRef.current = node;
        innerRef.current = node;
    };

    const onMouseMove = (e) => {
        if (tilt && !shouldReduceMotion) handleTiltMove(e);
    };

    const onMouseLeave = () => {
        setIsHovered(false);
        if (tilt && !shouldReduceMotion) handleTiltLeave();
    };

    const onMouseEnter = () => {
        setIsHovered(true);
    };

    // Bouncy floating animation
    const floatingAnimation = floating && !shouldReduceMotion ? {
        y: [0, -8, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2 // Randomize start
        }
    } : {};

    return (
        <Component
            ref={setRefs}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
            animate={floatingAnimation}
            style={{
                ...tiltStyle,
            }}
            className={twMerge(
                clsx(
                    'relative bg-bg-secondary border border-border rounded-card overflow-hidden transition-all duration-300',
                    hoverEffect && 'hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 hover:border-border-hover',
                    className
                )
            )}
        >
            {glow && isHovered && !shouldReduceMotion && (
                <div
                    className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-100"
                    style={{
                        background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, var(--accent-soft), transparent 80%)`,
                    }}
                />
            )}
            <div className="relative z-10 w-full h-full">{children}</div>
        </Component>
    );
}
