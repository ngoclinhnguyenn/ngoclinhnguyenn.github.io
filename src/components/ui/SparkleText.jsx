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
            className={`inline-block ${size} ${className}`}
            style={{ color: 'var(--sparkle-color)' }}
            animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
                rotate: [0, 20, 0],
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: 'easeInOut',
                repeat: Infinity,
            }}
        >
            {glyph}
        </motion.span>
    );
}
