import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { MagneticButton } from './ui/MagneticButton';
import { Mail, Linkedin, FileText, ArrowUpRight } from 'lucide-react';

export function Hero() {
    const containerRef = useRef(null);
    const mousePos = useMousePosition(containerRef);
    const shouldReduceMotion = useReducedMotion();

    const parallaxOffset = (factor) => {
        if (shouldReduceMotion) return { x: 0, y: 0 };
        return {
            x: mousePos.rx * factor,
            y: mousePos.ry * factor,
        };
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
        },
    };

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-24 pb-16 px-6"
        >

            {/* Parallax Background Blobs */}
            <motion.div
                animate={{
                    x: parallaxOffset(40).x,
                    y: parallaxOffset(40).y,
                }}
                transition={{ type: 'spring', damping: 40, stiffness: 100 }}
                className="absolute top-[20%] left-[15%] w-[300px] h-[300px] bg-pastel-lilac/30 rounded-full blur-[80px] -z-10"
            />
            <motion.div
                animate={{
                    x: parallaxOffset(-60).x,
                    y: parallaxOffset(-60).y,
                }}
                transition={{ type: 'spring', damping: 40, stiffness: 100 }}
                className="absolute bottom-[20%] right-[15%] w-[300px] h-[300px] bg-pastel-rose/30 rounded-full blur-[80px] -z-10"
            />
            <motion.div
                animate={{
                    x: parallaxOffset(30).x,
                    y: parallaxOffset(-30).y,
                }}
                transition={{ type: 'spring', damping: 40, stiffness: 100 }}
                className="absolute top-[30%] right-[30%] w-[200px] h-[200px] bg-pastel-sky/30 rounded-full blur-[60px] -z-10"
            />

            {/* Content Stack */}
            <motion.div
                className="relative z-10 max-w-reading w-full mx-auto flex flex-col items-center text-center space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Name & Headline */}
                <motion.div variants={itemVariants} className="space-y-4">
                    <h1 className="text-[clamp(3.5rem,7vw,5rem)] font-bold tracking-tight text-text-primary leading-tight">
                        Linh Nguyen
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium text-text-secondary max-w-2xl mx-auto">
                        Project/Product Manager &middot; IT Consultant & Business Analyst &middot; Marketing & Event Coordinator
                    </h2>
                </motion.div>

                {/* Tagline */}
                <motion.p variants={itemVariants} className="text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
                    Transforms data into meaningful digital experiences — business analysis meets visionary project leadership. Background in BA, project management, event coordination, and marketing. Interested in blending product strategy, data insights, and user experience.
                </motion.p>

                {/* Social Row & CTA */}
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-4 pt-4">
                    <MagneticButton
                        href="https://www.linkedin.com/in/ngoclinhnguyenn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-bg-secondary border border-border text-text-secondary hover:text-accent hover:border-accent-soft shadow-sm"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </MagneticButton>

                    <MagneticButton
                        href="mailto:ngoclinhnguyenk3@gmail.com"
                        className="w-12 h-12 rounded-full bg-bg-secondary border border-border text-text-secondary hover:text-accent hover:border-accent-soft shadow-sm"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </MagneticButton>

                    <MagneticButton
                        href="https://docs.google.com/document/d/1vZ02x0VWySrJvV_b7jdkwknSxZpkGIuWmgZ2rtwJbcs/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 h-12 rounded-full bg-bg-secondary border border-border text-text-primary font-medium flex items-center gap-2 hover:bg-accent hover:text-white hover:border-transparent transition-all shadow-sm group"
                    >
                        <FileText size={18} />
                        <span>View Resume</span>
                        <ArrowUpRight size={16} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </MagneticButton>
                </motion.div>
            </motion.div>
        </section>
    );
}
