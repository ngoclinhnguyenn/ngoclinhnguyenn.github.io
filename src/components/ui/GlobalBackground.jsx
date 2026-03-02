import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export function GlobalBackground() {
    const shouldReduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll();

    // Subtle parallax based on scroll
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

    // Decorative floating geometric shapes
    const shapes = [
        { id: 1, type: 'circle', size: 'w-64 h-64', color: 'bg-pastel-lilac/10', x: '10%', y: '10%', duration: 25, yPos: y1 },
        { id: 2, type: 'square', size: 'w-48 h-48', color: 'bg-pastel-rose/10', x: '80%', y: '20%', duration: 30, yPos: y2, rotate: 45 },
        { id: 3, type: 'circle', size: 'w-96 h-96', color: 'bg-pastel-sky/10', x: '15%', y: '70%', duration: 35, yPos: y3 },
        { id: 4, type: 'line', size: 'w-64 h-px', color: 'bg-accent/10', x: '60%', y: '85%', duration: 28, yPos: y1, rotate: -15 },
        { id: 5, type: 'circle', size: 'w-40 h-40', color: 'bg-pastel-mint/10', x: '45%', y: '35%', duration: 22, yPos: y2 },
    ];

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-bg transition-colors duration-500">
            {/* Soft background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--bg-secondary)_0%,transparent_50%),radial-gradient(circle_at_bottom_left,var(--bg-tertiary)_0%,transparent_50%)] opacity-50" />

            {/* Subtle dot grid */}
            <div className="dot-grid absolute inset-0 opacity-[0.2]" />

            {/* Floating Geometric Shapes */}
            {!shouldReduceMotion && shapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    className={`absolute ${shape.size} ${shape.color} ${shape.type === 'circle' ? 'rounded-full' : ''}`}
                    style={{
                        left: shape.x,
                        top: shape.y,
                        filter: 'blur(60px)',
                        y: shape.yPos,
                        rotate: shape.rotate || 0
                    }}
                />
            ))}

            {/* Global soft noise overlay for texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
        </div>
    );
}

