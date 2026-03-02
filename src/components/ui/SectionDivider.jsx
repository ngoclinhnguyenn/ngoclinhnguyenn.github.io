import { SparkleText } from './SparkleText';

export function SectionDivider() {
    return (
        <div className="relative flex items-center justify-center py-2 px-6">
            {/* Gradient line */}
            <div
                className="absolute left-1/2 -translate-x-1/2 h-px w-[55%] opacity-70"
                style={{
                    background: 'linear-gradient(90deg, transparent, var(--pastel-lilac), var(--accent-soft), var(--pastel-rose), transparent)',
                }}
                aria-hidden="true"
            />
            {/* Centered sparkle */}
            <SparkleText glyph="✦" size="text-xs" className="relative z-10 px-2 bg-bg" />
        </div>
    );
}
