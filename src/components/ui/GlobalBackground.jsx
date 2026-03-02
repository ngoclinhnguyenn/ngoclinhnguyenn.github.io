import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

export function GlobalBackground() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-bg">
            {/* Soft dot grid */}
            <div className="dot-grid absolute inset-0 opacity-50" />

            {/* Floating Aurora Orbs */}
            {!shouldReduceMotion && (
                <>
                    <motion.div
                        className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, var(--pastel-lilac) 0%, transparent 60%)',
                            opacity: 0.65,
                            filter: 'blur(120px)'
                        }}
                        animate={{
                            x: [0, 50, 0, -50, 0],
                            y: [0, 30, 80, 20, 0],
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className="absolute top-[30%] right-[-20%] w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, var(--pastel-rose) 0%, transparent 60%)',
                            opacity: 0.5,
                            filter: 'blur(120px)'
                        }}
                        animate={{
                            x: [0, -40, 0, 40, 0],
                            y: [0, -60, -20, -50, 0],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    />
                    <motion.div
                        className="absolute bottom-[-20%] left-[10%] w-[75vw] h-[75vw] max-w-[1100px] max-h-[1100px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, var(--pastel-sky) 0%, transparent 60%)',
                            opacity: 0.45,
                            filter: 'blur(120px)'
                        }}
                        animate={{
                            x: [0, 60, 20, 80, 0],
                            y: [0, -40, 0, -30, 0],
                        }}
                        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                    />
                </>
            )}
        </div>
    );
}
