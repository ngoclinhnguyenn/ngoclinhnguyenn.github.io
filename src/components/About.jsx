import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GlassCard } from './ui/GlassCard';
import { SparkleText } from './ui/SparkleText';

const AWARDS = [
    { text: 'Northeastern University — 2024-2025 Student Employee of the Year Winner', emoji: '🏆' },
    { text: 'GSBA Non-Profit of the Year in 2025 Nominee', emoji: '🌟' },
    { text: 'College of Professional Studies Leaders and Scholars Award', emoji: '🎓' },
    { text: 'College of Professional Studies Leaders and Scholar Scholarship Recipient', emoji: '✨' },
];

const SKILLS = [
    'Product Strategy', 'Business Analysis', 'Project Management',
    'Agile / Scrum', 'Event Coordination', 'UX Research',
    'Data Analysis', 'Stakeholder Management', 'Marketing Ops',
    'Figma', 'Jira', 'SQL',
];

const SKILL_COLORS = [
    'var(--pastel-lilac)', 'var(--pastel-sky)', 'var(--pastel-mint)',
    'var(--pastel-peach)', 'var(--pastel-rose)', 'var(--pastel-butter)',
];

export function About() {
    const [ref, inView] = useScrollReveal({ threshold: 0.15, rootMargin: '0px 0px -80px 0px' });
    const containerRef = useRef(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
    const imageY = useTransform(scrollYProgress, [0, 1], [-24, 24]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
    };

    return (
        <section id="about" className="py-10 md:py-12 px-6 max-w-wide mx-auto" ref={containerRef}>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={containerVariants}
                className="space-y-10"
            >
                {/* Section header */}
                <motion.div variants={itemVariants}>
                    <div className="flex items-baseline gap-2 mb-2">
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight bg-gradient-to-r from-accent via-pastel-rose to-pastel-sky bg-clip-text text-transparent inline-block pb-1">
                            About Me
                        </h2>
                        <SparkleText glyph="✦" size="text-xl" delay={0.6} />
                    </div>
                </motion.div>

                <div className="flex flex-col gap-12 lg:gap-16">
                    {/* Content */}
                    <motion.div className="w-full space-y-8" variants={itemVariants}>
                        {/* Section heading */}
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

                        {/* Skills tag cloud */}
                        <div>
                            <h3 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider font-mono">
                                Skills & Expertise
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        className="px-3 py-1.5 rounded-pill text-xs font-semibold text-text-primary"
                                        style={{ backgroundColor: SKILL_COLORS[i % SKILL_COLORS.length] }}
                                        initial={shouldReduceMotion ? { scale: 1 } : { scale: 0.85, opacity: 0 }}
                                        whileInView={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.04 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Awards — glass badge cards */}
                        <div>
                            <h3 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider font-mono">
                                Awards & Recognition
                            </h3>
                            <div className="space-y-2.5">
                                {AWARDS.map((award, i) => (
                                    <motion.div
                                        key={i}
                                        variants={itemVariants}
                                        whileHover={shouldReduceMotion ? undefined : { x: 4, transition: { duration: 0.2 } }}
                                    >
                                        <GlassCard className="flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:border-accent-soft">
                                            <span className="text-lg shrink-0 mt-0.5">{award.emoji}</span>
                                            <p className="text-sm text-text-secondary leading-snug">{award.text}</p>
                                        </GlassCard>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
