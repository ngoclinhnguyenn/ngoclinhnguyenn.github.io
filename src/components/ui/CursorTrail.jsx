import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

const COLORS = [
    'var(--pastel-rose)',
    'var(--pastel-sky)',
    'var(--pastel-mint)',
    'var(--pastel-lilac)'
];

export function CursorTrail() {
    const canvasRef = useRef(null);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (shouldReduceMotion) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let dots = [];
        let mouse = { x: -100, y: -100, active: false };

        const updateSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', updateSize);
        updateSize();

        const handleMouseMove = (e) => {
            // Create new dot on move
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;

            dots.push({
                x: mouse.x,
                y: mouse.y,
                life: 1,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                size: 4
            });

            if (dots.length > 20) {
                dots.shift();
            }
        };

        const handleMouseLeave = () => {
            mouse.active = false;
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < dots.length; i++) {
                const dot = dots[i];

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                ctx.fillStyle = dot.color;
                ctx.globalAlpha = dot.life * 0.6; // Max opacity 0.6
                ctx.fill();

                dot.life -= 0.05; // Fade out speed
            }

            // Remove dead dots
            dots = dots.filter(dot => dot.life > 0);

            animationFrameId = requestAnimationFrame(render);
        };

        // Only attach listener to a specific hero container if required, 
        // but the prompt said "trail dots follow cursor within hero bounds only".
        // For now, we will track globally and control visibility in Hero.jsx via CSS or masking.
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        render();

        return () => {
            window.removeEventListener('resize', updateSize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [shouldReduceMotion]);

    if (shouldReduceMotion) return null;

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            style={{ opacity: 0.8 }}
        />
    );
}
