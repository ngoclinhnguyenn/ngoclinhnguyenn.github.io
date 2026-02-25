import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const AWARDS = [
    'Northeastern University — 2024-2025 Student Employee of the Year Winner',
    'GSBA Non-Profit of the Year in 2025 Nominee',
    'College of Professional Studies Leaders and Scholars Award',
    'College of Professional Studies Leaders and Scholar Scholarship Recipient',
];

export function About() {
    const [ref, inView] = useScrollReveal({ threshold: 0.2, rootMargin: '0px 0px -100px 0px' });
    const containerRef = useRef(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
    };

    return (
        <section id="about" className="py-16 md:py-24 px-6 max-w-wide mx-auto" ref={containerRef}>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={containerVariants}
                className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start"
            >
                {/* Left: Image with Parallax */}
                <motion.div
                    className="w-full lg:w-2/5 shrink-0"
                    variants={itemVariants}
                >
                    <motion.div
                        style={{ y: shouldReduceMotion ? 0 : imageY }}
                        className="relative rounded-2xl overflow-hidden shadow-lg border border-border bg-bg-secondary aspect-[4/5]"
                    >
                        <div className="absolute inset-0 bg-accent/5 mix-blend-overlay z-10 pointer-events-none" />
                        <img
                            src="/images/me.jpg"
                            alt="Linh Nguyen casually posing"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                            onError={(e) => { e.target.src = '/images/propic.png'; }}
                        />
                    </motion.div>
                </motion.div>

                {/* Right: Text Content */}
                <motion.div className="w-full lg:w-3/5 space-y-8" variants={itemVariants}>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6 bg-gradient-to-r from-accent to-pastel-sky bg-clip-text text-transparent inline-block pb-1">
                            About Me
                        </h2>
                        <div className="space-y-4 text-base text-text-secondary leading-relaxed">
                            <p>
                                I am a passionate Project and Product Manager with a deep-rooted background in business analysis, marketing, and event coordination. My unique blend of experiences allows me to bridge the gap between technical requirements and strategic business vision.
                            </p>
                            <p>
                                Transforming complex data into intuitive, meaningful digital experiences is what drives me. By combining rigorous analytical skills with visionary project leadership, I strive to create products that not only meet business metrics but genuinely improve the user experience.
                            </p>
                            <p className="italic text-text-tertiary">
                                When I'm not designing technical solutions or leading teams, you can find me exploring new UX paradigms, mentoring emerging leaders, and analyzing the latest product strategies.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-text-primary mb-4">
                            Awards & Recognition
                        </h3>
                        <ul className="space-y-3">
                            {AWARDS.map((award, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start group transition-transform duration-300 hover:translate-x-1"
                                >
                                    <span className="shrink-0 mr-3 text-lg tabular-nums">🏆</span>
                                    <span className="text-base text-text-secondary border-l-[3px] border-transparent pl-0 group-hover:border-accent group-hover:pl-3 group-hover:text-text-primary transition-all duration-300">
                                        {award}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
