import { motion, useReducedMotion } from 'framer-motion';

/**
 * SparkleText — renders a twinkling ✦ glyph.
 * @param {string} glyph - The glyph to render (default: ✦)
 * @param {string} size - Tailwind text size class (default: text-lg)
 * @param {number} delay - Animation delay in seconds (default: 0)
 */
export function SparkleText({ glyph = '✦', size = 'text-lg', delay = 0, className = '' }) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return (
            <span className={`sparkle ${size} ${className}`} aria-hidden="true">
                {glyph}
            </span>
        );
    }

    return (
        <motion.span
            aria-hidden="true"
            className={`${size} inline-block select-none`}
            style={{ color: 'var(--sparkle-color)' }}
            animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 20, -10, 0],
                opacity: [0.7, 1, 0.7],
            }}
            transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
        >
            {glyph}
        </motion.span>
    );
}
