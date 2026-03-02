import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MagneticButton } from './ui/MagneticButton';
import { GlassCard } from './ui/GlassCard';
import { SparkleText } from './ui/SparkleText';
import { Mail, Linkedin, FileText, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export function Hero() {
    const containerRef = useRef(null);
    const shouldReduceMotion = useReducedMotion();

    const handleConfetti = (e) => {
        if (shouldReduceMotion) return;
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#B48AF5', '#FDC5C5', '#BAE3FD', '#B8F4D4', '#DDD6FE']
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.09, delayChildren: 0.1 },
        },
    };

    const itemUp = {
        hidden: { y: 28, opacity: 0 },
        visible: {
            y: 0, opacity: 1,
            transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const itemRight = {
        hidden: { x: 30, opacity: 0 },
        visible: {
            x: 0, opacity: 1,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-16 pb-8 px-6"
        >
            {/* Layout — asymmetric desktop split */}
            <div className="max-w-wide mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

                {/* ── LEFT: Text Column ── */}
                <motion.div
                    className="flex-1 max-w-xl lg:max-w-none flex flex-col gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >


                    {/* Name */}
                    <motion.div variants={itemUp}>
                        <h1 className="font-display leading-[1.1] tracking-tight flex flex-wrap items-center gap-x-4 lg:gap-x-6">
                            <span
                                className="text-[clamp(4rem,10vw,8rem)] font-extrabold text-shimmer"
                            >
                                Linh
                            </span>
                            <span className="text-[clamp(4rem,10vw,8rem)] font-extrabold text-text-primary whitespace-nowrap">
                                Nguyen<span className="ml-3 text-[0.4em] align-middle inline-block -translate-y-3 lg:-translate-y-5">
                                    <SparkleText glyph="✦" size="text-3xl lg:text-4xl" delay={0.8} />
                                </span>
                            </span>
                        </h1>
                    </motion.div>

                    {/* Headline */}
                    <motion.p variants={itemUp} className="text-xl md:text-2xl font-medium text-text-secondary leading-snug max-w-2xl mt-2">
                        Project/Product Manager · IT Consultant &amp; Business Analyst · Marketing &amp; Event Coordinator
                    </motion.p>

                    {/* Tagline */}
                    <motion.p variants={itemUp} className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl opacity-90">
                        Transforms data into meaningful digital experiences — business analysis meets visionary project leadership.
                        Blending product strategy, data insights, and user experience.
                    </motion.p>

                    {/* Social CTA Row */}
                    <motion.div variants={itemUp} className="flex flex-wrap items-center gap-3 pt-2">
                        <MagneticButton
                            href="https://www.linkedin.com/in/ngoclinhnguyenn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-full border border-border bg-bg-secondary text-text-secondary hover:text-accent hover:border-accent-soft shadow-sm transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </MagneticButton>

                        <MagneticButton
                            href="mailto:ngoclinhnguyenk3@gmail.com"
                            className="w-11 h-11 rounded-full border border-border bg-bg-secondary text-text-secondary hover:text-accent hover:border-accent-soft shadow-sm transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={18} />
                        </MagneticButton>

                        <MagneticButton
                            href="https://docs.google.com/document/d/1vZ02x0VWySrJvV_b7jdkwknSxZpkGIuWmgZ2rtwJbcs/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleConfetti}
                            className="px-5 h-11 rounded-pill font-semibold text-sm flex items-center gap-2 text-white transition-all hover:shadow-glow-accent hover:scale-[1.02] active:scale-[0.98] group"
                            style={{ background: 'var(--gradient-accent)' }}
                        >
                            <FileText size={16} />
                            <span>View Resume</span>
                            <ArrowUpRight size={14} className="opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </MagneticButton>
                    </motion.div>
                </motion.div>

                {/* ── RIGHT: Visual Column ── */}
                <motion.div
                    className="flex-none flex flex-col items-center gap-5 w-full lg:w-auto relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Floating Decorative Elements */}
                    {!shouldReduceMotion && (
                        <>
                            <motion.div
                                className="absolute -top-10 -left-10 w-24 h-24 bg-pastel-lilac/30 rounded-full blur-2xl -z-10"
                                animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
                                transition={{ duration: 6, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -bottom-10 -right-10 w-32 h-32 bg-pastel-rose/20 rounded-full blur-3xl -z-10"
                                animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
                                transition={{ duration: 8, repeat: Infinity }}
                            />
                        </>
                    )}

                    <motion.div
                        variants={itemRight}
                        className="relative"
                    >
                        <div className="relative w-[320px] md:w-[420px] lg:w-[500px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-border bg-bg-secondary group">
                            <img
                                src="/images/me.jpg"
                                alt="Linh Nguyen"
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                                onError={(e) => { e.target.src = '/propic.png'; }}
                            />
                            {/* subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-bg/20 to-transparent pointer-events-none" />
                        </div>

                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
}
