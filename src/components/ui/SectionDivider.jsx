import { useTheme } from '../../context/ThemeContext';

export function SectionDivider() {
    const { theme } = useTheme();

    return (
        <div className="w-full flex justify-center my-16 opacity-60">
            <div
                className="h-px w-[60%]"
                style={{
                    background: theme === 'light'
                        ? 'linear-gradient(90deg, transparent, var(--pastel-lilac), var(--accent-soft), var(--pastel-rose), transparent)'
                        : 'linear-gradient(90deg, transparent, var(--pastel-lilac), var(--accent-soft), var(--pastel-rose), transparent)'
                }}
            />
        </div>
    );
}
