import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

/**
 * GlassCard — a frosted-glass card variant.
 * Uses CSS custom properties --glass-bg and --glass-border.
 * @param {string} className - Additional Tailwind classes
 * @param {boolean} float - Whether to apply floating animation
 * @param {number} floatDelay - Animation delay in seconds (for staggered floats)
 */
export function GlassCard({ children, className, float = false, floatDelay = 0, style = {} }) {
    return (
        <div
            className={twMerge(
                clsx(
                    'glass rounded-card',
                    float && 'float-chip',
                    className
                )
            )}
            style={{
                animationDelay: float ? `${floatDelay}s` : undefined,
                ...style,
            }}
        >
            {children}
        </div>
    );
}
